import React,{
    useEffect
} from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Section3 = () => {
    useEffect(() => {
        Aos.init()
      }, []);
  return (
    <div className='Section3'>
        <h2 data-aos='fade-up' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'>Your medical statistics  now in your hand</h2>
      <div className='Section3-flex'> 
              <div className='Section3-flex'>
                <div className='Section3-flex-content' data-aos='fade-right' data-aos-easing= 'ease-out-cubic' data-aos-duration = ''>
                <div className='icon'></div>
                <h3>Comprehensive medical <br /> knowledge</h3>
                </div>
                <div className='Section3-flex-content' data-aos='fade-up' data-aos-easing= 'ease-out-cubic' data-aos-duration = ''>
                <div className='icon'></div>
                <h3>Tested By Doctorse</h3>
                </div>
                <div className='Section3-flex-content' data-aos='fade-up' data-aos-easing= 'ease-out-cubic' data-aos-duration = ''>
                <div className='icon'></div>
                <h3>24/7 availabilty</h3>
                </div>
                <div className='Section3-flex-content' data-aos='fade-left' data-aos-easing= 'ease-out-cubic' data-aos-duration = ''>
                <div className='icon'></div>
                <h3>Multi-lingual Support</h3>
                </div>
               

              </div>
      </div>
      <button className='btn' data-aos='fade-up' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'>Join Now</button>
    </div>
  )
}

export default Section3
