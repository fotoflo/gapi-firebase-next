import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import GmailProvider from "../../../components/util/GmailProvider";

import {
  GITHUB_CLIENT_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../../../config";

import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { firebaseComponents } from "../../../components/util/firebase";

// 2-You might then get an error that states "cannot use toDate method of undefined", If this occurred tap into node_modules/@next-auth/firebase-adapter/dist inside index.js file replace the exports.format object with this code which adds a "?" operator after value objec
// https://stackoverflow.com/questions/69876727/next-auth-google-auth-firebase-adapter

export default NextAuth({
  // Configure one or more authentication providers
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
  adapter: FirebaseAdapter(firebaseComponents),
});
