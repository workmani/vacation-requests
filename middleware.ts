// Re-export the default middleware function from next-auth
// This automatically handles session checking and redirection for pages
export { default } from "next-auth/middleware";

// Configure the matcher to apply middleware to relevant routes
export const config = {
  // Apply middleware to all paths EXCEPT:
  // - /api/auth/**: NextAuth API routes (signin, callback, session, etc.)
  // - /_next/static/**: Next.js static files (CSS, JS chunks)
  // - /_next/image/**: Next.js image optimization routes
  // - /favicon.ico: Favicon file
  // - /logo.svg: Logo file (if served from public)
  // Add any other public routes or static assets here if needed
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (API routes for authentication)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.svg (logo file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|logo.svg).*)",
  ],
}; 