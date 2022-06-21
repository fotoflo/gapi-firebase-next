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
import { getProviders } from "next-auth/react";
const { db, doc, getDoc, updateDoc } = firebaseComponents;

// 2-You might then get an error that states "cannot use toDate method of undefined", If this occurred tap into node_modules/@next-auth/firebase-adapter/dist inside index.js file replace the exports.format object with this code which adds a "?" operator after value objec
// https://stackoverflow.com/questions/69876727/next-auth-google-auth-firebase-adapter

export default NextAuth({
  // Configure one or more authentication providers
  adapter: FirebaseAdapter(firebaseComponents),
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: "database",
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
      checks: "state",
    }),
  ],
  callbacks: {
    async jwt({ token, account, isNewUser }) {
      console.log("JWT CALLBACK");
      console.log({ token, account, isNewUser });

      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("SIGNIN CALLBACK");
      console.log({ user });
      console.log({ account });

      console.log(`signing in with provider ${account.provider}`);
      return await storeUser(user, account);
    },
    async session({ session, token, user }) {
      console.log("SESSION CALLBACK");
      console.log({ session });
      console.log({ token });
      console.log({ user });
      // Send properties to the client,
      session.token = token;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log(`REDIRECT CALLBACK url: ${url}, baseurl ${baseUrl}`);
      return url;
    },
  },
});

const storeUser = async (user, account) => {
  try {
    const userRef = doc(db, `/users/${user.id}`);
    await updateDoc(userRef, {
      [`${account.provider}Data`]: account,
    });
    return true;
  } catch (err) {
    console.log(`err storing the user data from ${account.provider}`, err);
    if (user.id.length != "1sVPXkihaEZ8vFjHYfoK".length) {
      return "/";
    }
  }
};
