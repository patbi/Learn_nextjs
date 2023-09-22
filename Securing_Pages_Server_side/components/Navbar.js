import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react' 

export default function Navbar() {
	const { data: session, status } = useSession()
	const loading = status === "loading"
	// console.log({ session, loading })

	return (
		<nav className='header'>
			<h1 className='logo'>
				<a href='#'>NextAuth</a>
			</h1>
			<ul className={`main-nav ${!session && loading ? 'loading': 'loaded'}`}>
				<li>
					<Link href='/'>
						Home
					</Link>
				</li>
				<li>
					<Link href='/dashboard'>
						Dashboard
					</Link>
				</li>
				<li>
					<Link href='/blog'>
						Blog
					</Link>
				</li>
				{
					!loading && !session && (
					<li>
					<Link href='/api/auth/signin'
						onClick={e => {
							e.preventDefault()
							signIn('github')
						}}
					>
						Sign In
					</Link>
					</li>
				)}
				
				{
					session && (
					<li>
					<Link href='/api/auth/signout'
					  onClick={e => {
							e.preventDefault()
							signOut()
						}}
					>
						Sign Out
					</Link>
					</li>
				)}
				
			</ul>
		</nav>

	)
}