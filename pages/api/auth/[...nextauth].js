import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import { auth } from '../../../settings/firebase/firebase.setup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials:{},
            authorize(credentials,req) {
                const {email,password} = credentials;

                //let's say below is an existing user
                const user = {
                    username:'you@gmail.com',
                    password:'lordos'
                }

                //authenticate a user from firebase auth

                //if credentials don't match
                if (signInWithEmailAndPassword(auth,email,password)){
                    return user;
                } 

                //check if credentials match file on record
                //then, return user
                return null;
            }
        })
    ],
    pages:{
        signIn:'/signin',
    },
    adapter:FirestoreAdapter({
        credential:cert({
            
        })
    }),
});