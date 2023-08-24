import Link from 'next/link'

export default function ProductList({productId = 10}) {
	return(
		<>
			<Link href='/'>Home</Link>
			<Link href='/product/100/build' style={{marginLeft: '10px'}}>Build</Link>
			<Link href={`/product/${productId}`} style={{marginLeft: '10px'}}>ProductId</Link>
			<h2>Product 3</h2>
		</>
	)
}