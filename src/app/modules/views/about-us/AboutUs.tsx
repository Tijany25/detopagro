import React from 'react'
import Image from '../../lib/components/image/Image'

const AboutUs = () => {
  return (
    <div className='maxWidth mx-auto pt-10 lg:pt-24'>
        <div className="sm:flex items-center lg:pt-11">
        <div className="hidden lg:flex lg:w-1/2 p-10">
            <div className="image object-center text-center">
            <Image
                  className='w-fit lg:w-fit'
                  src='aboutimg.jpg'
                  alt='images'
                  type='image'
              />
            </div>
        </div>
        <div className="sm:w-1/2 p-5">
            <div className="aboutcontainer">
                <h1 className='text-deep-green text-5xl py-8'>About Us</h1>
                <div className="card-wrapper">
                <div className="card card1">
                    <h2>Our Mission</h2>
                    <p>We connect farms & distributors. Buying directly from farmers, we sell top-quality produce wholesale.</p>
                </div>
                <div className="card card2">
                    <h2>Our Values</h2>
                    <p>Fair prices for farmers, top-quality produce, efficient buying & selling for a thriving agricultural sector</p>
                </div>
                </div>
                <div className="card card3">
                <h2>The Team</h2>
                    <p>Agriculture experts & tech enthusiasts building a user-friendly platform for a better agricultural marketplace.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs