import React from 'react'
import './style.css'
const Contact = () => {
  return (
    <div className='Contact'>
      <h2>Want to learn more? Get In Touch</h2>
      <input type="text" placeholder='Full Name'/>
      <input type="text" placeholder='Email Address'/>
      <textarea name="" id="" cols="80" rows="0" placeholder='Message'></textarea>
      <button className='btn'>Join the waiting List Now</button>
    </div>
  )
}

export default Contact
