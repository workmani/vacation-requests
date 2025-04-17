# Authentication Architecture Comparison: Integrated Next.js vs. Separate C# Backend

This document compares two potential authentication architectures for the Vacation Request App, focusing on how user authentication and API security are handled.

## Scenario 1: Current Model - Integrated Next.js (Full-Stack)

This is the architecture currently implemented.

**Overview:**
*   Next.js serves both the frontend UI (React components) and the backend API routes (`/api/...`).
*   Authentication is managed server-side by Next.js using the `next-auth` library.

**Authentication Flow:**
1.  **Login:** User initiates login -> Redirected to Microsoft Entra ID.
2.  **Callback:** User authenticates -> Entra ID redirects back to Next.js (`/api/auth/callback/...`).
3.  **Session Creation:** The Next.js *server* securely exchanges the authorization code from Entra ID for tokens (ID, Access, Refresh).
4.  **Cookie Issuance:** Next.js creates a **secure, `httpOnly` session cookie** containing an encrypted JWT or a session reference. This cookie is sent to the browser.
5.  **Subsequent Requests:** The browser automatically sends the `httpOnly` cookie with every request to the Next.js application domain.

**API Security:**
*   **Middleware (`middleware.ts`):** Checks for the presence and validity of the session cookie for *all* incoming requests (except excluded paths). Redirects unauthenticated users.
*   **API Route Handlers (`app/api/.../route.ts`):** Use `getServerSession(authOptions)` on the server-side. This function securely reads the cookie, verifies the session/JWT using the `NEXTAUTH_SECRET`, and provides the validated user session data (including roles).
*   **Frontend Calls:** Frontend components making calls to *internal* Next.js API routes (`/api/...`) **do not** need to handle tokens manually. The browser sends the session cookie automatically.

**Security Considerations:**
*   **Token Storage:** Sensitive tokens (refresh, potentially access tokens) are managed server-side by Next.js and are not directly exposed to client-side JavaScript.
*   **Session Cookie:** The `httpOnly` flag prevents client-side JavaScript from accessing the cookie, mitigating the risk of Cross-Site Scripting (XSS) attacks stealing the session.
*   **CSRF Protection:** NextAuth.js typically includes built-in Cross-Site Request Forgery (CSRF) protection.

**Entra ID App Registration (Scenario 1 - Current Model):**
*   **Type:** Register **one** application.
*   **Platform:** Configure the platform type as **"Web"**.
    *   *Reasoning:* The Next.js server acts as a confidential client, securely handling the client secret during the token exchange.
*   **Redirect URIs:**
    *   Add the base URL followed by the NextAuth.js callback path for Azure AD.
    *   Example (Development): `http://localhost:3000/api/auth/callback/azure-ad`
    *   Example (Production): `https://your-app-domain.com/api/auth/callback/azure-ad`
*   **Credentials:**
    *   Generate a **Client Secret**. This needs to be securely stored in the Next.js application's environment variables (`AZURE_AD_CLIENT_SECRET`).
*   **Required Information:** The Next.js app needs the following from the registration:
    *   Application (client) ID (`AZURE_AD_CLIENT_ID`)
    *   Directory (tenant) ID (`AZURE_AD_TENANT_ID`)
    *   Client Secret Value (`AZURE_AD_CLIENT_SECRET`)
*   **API Permissions (Delegated):**
    *   Grant standard OpenID Connect permissions: `openid`, `profile`, `email`.
    *   Add `User.Read` (often needed for basic profile info).
*   **App Roles (Optional but Recommended for RBAC):**
    *   Define roles within the App Registration's manifest (e.g., `Admin`, `Manager`, `Employee`).
    *   These roles need to be assigned to users/groups via the corresponding **Enterprise Application** in Entra ID.

**Pros:**
*   **Simplicity:** Authentication and API logic are tightly integrated within one framework.
*   **Security:** Leverages secure `httpOnly` cookies, avoiding common browser storage vulnerabilities.
*   **Performance:** Fewer network hops for frontend-backend communication.

**Cons:**
*   **Monolithic:** Frontend and backend are coupled.
*   **Technology Lock-in:** Primarily a Node.js/JavaScript ecosystem.

---

## Scenario 2: Separate Frontend (Next.js) + Backend (C# API)

This is a potential future architecture where the API logic is moved to a separate C# application.

**Overview:**
*   Next.js serves only the frontend UI.
*   A separate C# application (e.g., ASP.NET Core Web API hosted on Azure App Service) provides the backend API.
*   Authentication relies on **Bearer Tokens** passed between the frontend and backend.

**Authentication Flow:**
1.  **Login:** User initiates login via the Next.js frontend -> Redirected to Microsoft Entra ID.
2.  **Callback:** User authenticates -> Entra ID redirects back to Next.js.
3.  **Token Acquisition:** Next.js *server* (using `next-auth` or MSAL) securely exchanges the code for tokens. Crucially, it requests an **Access Token** specifically **audienced for the C# backend API**.
4.  **Token Management:** Next.js needs a strategy to manage this access token (and potentially a refresh token). It could store it within its *own* server-side session state (linked to its session cookie) or pass it carefully to the client.
5.  **API Calls:**
    *   When the Next.js frontend needs data from the C# API, its client-side code (or potentially a Next.js API route acting as a proxy) must retrieve the access token.
    *   The access token is included in the `Authorization: Bearer <token>` header of the request sent to the C# API.

**API Security (C# Backend):**
*   **JWT Middleware:** The C# API uses JWT Bearer authentication middleware (e.g., `Microsoft.AspNetCore.Authentication.JwtBearer`).
*   **Token Validation:** On every request, the middleware intercepts the `Authorization` header, extracts the Bearer token, and validates it:
    *   Checks signature against Entra ID's public keys.
    *   Verifies issuer (`iss` claim).
    *   Verifies audience (`aud` claim matches the C# API's identifier).
    *   Checks expiration (`exp` claim).
*   **Authorization:** The C# API uses the validated claims (like `roles`, `scp`, `sub`) within the token to authorize the request (e.g., using `[Authorize]` attributes).

**Security Considerations:**
*   **Token Storage (Frontend):** **THIS IS THE CRITICAL PART.**
    *   **❌ Avoid Local Storage:** Storing JWTs (especially access tokens) in `localStorage` or `sessionStorage` is **highly discouraged** because they are vulnerable to XSS attacks. Malicious scripts injected into your site can easily read and steal tokens from there.
    *   **✅ Secure Handling (BFF Approach):** The Next.js application can act as a secure intermediary (a true BFF). It handles the login, securely stores the access/refresh tokens server-side within its own session state (tied to the `httpOnly` cookie), and attaches the Bearer token to outgoing requests to the C# API *from the Next.js server*. The frontend JS *never sees* the access token.
    *   **Alternative (Less Ideal for SSR):** In pure SPAs without a backend session, tokens might be stored in memory, requiring robust refresh mechanisms. This is less applicable to Next.js which has server-side capabilities.
*   **HTTPS:** Essential for protecting the Bearer token during transit between the Next.js frontend and the C# backend.

**Entra ID App Registrations (Scenario 2 - Separate Services):**
*   **Type:** Register **two** separate applications.

*   **Application 1: Frontend (Next.js)**
    *   **Platform:** Configure the platform type as **"SPA" (Single-Page Application)**.
        *   *Reasoning:* Although Next.js has a server, from the perspective of the API call authentication flow using Bearer tokens initiated client-side (or proxied), it behaves like an SPA. It cannot securely store a secret *for the purpose of getting tokens for the separate backend*. It will use PKCE.
    *   **Redirect URIs:**
        *   Add the base URLs where the frontend application runs.
        *   Example (Development): `http://localhost:3000` (or specific callback path if using MSAL directly)
        *   Example (Production): `https://your-app-domain.com`
    *   **API Permissions (Delegated):**
        *   Grant standard OpenID Connect permissions: `openid`, `profile`, `email`, `User.Read`.
        *   **Crucially:** Grant permissions to call the scopes exposed by the **Backend (C# API)** registration (see below).
    *   **Credentials:** No client secret is typically needed for the SPA registration when using Authorization Code Flow with PKCE.
    *   **Required Information:** Needs its own Application (client) ID and the Directory (tenant) ID.

*   **Application 2: Backend (C# API)**
    *   **Platform:** Configure as a **Web API**.
    *   **Expose an API:**
        *   Define an **Application ID URI (Audience)**. This unique URI identifies your API (e.g., `api://your-csharp-api-client-id` or a custom domain URI).
        *   Define **Scopes** (permissions). These represent granular actions the API protects (e.g., `Requests.Read`, `Requests.Write`, `TimeOff.Approve`).
    *   **App Roles (Optional):** Can also define App Roles here if the C# API wants to manage roles internally based on assignments within *this* registration.
    *   **Credentials:** Usually doesn't require a client secret for basic JWT validation (validation uses public keys).
    *   **Required Information:** The C# API needs its Application ID URI (Audience) and the Directory (tenant) ID configured for token validation.

*   **Linking:** In the **Frontend** App Registration's API Permissions, you need to add permissions under "APIs my organization uses", find the **Backend** App Registration, and select the scopes (e.g., `Requests.Read`) that the frontend needs to be able to request tokens for.

**Pros:**
*   **Separation of Concerns:** Clear division between frontend and backend logic.
*   **Technology Flexibility:** Allows using the best language/framework for each tier (e.g., C# for backend logic).
*   **Scalability:** Frontend and backend can be scaled independently.

**Cons:**
*   **Increased Complexity:** Managing authentication and communication across two separate services.
*   **Token Handling:** Requires careful, secure management of access tokens, especially avoiding insecure browser storage.
*   **Network Latency:** API calls involve network hops between frontend and backend services.
*   **CORS:** Requires configuring Cross-Origin Resource Sharing on the C# backend.

---

## Why BFF Was Proposed

The previous experience with storing tokens in Local Storage highlights a major security risk (XSS). A Backend-for-Frontend (BFF) pattern aims to mitigate this.

*   **Scenario 1 (Integrated Next.js):** Already acts like a BFF. The Next.js server handles authentication and session management using secure cookies, keeping tokens away from vulnerable browser storage.
*   **Scenario 2 (Separate Services):** If moving to a separate C# backend, the Next.js application can *still* be designed to act as a BFF. It would handle the user login, securely manage the tokens needed for the C# API on its server-side, and proxy API calls. This prevents the browser's JavaScript environment from needing direct access to or storage for the API access tokens, thus avoiding the Local Storage vulnerability.

Choosing between these architectures involves trade-offs in complexity, scalability, security practices, and team expertise. 