import Link from 'next/link'

export default function BuildDetailId({ params }) {
	return (
		<>
			<Link href='/'>Home</Link>
			<h2>Details about Build ID: {params.id}</h2>
		</>	
	);
}