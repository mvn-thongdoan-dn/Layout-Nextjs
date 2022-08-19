import React, { useLayoutEffect, useState } from 'react';
import FooterBottom from './FooterBottom';
import FooterMain from './FooterMain';

const Footer = () => {
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
    <div className='page-footer'>
      <FooterMain width={width}/>
      <FooterBottom/>
    </div>
  )
}

export default Footer
