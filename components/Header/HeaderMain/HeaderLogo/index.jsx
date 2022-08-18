import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/images/logo.jpg" width='200px' height='50px' alt='logo-image' />
      </a>
    </Link>
  )
}

export default HeaderLogo
