import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

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
  // Optional: Add callbacks for customizing behavior (e.g., adding roles to token)
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the access_token and user roles right after signin
  //     if (account && profile) {
  //       token.accessToken = account.access_token;
  //       // Example: Assuming roles are in profile.roles (adjust based on your Entra config)
  //       token.roles = profile.roles;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // Send properties to the client, like an access_token and roles
  //     session.accessToken = token.accessToken;
  //     session.user.roles = token.roles; // Add roles to session.user
  //     return session;
  //   },
  // },

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