"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	const readMore = () => {
		console.log('Read more')
		router.push('/product')
	}

  return (
   <div>
   		<h1>Home Page</h1>
   		<Link href='/product'>Product</Link>
   		<Link href='/blog' style={{marginLeft: '10px'}}>blog</Link>
		<button onClick={(readMore)} style={{marginLeft: '10px'}}>
			Click here to read more
		</button>
   </div>
  )
}