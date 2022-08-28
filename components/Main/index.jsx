import React from 'react'
import LastestNews from '../LastestNews'
import NewsLetter from '../NewsLetter'
import MainBanner from '../Banner/MainBanner'
import SubBanner from '../Banner/SubBanner'
import BrandLogo from '../BrandLogo'
import SliderMain from '../SliderMain'
import Testimonial from '../Testimonial'
import SpecialProducts from '../SpecialProducts'
import TrendingProducts from '../TrendingProducts'

const Main = () => {
  return (
    <main className='page-main'>
      <SliderMain/>
      <MainBanner/>
      <TrendingProducts/>
      <Testimonial/>
      <SubBanner/>
      <SpecialProducts/>
      <LastestNews/>
      <BrandLogo/>
      <NewsLetter/>
    </main>
  )
}

export default Main
