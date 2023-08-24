import Link from 'next/link'

export default function Home() {
  return (
   <div>
   		<h1>Home Page</h1>
   		<Link href='/product'>Product</Link>
   		<Link href='/blog' style={{marginLeft: '10px'}}>blog</Link>
   </div>
  )
}