import React, { useState, useRef } from 'react'
import Link from 'next/link'
import FooterLogo from '../FooterLogo'

const dataFooter = [
  {id: 1, title: 'company', toggle: false, options: [
    {id: 11, text: "search"},
    {id: 12, text: "new product"},
    {id: 13, text: "best collection"},
    {id: 14, text: "wishlist"},
  ]},
  {id: 2, title: 'products', toggle: false, options: [
    {id: 21, text: 'blog'},
    {id: 22, text: 'about us'},
    {id: 23, text: 'contact us'},
    {id: 24, text: 'my account'}
  ]},
  {id: 3, title: 'your account', toggle: false, options: [
    {id: 31, text: "personal info"},
    {id: 32, text: "order"},
    {id: 33, text: "addresses"},
    {id: 34, text: "my wishlist"},
  ]},
  {id: 4, title: 'store information', toggle: false, options: [
    {id: 41, icon:'fa fa-map-marker', text: ' 4030, Central Bazzar, opp. Varachha Police Station, Varachha Main Road, Surat, Gujarat 395006, India'},
    {id: 42, icon:'fa fa-phone', text: '+ (99) 55-669-999'},
    {id: 43, icon:'fa fa-envelope-o', text: 'demo.store@gmailcom'}
  ]}
]

const FooterMain = ({width}) => {

  const [ accordionFooter, setAccordionFooter ] = useState(dataFooter);
  const subMenuRef = useRef();

  const toggleSubMenu = (id) => {
    const newAccordionFooter = [...accordionFooter].map((object) => {
      if(object.id === id) {
        return {...object, toggle: !object.toggle}
      }
      return object;;
    });
    setAccordionFooter(newAccordionFooter);
  }

  const footerItem = accordionFooter.map((item) => {
    const {id, title, toggle, options} = item;
    return (
      <li className={`footer-item ${toggle && "show"}`} key={id}>
        <Link href="#home">
          <a onClick={() => toggleSubMenu(id)} className='title-item'>{title}</a>
        </Link>
        <ul 
          className="sub-menu"
          ref={subMenuRef}
          style={ 
            toggle ? {
            height: subMenuRef.current.scrollHeight + "px"
            } : { 
              height: "0px"
            }
          }
        >
          {options.map((subMenuItem) => {
            const {id, text, icon} = subMenuItem
            return (
                icon ? 
                <li className="sub-menu-item" key={id}>
                  <Link href="#home">
                    <a className='sub-menu-link'>
                      <span className='icon'>
                        <i className={icon}></i>
                      </span>
                      <span className='text'>{text}</span>
                    </a>
                  </Link>
                </li>
                :
                <li className="sub-menu-item" key={id}>
                  <Link href="/">
                    <a className='sub-menu-link'>{text}</a>
                  </Link>
                </li>
              )
          })}
        </ul>
      </li>
    )
  })

  return (
    <>
      {
        width <= 991 ?
        <div className='footer-main'>
          <div className="container">
            <FooterLogo/>
            <ul className="footer-list">
              {footerItem}
            </ul>
          </div>
        </div>
      :
        <div className='footer-main'>
          <div className="container">
            <ul className="footer-list">
              <li className="footer-item">
                <FooterLogo/>
              </li>
              {footerItem}
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default FooterMain
