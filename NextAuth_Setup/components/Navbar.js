import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='header'>
			<h1 className='logo'>
				<a href='#'>NextAuth</a>
			</h1>
			<ul className={`main-nav`}>
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
				<li>
					<Link href='#'>
						Sign In
					</Link>
				</li>
				<li>
					<Link href='#'>
						Sign Out
					</Link>
				</li>
			</ul>
		</nav>

	)
}