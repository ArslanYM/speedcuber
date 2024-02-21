import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID?? '',
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET?? '',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)