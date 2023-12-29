import React from 'react'
import './style.css'
const Section3 = () => {
  return (
    <div className='Section3'>
        <h2>Your medical statistics  now in your hand</h2>
      <div className='Section3-flex'> 
              <div className='Section3-flex'>
                <div className='Section3-flex-content'>
                <div className='icon'></div>
                <h3>Comprehensive medical <br /> knowledge</h3>
                </div>
                <div className='Section3-flex-content'>
                <div className='icon'></div>
                <h3>Tested By Doctorse</h3>
                </div>
                <div className='Section3-flex-content'>
                <div className='icon'></div>
                <h3>24/7 availabilty</h3>
                </div>
                <div className='Section3-flex-content'>
                <div className='icon'></div>
                <h3>Multi-lingual Support</h3>
                </div>
               

              </div>
      </div>
      <button className='btn'>Join Now</button>
    </div>
  )
}

export default Section3
