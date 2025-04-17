import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Types are extended in types/next-auth.d.ts

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 