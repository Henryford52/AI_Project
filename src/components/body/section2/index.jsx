import React, {useEffect} from 'react'
import img2 from '../../../assets/walk.jpeg'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Section2 = () => {
    useEffect(() => {
        Aos.init()
      }, []);
    return (
        <div className='section2'>
            <div className='section2-flex'>
                    <img src={img2} alt="" className='section2-flex-img' data-aos='fade-right' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'/>
             
                <div className='section2-content'>
                    <h2>How It Works</h2>
                    <div className='section2-card' data-aos='fade-left' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'>
                    <div className='section2-card-flex'>
                            <div className='section2-card-flex-icon'>
                                <svg aria-hidden="true" class="e-font-icon-svg e-fas-sign-out-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z">
                                    </path></svg>
                            </div>
                            <div className='section2-card-flex-content'>
                                <h3>Step 1</h3>
                                <p>Upload Your Test Results: Take a photo or a  screenshot of your medical tests and upload  it.</p>

                            </div>

                        </div>
                    </div>

                    <div className='section2-card' data-aos='fade-left' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'>
                    <div className='section2-card-flex'>
                            <div className='section2-card-flex-icon'>
                                <svg aria-hidden="true" class="e-font-icon-svg e-fas-sign-out-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z">
                                    </path></svg>
                            </div>
                            <div className='section2-card-flex-content'>
                                <h3>Step 2</h3>
                                <p>Upload Your Test Results: Take a photo or a  screenshot of your medical tests and upload  it.</p>

                            </div>

                        </div>
                    </div>

                    <div className='section2-card' data-aos='fade-left' data-aos-easing= 'ease-out-cubic' data-aos-duration = '2000'>
                    <div className='section2-card-flex'>
                            <div className='section2-card-flex-icon'>
                                <svg aria-hidden="true" class="e-font-icon-svg e-fas-sign-out-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z">
                                    </path></svg>
                            </div>
                            <div className='section2-card-flex-content'>
                                <h3>Step 3</h3>
                                <p>Upload Your Test Results: Take a photo or a  screenshot of your medical tests and upload  it.</p>

                            </div>

                        </div>
                    </div>

                </div>

                

            </div>
        </div>
    )
}

export default Section2
