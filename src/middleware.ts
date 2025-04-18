import { withAuth } from "next-auth/middleware"
import type { NextRequest } from "next/server"

export default withAuth(
  // `withAuth` augments your Request with the user's token.
  function middleware(req: NextRequest) {
    console.log(">>> Middleware function executed for:", req.nextUrl.pathname);
    // You could add redirection logic here based on req.nextauth.token
    // console.log("Token:", req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        console.log(">>> Authorized callback triggered for:", req.nextUrl.pathname);
        // console.log("Token in authorized callback:", token);
        // Return true if the user has a token (logged in), otherwise false (triggers redirect)
        const isAuthorized = !!token;
        console.log(">>> Authorized result:", isAuthorized);
        return isAuthorized;
      },
    },
    // Ensure it knows where to redirect if authorized returns false
    // pages: {
    //   signIn: '/api/auth/signin', // This is the default
    // }
  }
)

// Restore the original matcher
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