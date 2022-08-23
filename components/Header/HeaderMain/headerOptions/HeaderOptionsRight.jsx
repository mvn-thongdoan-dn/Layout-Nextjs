import React, { useState, useRef } from 'react'
import ModalShoppingCart from '../../../Modal/ShoppingCart';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderOptionsRight = () => {
  const [ isOpenSearch, setIsOpenSearch ] = useState(false);
  const [ isOpenUser, setIsOpenUser ] = useState(false);
  const [ isOpenShoppingCart, setIsOpenShoppingCart ] = useState(false);
  const searchRef = useRef();
  const userRef = useRef();
  const shoppingCartRef = useRef();

  const toggleSearch = (e) => {
    e.preventDefault();
    if(isOpenUser || isOpenShoppingCart) {
      setIsOpenUser(false);
      setIsOpenShoppingCart(false)
    }
    setIsOpenSearch(!isOpenSearch);
  }

  const toggleUser = (e) => {
    e.preventDefault();
    if(isOpenSearch || isOpenShoppingCart) {
      setIsOpenSearch(false);
      setIsOpenShoppingCart(false)
    }
    setIsOpenUser(!isOpenUser);
  }

  const toggleShoppingCart = (e) => {
    e.preventDefault();
    if(isOpenSearch || isOpenUser) {
      setIsOpenSearch(false);
      setIsOpenUser(false)
    }
    setIsOpenShoppingCart(!isOpenShoppingCart);
  }

  return (
    <div className='header-options-right'>
      <div className='search-wrapper'>
        <button onClick={toggleSearch}>   
          {
            !isOpenSearch ?
            <SearchIcon/> :
            <CloseIcon/>
          }
        </button>
        <div 
          className='collapse collapse-right search'
          style={ 
            {
              height: searchRef.current?.offsetHeight + "px",
              width: isOpenSearch ? searchRef.current?.offsetWidth + "px" : "0px",
            }
          }
        >
          <form className='dropdown search-form' ref={searchRef}>
            <input placeholder='search here' type="text"/>
            <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
      <div className="user-wrapper">
        <button onClick={toggleUser}><PermIdentityIcon/></button>
        <div 
          className='collapse collapse-right user'
          ref={userRef}
          style={ 
            isOpenUser ? {
            height: userRef.current.scrollHeight + "px",
            } : { 
              height: "0px",
            }
          }
        >
          <ul className='dropdown'>
            <li>
              <Link href="/">
                <a>My Account</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Register</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='shopping-cart-wrapper'>
        <button onClick={toggleShoppingCart}>
          <ShoppingCartIcon/>
          <span className='badge badge-warning'>2</span>
        </button>
        <div 
          className="collapse collapse-right shopping-cart"
          ref={shoppingCartRef}
          style={ 
            isOpenShoppingCart ? {
            height: shoppingCartRef.current.scrollHeight + "px",
            } : { 
              height: "0px",
            }
          }
        >
          <ModalShoppingCart/>
        </div>
      </div>
    </div>
  )
}

export default HeaderOptionsRight
