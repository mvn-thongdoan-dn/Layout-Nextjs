import React, { useState, useRef } from 'react';
import Link from 'next/link';
import HeaderOptionsLeft from '../headerOptions/HeaderOptionsLeft';

const OptionsMenu = [
  {id: 1, text: 'home', toggle: false, optionsSubMenu: [
    {id: 11, text: 'home 1'},
    {id: 12, text: 'home 2'},
    {id: 13, text: 'home 3'},
    {id: 14, text: 'home 4'},
    {id: 15, text: 'home 5'},
  ]},
  {id: 2, text: 'category', toggle: false, optionsSubMenu: [
    {id: 21, text: 'variation 1'},
    {id: 22, text: 'filter toggle'},
    {id: 23, text: 'offcanvas left'},
    {id: 24, text: 'offcanvas right'},
    {id: 25, text: 'variation 2'},
    {id: 26, text: '5 column mode'},
    {id: 27, text: '6 column mode'},
    {id: 28, text: '7 column mode'},
    {id: 29, text: '8 column mode'},
  ]},
  {id: 3, text: 'shop', toggle: false, optionsSubMenu: [
    {id: 31, text: "Product grid"},
    {id: 32, text: "Sticky right"},
    {id: 33, text: "Extended layout"},
    {id: 34, text: "Default layout"},
    {id: 35, text: "Compact layout"}
  ]},
  {id: 4, text: 'blog', toggle: false, optionsSubMenu: [
    {id: 41, text: 'blog 1'},
    {id: 42, text: 'blog 2'},
    {id: 43, text: 'blog 3'},
    {id: 44, text: 'blog 4'},
    {id: 45, text: 'blog 5'},
  ]},
  {id: 5, text: 'contact us'},
  {id: 6, text: 'pages', toggle: false, optionsSubMenu: [
    {id: 61, text: "About Us"},
    {id: 62, text: "Accordions"},
    {id: 63, text: "Buttons"}
  ]},
]

const NavbarToggle = () => {
  const [ accordionMenu, setAccordionMenu ] = useState(OptionsMenu);
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);
  const menuRef = useRef();
  const itemMenuRef = useRef();

  const toggleAccordion = (id) => {
    const newAccordion = [...accordionMenu].map((object) => {
      if(object.id === id) {
        return {...object, toggle: !object.toggle}
      }
      return object;;
    });
    setAccordionMenu(newAccordion);
  }

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpenMenu(!isOpenMenu);
  }

  const navItem = accordionMenu.map((accordionItem) => {
    const { id, text, toggle, optionsSubMenu } = accordionItem
    return (
      <li 
        key={id} 
        className={`navbar-item ${optionsSubMenu && "accordion-menu"} ${toggle && "show"}`}
        onClick={() => toggleAccordion(id)}
        // ref={itemMenuRef}
        // style={ 
        //   toggle ? {
        //   height: itemMenuRef.current.scrollHeight + "px"
        //   } : { 
        //     height: "0px"
        //   }
        // }
      >
        <Link href="/">
          <a className='navbar-link'>{text}</a>
        </Link>
        <ul className='navbar-sub-menu'>
          {
            optionsSubMenu && optionsSubMenu.map((optionsSubItem) => {
              const { id, text } = optionsSubItem;
              return (
                <li key={id} className='sub-menu-item'>
                  <Link href='/'>
                    <a className='sub-menu-link'>{text}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </li>
    )
  })

  return (
    <div className='navbar-toggle'>
      <i 
        className="fa fa-bars" 
        aria-hidden="true"
        onClick={toggleMenu}
      >
      </i>
      <nav 
        className='navbar-collapse'
        ref={menuRef}
        style={ 
          isOpenMenu ? {
          height: menuRef.current.scrollHeight + "px"
          } : { 
            height: "0px"
          }
        }
      >
        <ul className='navbar-menu'>
          {navItem}
        </ul>
        <div className="options-wrapper">
          <HeaderOptionsLeft/>
        </div>
      </nav>
    </div>
  )
}

export default NavbarToggle
