import React from 'react'
import Slider from 'react-slick'
import ProductCard from '../ProductCard'
import SectionTitle from '../SectionTitle'

const dataSpecialProducts = [
  {
    id: 1, 
    name: "Girls Striped Fit and Flare Dress", 
    srcImg1: '/images/product-img-01.jpg',
    srcImg2: '/images/product-img-02.jpg',
    countdown: true,
    flags: false
  },
  {
    id: 2, 
    name: "Crochet Detail Lightweight Top", 
    srcImg1: '/images/product-img-02.jpg',
    srcImg2: '/images/product-img-03.jpg',
    countdown: false,
    flags: false
  },
  {
    id: 3, 
    name: "Girls Floral Print Jumpsuit", 
    srcImg1: '/images/product-img-02.jpg',
    srcImg2: '/images/product-img-03.jpg',
    countdown: true,
    flags: false
  },
  {
    id: 4, 
    name: "Juventus Henley Neck Jersey", 
    srcImg1: '/images/product-img-03.jpg',
    srcImg2: '/images/product-img-04.jpg',
    countdown: false,
    flags: false
  },
  {
    id: 5, 
    name: "Printed Dugaree with T-Shirt", 
    srcImg1: '/images/product-img-04.jpg',
    srcImg2: '/images/product-img-05.jpg',
    countdown: false,
    flags: false
  },
  {
    id: 6, 
    name: "Girls Floral Print Jumpsuit", 
    srcImg1: '/images/product-img-05.jpg',
    srcImg2: '/images/product-img-06.jpg',
    countdown: false,
    flags: false
  }
]

const SpecialProducts = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className='special-product'>
      <div className="container">
        <SectionTitle content={"Special Product"}/>
        <Slider {...settings}>
          {
            dataSpecialProducts.map((product) => {
              return (
                <ProductCard key={product.id} product={product}/>
              )
            }) 
          }
        </Slider>
      </div>
    </section>
  )
}

export default SpecialProducts
