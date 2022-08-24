import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";
import SectionTitle from '../SectionTitle';
import SearchIcon from '@mui/icons-material/Search';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const dataLastestNews = [
  {id: 1, title: 'Share of Love', srcImg: '/images/lastest-img-1.jpg'},
  {id: 2, title: 'Upon of seasons earths ', srcImg: '/images/lastest-img-2.jpg'},
  {id: 3, title: 'From Now we are certified web', srcImg: '/images/lastest-img-3.jpg'},
  {id: 4, title: 'Viderer voluptatum te eum', srcImg: '/images/lastest-img-4.jpg'},
  {id: 5, title: 'Share of Love', srcImg: '/images/lastest-img-5.jpg'},
]

const LastestNews = () => {

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 543,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className='lastest-news'>
      <div className="container">
        <SectionTitle content={"Lastest News"}/>
        <div className='lastest-list'>
          <Slider {...settings}>
            {
              dataLastestNews.map((item) => {
                const {id, title, srcImg} = item;
                return (
                  <div className='lastest-item' key={id}>
                    <div className="item-image">
                      <SearchIcon/>
                      <a href="">
                        <Image src={srcImg} width='380px' height='270px'/>
                      </a>
                    </div>
                    <div className='item-content'>
                      <h4 className='content-title'>{title}</h4>
                      <p className='content-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a className='btn-content'>read more</a>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default LastestNews
