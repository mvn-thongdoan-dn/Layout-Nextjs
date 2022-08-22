import React from 'react'
import Link from 'next/link';

const BannerContent = ({content}) => {
  const {title, subTitle, text, redirect} = content;

  return (
    <div className={`banner-content ${redirect}`}>
      <h2 className="banner-title">{title}</h2>
      <p className="banner-sub-title">{subTitle}</p>
      <p className="banner-text">{text}</p>
      <Link href="#shop">
        <a className="btn btn-primary btn-banner">shop now</a>
      </Link>
    </div>
  )
}

export default BannerContent
