import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Slider from "react-slick";

const dataSlider = [
  {id: 1, srcImg: '/images/sample-01.jpg', content: {
    subTitle: 'our specials',
    title: 'fashion trend',
    redirect: 'middle'
  }},
  {id: 1, srcImg: '/images/sample-02.jpg', content: {
    subTitle: 'about us',
    title: 'fashion style',
    redirect: 'top'
  }}
]

const SliderMain = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <section className='slider'>
      <div className="container">
        <Slider {...settings}>
          {
            dataSlider.map((item) => {
              const {id, srcImg, content} = item;
              return (
                <div className="slider-item" key={id}>
                  <Link href="#image">
                    <a className='item-image'>
                      <Image src={srcImg} width="1200px" height="600px"/>
                    </a>
                  </Link>
                  <div className={`item-content ${content.redirect}`}>
                    <h2 className='content-sub-title'>{content.subTitle}</h2>
                    <h1 className='content-title'>{content.title}</h1>
                    <Link href="#shop">
                      <a className='btn-content'>shop now</a>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </section>
  )
}

export default SliderMain
