import Link from 'next/link'

export default function ProductDetailId({ params }) {
	return (
		<>
			<Link href='/'>Home</Link>
			<h2>Details about product ID: {params.cid}</h2>
		</>	
	);
}
