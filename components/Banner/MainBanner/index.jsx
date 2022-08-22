import React from 'react';
import BannerContent from '../BannerContent';
import BannerImage from '../BannnerImage';

const dataBanner = [
  {id: 1, img: {
    src: '/images/banner-women.jpg',
    width: "560px",
    height: "533px"
  }, content: {
    title: 'womens',
    subTitle: 'collection',
    text: 'Et harum quidem rerum facilis est et expedita m libero tempore, cum solut',
    redirect: 'bottom'
  }},
  {id: 2, img: {
    src: '/images/banner-men.jpg',
    width: "560px",
    height: "533px"
  }, content: {
    title: 'mens',
    subTitle: 'collection',
    text: 'Et harum quidem rerum facilis est et expedita m libero tempore, cum solut',
    redirect: 'top'
  }}
]

const MainBanner = () => {
  return (
    <section className='banner-wrapper'>
      <div className="container">
        <div className="row banner-main">
          {
            dataBanner.map((item) => {
              const {id, img, content} = item;
              return (
                <div className="banner-item" key={id}>
                  <BannerImage image={img}/>
                  <BannerContent content={content}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default MainBanner;
