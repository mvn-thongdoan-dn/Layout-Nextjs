import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

const dataTestimonial = [
  {
    id: 1,
    srcImg: '/images/user1.jpg', 
    userName: 'john duff', 
    position: 'CEO', 
    testi: 'Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar. Nullam mattis arcu convallis, bibendum dui ac, laoreet est.Vivamus interdum egastas rutrum. Quisque laoreet ante sed placerat imperdiet.'
  },
  {
    id: 2, 
    srcImg: '/images/user2.jpg', 
    userName: 'Nazli dof', 
    position: 'Marketing Manager', 
    testi: 'Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar. Nullam mattis arcu convallis, bibendum dui ac, laoreet est.Vivamus interdum egastas rutrum. Quisque laoreet ante sed placerat imperdiet.'
  },
  {
    id: 3, 
    srcImg: '/images/user3.jpg', 
    userName: 'Aly Vefa', 
    position: 'Sales Exuctive', 
    testi: 'Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar. Nullam mattis arcu convallis, bibendum dui ac, laoreet est.Vivamus interdum egastas rutrum. Quisque laoreet ante sed placerat imperdiet.'
  },
]

const Testimonial = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <section className='testimonials'>
      <div className="container">
        <Slider {...settings}>
          {
            dataTestimonial.map((item) => {
              const {id, srcImg, userName, testi, position} = item;
              return (
                <div className="testimonial-item" key={id}>
                  <div className="item-image">
                    <Image src={srcImg} width="100px" height="100px"/>
                  </div>
                  <div className="item-content">
                    <p className="content-testi">{testi}</p>
                    <h4 className="content-user-name">{userName}</h4>
                    <p className="content-position">{position}</p>
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

export default Testimonial
