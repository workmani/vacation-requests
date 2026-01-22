import { DefaultSession, DefaultUser } from "next-auth";

// Extend the default types for session and user
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      roles?: string[];
      role?: string; // Single role from credentials provider
      departmentId?: string | null;
      departmentName?: string | null;
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object returned in the OAuth providers' profile callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    roles?: string[];
    role?: string;
    departmentId?: string | null;
    departmentName?: string | null;
  }

  /**
   * Usually contains information about the provider being used,
   * like ID tokens, access tokens, etc.
   */
  interface Profile {
    roles?: string[];
  }
}

// Extend the JWT type
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id?: string;
    roles?: string[];
    role?: string;
    departmentId?: string | null;
    departmentName?: string | null;
  }
} 