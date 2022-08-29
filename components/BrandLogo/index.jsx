import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";

const dataBrandLogo = [
  {id: 1, srcImg: '/images/brand-logo-01.jpg'},
  {id: 2, srcImg: '/images/brand-logo-02.jpg'},
  {id: 3, srcImg: '/images/brand-logo-03.jpg'},
  {id: 4, srcImg: '/images/brand-logo-04.jpg'},
  {id: 5, srcImg: '/images/brand-logo-05.jpg'},
  {id: 6, srcImg: '/images/brand-logo-06.jpg'},
  {id: 7, srcImg: '/images/brand-logo-01.jpg'},
  {id: 8, srcImg: '/images/brand-logo-02.jpg'},
  {id: 9, srcImg: '/images/brand-logo-03.jpg'},
  {id: 10, srcImg: '/images/brand-logo-04.jpg'},
  {id: 11, srcImg: '/images/brand-logo-05.jpg'},
  {id: 12, srcImg: '/images/brand-logo-06.jpg'}
]

const BrandLogo = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1259,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 543,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className='brand-logo'>
      <div className="container">
        <Slider {...settings}>
          {
            dataBrandLogo.map((item) => {
              const {id, srcImg} = item;
              return (
                <div className="brand-item" key={id}>
                  <Link href="#brand-logo">
                    <a>
                      <Image src={srcImg} width='140px' height='100px' alt='#images'/>
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default BrandLogo
