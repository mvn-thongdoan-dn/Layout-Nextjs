import React, { useLayoutEffect, useState } from 'react'
import HeaderOptionsLeft from './headerOptions/HeaderOptionsLeft'
import HeaderOptionsRight from './headerOptions/HeaderOptionsRight'
import HeaderLogo from './HeaderLogo'
import NavbarToggle from './NavbarToggle'

const HeanderMain = ({width}) => {

  return (
    <>
      {
        width <= 991 ?
        width <= 543 ?
        <div className="header-main">
          <div className="header-logo">
            <HeaderLogo/>
          </div>
          <div className="container">
            <div className='header-menu'>
                <NavbarToggle/>
                <HeaderOptionsRight/>
            </div>
          </div>
        </div>
        :
        <div className="header-main">
          <div className="container">
            <ul className='header-main-menu'>
              <li><NavbarToggle/></li>
              <li className='header-logo'><HeaderLogo/></li>
              <li><HeaderOptionsRight/></li>
            </ul>
          </div>
        </div>
        :
        <div className="header-main">
          <div className="container">
            <ul className='header-main-menu'>
              <li><HeaderOptionsLeft/></li>
              <li className='header-logo'><HeaderLogo/></li>
              <li><HeaderOptionsRight/></li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default HeanderMain
