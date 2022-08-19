import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const HeaderMenu = () => {
  return (
    <nav className='header-nav'>
      <div className="container">
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link href="/">
              <a className='nav-link'>home</a>
            </Link>
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>home 1</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>home 2</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>home 3</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>home 4</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>home 5</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <Link href="/category">
              <a className='nav-link'>category</a>
            </Link>
            <ul className='sub-menu mega-menu'>
              <li>
                <h6 className='sub-title'>variation 1</h6>
                <ul>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>filter toggle</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>offcanvas left</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>offcanvas right</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className='sub-title'>variation 2</h6>
                <ul>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>5 column mode</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>6 column mode</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>7 column mode</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href='/'>
                      <a className='sub-menu-link'>8 column mode</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Image src='/images/menu-banner.jpg' width='160px' height='230px' alt="image-menu"/>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <Link href="/shop">
              <a className='nav-link'>shop</a>
            </Link>
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>Product grid</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>Sticky right</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>Extended layout</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>Default layout</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href='/'>
                  <a className='sub-menu-link'>Compact layout</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <Link href="/blog">
              <a className='nav-link'>blog</a>
            </Link>
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link href="/">
                  <a className='sub-menu-link'>Blog 1</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="/">
                  <a className='sub-menu-link'>Blog 2</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="/">
                  <a className='sub-menu-link'>Blog 3</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="/">
                  <a className='sub-menu-link'>Blog 4</a>
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="/">
                  <a className='sub-menu-link'>Blog 5</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <Link href="/more">
              <a className='nav-link'>more</a>
            </Link>
            <ul className='sub-menu'>
              <li className='sub-menu-item menu-dropdown'>
                <Link href="/">
                  <a className='sub-menu-link'>Pages</a>
                </Link>
                <ul className='sub-menu'>
                  <li className='sub-menu-item'>
                    <Link href="/">
                      <a className='sub-menu-link'>Pages 1</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href="/">
                      <a className='sub-menu-link'>Pages 2</a>
                    </Link>
                  </li>
                  <li className='sub-menu-item'>
                    <Link href="/">
                      <a className='sub-menu-link'>Pages 3</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='sub-menu-item'>
                <Link href="/">
                  <a className='sub-menu-link'>Contact Us</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HeaderMenu;
