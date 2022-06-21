import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import GmailProvider from "../../../components/util/GmailProvider";

import {
  GITHUB_CLIENT_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from "../../../config";

import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { firebaseComponents } from "../../../components/util/firebase";
const { db, doc, getDoc, updateDoc } = firebaseComponents;

// 2-You might then get an error that states "cannot use toDate method of undefined", If this occurred tap into node_modules/@next-auth/firebase-adapter/dist inside index.js file replace the exports.format object with this code which adds a "?" operator after value objec
// https://stackoverflow.com/questions/69876727/next-auth-google-auth-firebase-adapter

export default NextAuth({
  // Configure one or more authentication providers
  adapter: FirebaseAdapter(firebaseComponents),
  secret: NEXTAUTH_SECRET,
  checks: "both",
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GmailProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, isNewUser }) {
      console.log("JWT CALLBACK");
      console.log({ token, isNewUser });

      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (account.provider === "github") {
        const userRef = doc(db, `/users/${user.id}`);
        await updateDoc(userRef, {
          githubData: account,
        });
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async session({ session, token, user }) {
      // Send properties to the client,
      console.log("token", token);
      session.token = token;
      return session;
    },
  },
});
