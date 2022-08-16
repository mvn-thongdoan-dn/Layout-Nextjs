import React from 'react'
import Image from 'next/image'

const ModalShoppingCart = () => {
  return (
    <ul className='dropdown'>
      <li className='card-product'>
        <Image style={{padding: "10px 0"}} className='product-image' width='80px' height="104px" src="/images/shopping-cart-product.jpg" alt="product-image" />
        <div className='product-content'>
          <p className='product-name'>
            aliquam quaerat voluptatem
          </p>
          <div>
            <span className='product-quantity'>1</span>
              × 
            <span className='product-price'>$20.00</span>
          </div>
        </div>
        <button><i className="fa fa-times" aria-hidden="true"></i></button>
      </li>
      <li className='total'>
        <span>Total</span>
        <span>$2,212.00</span>
      </li>
      <li className='options btn-group'>
        <button className='btn btn-primary'>View Cart</button>
        <button className='btn btn-primary'>Checkout</button>
      </li>
    </ul>
  )
}

export default ModalShoppingCart
