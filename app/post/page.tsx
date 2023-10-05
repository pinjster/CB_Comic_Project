import Link from 'next/link'
import React from 'react'

export default function create() {
  return (
    <div>
      <Link href="./album">Album</Link>
      <Link href="./picture">Picture</Link>
    </div>
  )
}
