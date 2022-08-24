import React from 'react'
import LastestNews from '../LastestNews'
import NewsLetter from '../NewsLetter'
import MainBanner from '../Banner/MainBanner'
import SubBanner from '../Banner/SubBanner'
import BrandLogo from '../BrandLogo'
import SliderMain from '../SliderMain'

const Main = () => {
  return (
    <main className='page-main'>
      <SliderMain/>
      <MainBanner/>
      <SubBanner/>
      <LastestNews/>
      <BrandLogo/>
      <NewsLetter/>
    </main>
  )
}

export default Main
