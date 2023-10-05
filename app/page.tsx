import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    <h1>Hello World</h1>
    <Link href="./signin">Sign In</Link><br />
    <Link href="./signup">Sign Up</Link><br />
    <Link href="./post/album">Post Album</Link><br />
    <Link href="./post/picture">Post Picture</Link><br />
    <Link href="./edit">Edit Post</Link><br />
   </div>
  )
}
