import React, { useLayoutEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMenu from './HeaderMenu'
import HeanderMain from './HeaderMain'

const Header = () => {
  const [ width, setWidth ] = useState();

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      {
        width <= 991 ?
        <header className='page-header'>
          <HeaderTop/>
          <HeanderMain width={width}/>
        </header>
        :
        <header className='page-header'>
          <HeaderTop/>
          <HeanderMain/>
          <HeaderMenu/>
        </header>
      }
    </>
  )
}

export default Header
