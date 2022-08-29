import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import EqualizerSharpIcon from '@mui/icons-material/EqualizerSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';

const ProductCard = ({product}) => {
  const { name, srcImg1, srcImg2, countdown, flags} = product;

  return (
    <div className='product-card'>
      <Link href="#images">
        <a className='product-images'>
          <Image src={srcImg1} width="360px" height="460px" alt='#image-1'/>
          <Image src={srcImg2} width="360px" height="460px" alt='#image-2'/>
        </a>
      </Link>
      { 
        flags &&
        <div className="flags">
          <span className="sale">sale</span>
          <span className="new">new</span>
        </div>
      }
      {      
        countdown &&
        <ul className="countdown">
          <li className="days">00</li>
          <li className="hours">00</li>
          <li className="minutes">00</li>
          <li className="seconds">00</li>
        </ul>
      }
      <div className="product-description">
          <h3 className="product-name">
            <Link href="#product">
              {name}
            </Link>
          </h3>
          <ul className="product-rate">
            <li><StarSharpIcon/></li>
            <li><StarSharpIcon/></li>
            <li><StarSharpIcon/></li>
            <li><StarSharpIcon/></li>
            <li><StarSharpIcon/></li>
          </ul>
          <div className="product-price">
            <span className="regular-price">$100.00</span>
            <span className="old-price">$150.00</span>
          </div>
          <ul className="button-group">
            <li className="btn btn-primary btn-cart">
              <ShoppingCartSharpIcon/>
            </li>
            <li className="btn btn-primary btn-favorite">
              <FavoriteSharpIcon/>
            </li>
            <li className="btn btn-primary btn-compare">
              <EqualizerSharpIcon/>
            </li>
            <li className="btn btn-primary btn-quickview">
              <VisibilitySharpIcon/>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default ProductCard
