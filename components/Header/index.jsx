import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderOptionsLeft from './headerOptions/HeaderOptionsLeft'
import HeaderOptionsRight from './headerOptions/HeaderOptionsRight'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className='page-header'>
      <div className="header-top">
        <div className="container header-top-wrapper">
          <span className='first-content'>Wants to explore Upcoming Deals on Weekends?</span>
          <span className='second-content'><a href="#">demo.store@gmail.com</a></span>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <ul className='header-main-menu'>
            <li><HeaderOptionsLeft/></li>
            <li className='header-logo'>
              <Link href="/">
                <a>
                  <Image src="/images/logo.jpg" width='200px' height='50px' alt='logo-image' />
                </a>
              </Link>
            </li>
            <li><HeaderOptionsRight/></li>
          </ul>
        </div>
      </div>
      <HeaderMenu/>
    </header>
  )
}

export default Header
