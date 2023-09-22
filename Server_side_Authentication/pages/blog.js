import { getSession, useSession } from 'next-auth/react'

export default function Blog({ infos }) {
	const { data: session, status } = useSession()
	const loading = status === "loading"
	console.log({ session, loading })
	return <h1>Blog page - {infos}</h1>
}

export async function getServerSideProps(context) {
	const session = await getSession(context)
	return {
		props: {
			session,
			infos: session ? 'List of 100 perzonalized blogs': 'List of free blogs',
		},
	}
}