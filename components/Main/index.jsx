import React from 'react'
import LastestNews from '../LastestNews'
import NewsLetter from '../NewsLetter'
import MainBanner from '../Banner/MainBanner'
import SubBanner from '../Banner/SubBanner'

const Main = () => {
  return (
    <main className='page-main'>
      <MainBanner/>
      <SubBanner/>
      <LastestNews/>
      <NewsLetter/>
    </main>
  )
}

export default Main
