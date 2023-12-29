import React from 'react'
import footerlogo from '../../assets/logo.png'
import './style.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-flex'>
        <div className='footer-content1'>
            <img src={footerlogo} alt="" />
            <div className='foote-icon-flex'>
                <div className='icon'></div>
                <div className='icon'></div>
                <div className='icon'></div>

            </div>
        </div>

        <div className='footer-content2'>
             <h2>Join our waitlist</h2>
             <input type="text" placeholder='Enter You Email'/>
             <button>Sign Up</button>
        </div>

      </div>
      <div className='right'>© 2023 Talkhealth.ai. All rights reserved.</div>
    </div>
  )
}

export default Footer
