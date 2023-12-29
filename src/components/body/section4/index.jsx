import React from 'react'
import './style.css'
import img3 from '../../../assets/Group-9.png'

const Section4 = () => {
  return (
    <div className='Section4'>
      <div className='Section4-flex'>
        <div className='Section4-flex-content'>
            <h2>Take Control of your health and the ones you care for</h2>
            <button className='btn'>Join the waiting List Now</button>
        </div>
          <img src={img3} alt="" />

      </div>
    </div>
  )
}

export default Section4
