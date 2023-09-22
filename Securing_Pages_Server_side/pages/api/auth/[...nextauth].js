import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: String(process.env.GITHUB_ID),
			clientSecret: String(process.env.GITHUB_SECRET),
		}),
	],
})