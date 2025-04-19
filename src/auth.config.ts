import type { NextAuthConfig, Account, Profile, Session } from 'next-auth';
// For beta.25, the provider import should be directly from next-auth
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"; 
import type { JWT } from "next-auth/jwt";

// Types are extended in src/types/next-auth.d.ts

// Define the core configuration using satisfies for type checking
export const authConfig = {
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      // Explicitly set the issuer for the specific tenant
      issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0`,
      // Move tenantId into authorization params for this version
      authorization: {
        params: { 
          scope: "openid profile email User.Read",
          tenant: process.env.AZURE_AD_TENANT_ID! // Correct placement for tenantId
        }
      }, 
    }),
  ],
  callbacks: {
    // Use specific types if known, or 'any'/'unknown' temporarily during refactor
    async jwt({ token, account, profile }: { token: JWT; account: Account | null; profile?: Profile & { roles?: string[] } }) {
      if (account && profile) {
        token.accessToken = account.access_token;
        // Accessing roles from profile. Ensure 'roles' is part of the Profile type extension
        // or adjust based on actual profile structure from Entra ID
        token.roles = profile.roles || []; 
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add properties from token to session
      if (session.user) {
        // Extend Session['user'] type in next-auth.d.ts to include roles
        session.user.roles = token.roles;
      }
      // Extend Session type in next-auth.d.ts to include accessToken if needed
      if (session) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" }, 
  // The secret is typically handled by the AUTH_SECRET env var automatically in v5
  // secret: process.env.NEXTAUTH_SECRET, 
} satisfies NextAuthConfig; 