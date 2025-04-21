# Authentication End-to-End Tests

This document outlines the setup and execution of the end-to-end (E2E) authentication tests using Playwright.

## Purpose

These tests verify the core authentication flows of the application, including:

*   Redirection of unauthenticated users.
*   Login functionality (implicitly via saved authentication state).
*   Logout functionality.
*   Role-Based Access Control (RBAC) ensuring users can only access features appropriate for their assigned roles (Employee vs. Manager).

## Prerequisites

Before running the authentication tests, ensure the following setup is complete:

1.  **Environment Variables:**
    *   Create a `.env.local` file in the project root.
    *   Add the necessary Azure AD application registration details (Client ID, Tenant ID, Client Secret) required by NextAuth (`AUTH_AZURE_AD_CLIENT_ID`, `AUTH_AZURE_AD_CLIENT_SECRET`, `AUTH_AZURE_AD_TENANT_ID`).
    *   Ensure `AUTH_SECRET` is set (`openssl rand -hex 32` can generate one).

2.  **Authentication State Files:**
    *   The tests rely on pre-saved authentication states for different user roles to avoid logging in repeatedly.
    *   These files are stored in the `.auth/` directory (which should be in your `.gitignore`).
    *   **Generation Process:**
        *   Run the authentication script: `npm run test:e2e:auth`.
        *   The script will open a browser window; log in using the appropriate test user credentials provided by your Azure AD administrator.
        *   **MFA:** If prompted for Multi-Factor Authentication (e.g., Authenticator app), complete the verification manually on your device. This is expected during this one-time setup.
        *   Once login is successful, the script saves the authentication state to `.auth/user.json`.
        *   **Rename the file** based on the role of the user you logged in as:
            *   Log in as `TestEmployee` -> Rename `.auth/user.json` to `.auth/employee.json`.
            *   Log in as `TestManager` -> Run script again, log in, rename `.auth/user.json` to `.auth/manager.json`.
    *   You should end up with `.auth/employee.json` and `.auth/manager.json`.

## Running Tests

*   To run all E2E tests in headless mode: `npm run test:e2e`
*   To run tests with the Playwright UI for debugging: `npm run test:e2e:ui`

The relevant test file is `tests/auth.spec.ts`.

## Test Structure (`tests/auth.spec.ts`)

The tests are organized into `describe` blocks:

*   **`Authentication Flow - Unauthenticated`:** Contains tests for users who are not logged in.
    *   Verifies redirection from protected routes (e.g., `/`) to the sign-in page (`/api/auth/signin`).
*   **`RBAC - Employee Role`:** Uses the `employee.json` authentication state (`test.use({ storageState: employeeAuthFile });`).
    *   Verifies access to common pages accessible to all logged-in users (e.g., `/requests`, `/calendar`, `/balances`).
    *   Verifies *denial* of access (via redirect) to manager-specific pages (e.g., `/team-calendar`, `/team-requests`).
*   **`RBAC - Manager Role`:** Uses the `manager.json` authentication state (`test.use({ storageState: managerAuthFile });`).
    *   Verifies access to common pages.
    *   Verifies access to manager-specific pages.
    *   Includes the test for successful logout.

## RBAC Implementation Notes

*   Role-based access is tested by applying different `storageState` files to specific test blocks.
*   Backend access control (page-level redirects) is verified by checking `page.toHaveURL()` after attempting to navigate to restricted pages.
*   Frontend access control (conditionally rendered UI elements, like the "Team Calendar" card on the dashboard) is handled separately in the component code (e.g., `src/app/page.tsx`) by checking user roles from the session.

## Locators & Maintenance

*   The tests rely on specific UI elements being present (e.g., headings identified by `getByRole('heading', { name: /.../i })`, buttons identified by text `locator('button:has-text(...)')`).
*   If the application's UI changes significantly (e.g., heading text changes, button labels are updated), these locators may need to be updated in `tests/auth.spec.ts` to keep the tests passing. 