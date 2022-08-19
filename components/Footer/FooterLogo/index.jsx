import Image from 'next/image'
import React from 'react'

const FooterLogo = () => {
  return (
    <div className='footer-logo'>
      <Image src='/images/footer-logo.jpg' width='216px' height='50px'/>
      <p className='footer-description'>At vero eos et accusamus et iusto odio dignissimos ducimus, duis faucibus enim vitae</p>
    </div>
  )
}

export default FooterLogo
