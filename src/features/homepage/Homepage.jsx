import React from 'react'
import Header from '../../components/Header'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <div className='flex items-end bg-hero-pattern h-[855px]'>
        <div className='inline-block mx-10 mb-36 text-2xl leading-loose'>
          <span className='bg-white'>LUNAR NEW YEAR</span>
          <p className='bg-white'>Slither into the new year with style in adidas' LNY collection</p>
          <button className='bg-white'>
            Shop now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Homepage