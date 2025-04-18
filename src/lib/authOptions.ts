import { AuthOptions, Account, Profile, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import AzureADProvider from "next-auth/providers/azure-ad";

// Types are extended in types/next-auth.d.ts

// Define and export authOptions here
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  // Callbacks to handle roles
  callbacks: {
    async jwt({ token, account, profile }: { token: JWT; account: Account | null; profile?: Profile }) {
      if (account && profile) {
        token.accessToken = account.access_token;
        if (profile.roles) {
           token.roles = profile.roles;
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.roles && session.user) {
        session.user.roles = token.roles;
      }
      return session;
    },
  },
  // Add secret for production
  secret: process.env.NEXTAUTH_SECRET,
}; 