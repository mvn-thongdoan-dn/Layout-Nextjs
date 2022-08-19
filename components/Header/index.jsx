import React, { useLayoutEffect, useState, useEffect } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMenu from './HeaderMenu'
import HeanderMain from './HeaderMain'

const Header = () => {
  const [ width, setWidth ] = useState();
  const [ hasSticky, setHasSticky ] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  console.log("width header", width)

  useEffect(() => {
    document.addEventListener("scroll",  () => {  
      if(window.pageYOffset >= 230 && width >= 1200) {
        setHasSticky(true)
      } else if(window.pageYOffset < 92 && width >= 1200) {
        setHasSticky(false)
      }
    });  
  })


  return (
    <>
      {
        width <= 991 ?
        <header className='page-header'>
          <HeaderTop/>
          <HeanderMain width={width}/>
        </header>
        :
        hasSticky ? 
        <header className={`page-header ${hasSticky && "sticky"}`}>
          <div className="container">
            <HeanderMain hasSticky={hasSticky}/>
          </div>
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
