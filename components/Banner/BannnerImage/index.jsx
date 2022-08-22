import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BannerImage = ({image}) => {
  return (
  <Link href="#banner">
    <a className='banner-image'>
      <Image src={image.src} width={image.width} height={image.height} alt='banner-image'/>
    </a>
  </Link>
  )
}

export default BannerImage
