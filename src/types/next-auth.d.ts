import { DefaultSession, DefaultUser } from "next-auth";

// Extend the default types for session and user
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string; // Add accessToken to Session type
    user: {
      roles?: string[]; // Add your roles property
    } & DefaultSession["user"]; // Keep the default properties
  }

  /**
   * The shape of the user object returned in the OAuth providers' profile callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    roles?: string[]; // Add roles to the User type
  }

  /**
   * Usually contains information about the provider being used,
   * like ID tokens, access tokens, etc.
   */
  interface Profile {
    roles?: string[]; // Add roles to the Profile type (useful for jwt callback)
  }
}

// Extend the JWT type
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    roles?: string[]; // Add roles to the JWT type
  }
} 