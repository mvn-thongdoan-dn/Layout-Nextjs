import React from 'react';
import BannerContent from '../BannerContent';
import BannerImage from '../BannnerImage';

const dataSubBanner = [
  {id: 1, img: {
    src: '/images/sub-banner.jpg',
    height: '600px',
    width: "400px",
  }, content: {
    title: 'summer shop',
    subTitle: 'up to 70% off',
    redirect: 'left'
  }},
  {id: 2, img: {
    src: '/images/sub-banner-2.jpg',
    height: '600px',
    width: "400px",
  }, content: {
    title: 'winter shop',
    subTitle: 'up to 70% off',
    redirect: 'right'
  }}
]

const SubBanner = () => {
  return (
    <section className='banner-wrapper'>
      <div className="container">
        <div className="sub-banner row">
          {
            dataSubBanner.map((item) => {
              const {id, img, content} = item;
              return (
                <div className="banner-item" key={id}>
                  <BannerImage image={img}/>
                  <BannerContent content={content} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default SubBanner
