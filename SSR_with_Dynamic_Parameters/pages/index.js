import Link from 'next/link'

export default function Next() {
  return (
  	<>
  		<h1>Next JS pre-rendering</h1>
  		<Link href="/users"> Users </Link>
  		<Link href="/posts" style={{marginLeft: "10px"}}> Posts </Link>
  	</>
  )
}