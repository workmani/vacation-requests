import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Initialize NextAuth.js with the configuration
// This exports the required handlers and the auth() helper
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig); 