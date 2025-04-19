import { auth } from "./auth"; // Import the v5 auth helper
import { NextResponse } from 'next/server';

// Define public routes (adjust as needed)
const publicRoutes = ["/login", "/register", "/about"]; // Add any routes that don't require auth
const rootRoute = "/"; // Or your main landing page
const defaultLoginRedirect = "/dashboard"; // Where to redirect after login

export default auth((req) => {
  const { nextUrl } = req;
  const session = req.auth; // Access session info directly from req.auth
  const isLoggedIn = !!session;

  // Root route ("/") should NOT be considered public unless explicitly listed
  const isPublic = publicRoutes.includes(nextUrl.pathname);

  console.log(">>> Middleware v5: Path:", nextUrl.pathname, "| IsLoggedIn:", isLoggedIn, "| IsPublic:", isPublic);

  // Redirect logged-in users from public routes (like login) to dashboard
  if (isLoggedIn && isPublic && nextUrl.pathname !== rootRoute) {
    console.log(">>> Redirecting logged-in user from public route to dashboard");
    return NextResponse.redirect(new URL(defaultLoginRedirect, nextUrl));
  }

  // Redirect unauthenticated users from protected routes to login
  if (!isLoggedIn && !isPublic) {
    console.log(">>> Redirecting unauthenticated user to login");
    // You might want to preserve the intended URL via callbackUrl
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    // Adjust the sign-in URL if you have a custom one
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }

  // Allow the request to proceed
  console.log(">>> Allowing request to proceed.");
  return NextResponse.next();
});

// Matcher remains the same, applying middleware to most routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (API routes for authentication)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.svg (logo file) // Add other public assets if needed
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|logo.svg).*)",
  ],
}; 