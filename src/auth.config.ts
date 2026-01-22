import type { NextAuthConfig, Profile, Session } from 'next-auth';
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Credentials from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

// Types are extended in src/types/next-auth.d.ts

// Check if mock auth is enabled
const useMockAuth = process.env.USE_MOCK_AUTH === "true";

// Mock users by role
const MOCK_USERS = {
  EMPLOYEE: {
    id: "mock-employee-id",
    email: "frontend@example.com",
    name: "Test Employee",
    role: "EMPLOYEE",
    departmentId: null,
    departmentName: "Engineering",
  },
  MANAGER: {
    id: "mock-manager-id",
    email: "eng.manager@example.com",
    name: "Test Manager",
    role: "MANAGER",
    departmentId: null,
    departmentName: "Engineering",
  },
  ADMIN: {
    id: "mock-admin-id",
    email: "admin@example.com",
    name: "Admin User",
    role: "ADMIN",
    departmentId: null,
    departmentName: "Human Resources",
  },
} as const;

type MockRole = keyof typeof MOCK_USERS;

// Get the current mock role from cookie
async function getMockUser() {
  if (!useMockAuth) return MOCK_USERS.EMPLOYEE;

  try {
    const cookieStore = await cookies();
    const mockRole = cookieStore.get("mock-role")?.value as MockRole | undefined;
    return MOCK_USERS[mockRole ?? "EMPLOYEE"];
  } catch {
    return MOCK_USERS.EMPLOYEE;
  }
}

// Credentials provider that auto-approves for local development
const mockAuthProvider = Credentials({
  name: "mock",
  credentials: {},
  async authorize() {
    // Get mock user based on cookie selection
    const mockUser = await getMockUser();
    return mockUser;
  }
});

// Microsoft Entra ID provider for production
const entraIdProvider = MicrosoftEntraID({
  clientId: process.env.AZURE_AD_CLIENT_ID!,
  clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
  issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0`,
  authorization: {
    params: {
      scope: "openid profile email User.Read",
      tenant: process.env.AZURE_AD_TENANT_ID!
    }
  },
});

// Define the core configuration using satisfies for type checking
export const authConfig = {
  providers: useMockAuth ? [mockAuthProvider] : [entraIdProvider],
  callbacks: {
    // Skip sign-in page in mock mode - auto authorize
    async signIn() {
      return true;
    },
    async jwt({ token, user, account, profile }) {
      // In mock mode, always refresh from cookie to allow role switching
      if (useMockAuth) {
        const mockUser = await getMockUser();
        token.id = mockUser.id;
        token.name = mockUser.name;
        token.email = mockUser.email;
        token.role = mockUser.role;
        token.departmentId = mockUser.departmentId;
        token.departmentName = mockUser.departmentName;
        return token;
      }

      // Handle initial sign-in
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.departmentId = user.departmentId;
        token.departmentName = user.departmentName;
      }

      // Handle Entra ID provider
      if (account && profile) {
        token.accessToken = account.access_token;
        token.roles = (profile as Profile & { roles?: string[] }).roles || [];
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.roles = token.roles;
        session.user.departmentId = token.departmentId;
        session.user.departmentName = token.departmentName;
      }
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
