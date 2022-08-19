import React, {useRef, useState} from 'react'
import Image from 'next/image';

const HeaderOptionsLeft = () => {

  // const styleImage = {
  //   marginRight: "10px"
  // };

  const [ isOpenLanguage, setIsOpenLanguage ] = useState(false);
  const [ isOpenCurrency, setIsOpenCurrency ] = useState(false);
  const languageRef = useRef();
  const currencyRef = useRef();

  const toggleLanguages = (e) => {
    e.preventDefault();
    if (isOpenCurrency) {
      setIsOpenCurrency(false)
    }
    setIsOpenLanguage(!isOpenLanguage);
  }

  const toggleCurrency = (e) => {
    e.preventDefault();
    if (isOpenLanguage) {
      setIsOpenLanguage(false)
    }
    setIsOpenCurrency(!isOpenCurrency);
  }

  return (
    <div className='header-options-left'>
      <div className='languages-wrapper'>
        <button onClick={toggleLanguages}>
          <Image src="/images/en.jpg" width="18px" height="12px" alt='english-image'/>English
        </button>
        <div 
          className="collapse collapse-left languages-menu"
          ref={languageRef}
          style={ 
            isOpenLanguage ? {
            height: languageRef.current.scrollHeight + "px"
            } : { 
              height: "0px"
            }
          }
        >
          <ul className='dropdown'>
            <li><Image src="/images/en.jpg" width="18px" height="12px" alt='english-image'/>English</li>
            <li><Image src="/images/fr.jpg" width="18px" height="12px" alt='french-image'/>French</li>
          </ul>
        </div>
      </div>
      <div className='currency-wrapper'>
        <button onClick={toggleCurrency}>€ Euro</button>
        <div 
          className="collapse collapse-left currency-menu"
          ref={currencyRef}
          style={ 
            isOpenCurrency ? {
            height: currencyRef.current.scrollHeight + "px"
            } : { 
              height: "0px"
            }
          }
        >
          <ul className='dropdown'>
            <li>€ Euro</li>
            <li>£ Pound Sterling</li>
            <li>$ US Dollar</li>
          </ul>
        </div>
      </div>
      <div className="contact"><i className="fa fa-phone" aria-hidden="true"></i>1234567890</div>
    </div>
  )
}

export default HeaderOptionsLeft
