import React from 'react'

const NewsLetter = () => {
  return (
    <section className='newsletter-wrapper'>
      <div className="container newsletter">
        <h2 className="text col-7">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <form className="subscribe col-5">
          <input type="text" placeholder='Email address...' />
          <button className='btn btn-primary'>subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter
