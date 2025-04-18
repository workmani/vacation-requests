import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

// Augmentation can sometimes cause issues, removing for now
// declare module "next-auth" {
//   interface Session {
//     accessToken?: string;
//     user?: {
//       roles?: string[];
//     } & DefaultSession["user"];
//   }
//   interface JWT {
//     roles?: string[];
//     accessToken?: string;
//   }
// }

export const authOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) { // Use any to avoid type errors for now
      if (account && profile) {
        token.accessToken = account.access_token;
        // Roles are in profile.roles based on logs
        const roles = profile.roles;
        if (roles && Array.isArray(roles)) {
          token.roles = roles;
        } else {
          token.roles = [];
        }
      }
      return token;
    },
    async session({ session, token }: any) { // Use any to avoid type errors for now
      session.accessToken = token.accessToken;
      if (session.user) {
         session.user.roles = token.roles;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 