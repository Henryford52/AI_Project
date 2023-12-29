import React,{useEffect} from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
    useEffect(() => {
        Aos.init()
      }, []);
  return (
    <div className='Contact' data-aos='zoom-out' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'>
      <h2>Want to learn more? Get In Touch</h2>
      <input type="text" placeholder='Full Name' className='input'/>
      <input type="text" placeholder='Email Address' className='input'/>
      <textarea name="" id="" cols="80" rows="0" placeholder='Message' className='input'></textarea>
      <button className='btn'>Join the waiting List Now</button>
    </div>
  )
}

export default Contact
