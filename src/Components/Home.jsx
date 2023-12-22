import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Home = () => {
  return (
    <>
    <div className='container'>
      <h1>Directory</h1>
        <div className='users'>
          <div className='user'>
            <span>Name:</span> Nadeem Hasan
          </div>
          <div className='user'>
            <span>Post:</span> 16
          </div>
        </div>
         <div className='users row'>
          <div className='user'>
            <span>Name:</span> Md Faizan 
          </div>
          <div className='user'>
            <span>Post:</span> 12
          </div>
        </div>
    </div>
    </>
  )
}

export default Home