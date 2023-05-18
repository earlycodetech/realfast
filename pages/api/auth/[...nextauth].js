import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import { auth } from '../../../settings/firebase/firebase.setup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from 'firebase-admin/app';

export const nextAuthOptions = {
    secret:process.env.NEXT_AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    pages:{
        signIn:'/signin',
    },
    adapter:FirestoreAdapter({
        credential:cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
        })
    }),
    callbacks:{
        // async jwt (token) {
        //     return token;
        // },
        async session (session) {
            return session;
        }
    }
}   

export default NextAuth(nextAuthOptions);