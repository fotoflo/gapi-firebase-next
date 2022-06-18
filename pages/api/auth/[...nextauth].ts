import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {GITHUB_CLIENT_ID, GITHUB_SECRET} from "../../../config"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})