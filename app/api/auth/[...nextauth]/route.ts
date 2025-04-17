import NextAuth, { Account, Profile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import AzureADProvider, { AzureADProfile } from "next-auth/providers/azure-ad";

// Types are extended in types/next-auth.d.ts

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      // Optional: Define specific scopes or profile information
      // authorization: { params: { scope: "openid profile email User.Read" } },
    }),
    // ...add more providers here if needed
  ],
  // Add callbacks for customizing behavior (e.g., adding roles to token)
  callbacks: {
    async jwt({ token, account, profile }: { token: JWT; account: Account | null; profile?: Profile }) {
      // Persist the access_token and roles right after signin.
      // `profile` contains information from the OIDC provider (Azure AD).
      if (account && profile) {
        token.accessToken = account.access_token;
        // IMPORTANT: Check the actual claim name in your Azure AD ID token.
        // It's often 'roles', but could be different based on configuration.
        // Types/Profile is extended via types/next-auth.d.ts to include roles
        if (profile.roles) {
           token.roles = profile.roles;
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Send properties to the client, like roles from the JWT.
      // `token` contains the data managed by the `jwt` callback.
      if (token?.roles && session.user) {
        // Types/Session is extended via types/next-auth.d.ts to include roles
        session.user.roles = token.roles;
      }
      // Optionally add accessToken to session if needed client-side (use cautiously)
      // session.accessToken = token.accessToken;
      return session;
    },
  },

  // Add secret for production
  secret: process.env.NEXTAUTH_SECRET,

  // Optional: Configure pages, session strategy, debug mode etc.
  // pages: {
  //   signIn: '/auth/signin',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  // },
  // session: {
  //   strategy: "jwt", // Use JSON Web Tokens for session
  // },
  // debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 