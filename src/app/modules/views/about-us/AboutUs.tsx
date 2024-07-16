"use client"
import React, { useEffect, useRef } from 'react'
import Image from '../../lib/components/image/Image'

const AboutUs = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const section = sectionRef.current;
  
      if (section) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.classList.remove('hidden');
              section.classList.add('slide-in');
              observer.disconnect();
            }
          });
        });
  
        observer.observe(section);
  
        return () => observer.disconnect();
      }
    }, []);
  return (
    <div className='maxWidth mx-auto pt-24 md:pt-24 mb-24'>
    <h1 className='text-deep-green text-center text-5xl md:py-8'>About Us</h1>


        <div className='sm:grid md:flex items-center mx-5 lg:mx-50'>
        <div className="md:w-1/2 p-5">
        <div className='w-fit md:p-20'>
            <Image  src='about.jpeg' alt='image' type='image' />
        </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg md:w-1/2">
            <div className="mb-6">
                <p className="text-xl font-bold text-deep-green text-green-700 mb-2 text-center">DETOPAGRO: Your Trusted Source for Top-Tier Agro Products</p>
                <p className="text-gray-700 mb-4">DETOPAGRO is a subsidiary of DETOP ESSENCE. DETOPAGRO is an Agricultural Commodity Trading Company established for the sole purpose of Sourcing & Trading of agricultural commodities and making it available in large quantities for industrial usage(s). We are keen to become a major supplier in the industry. We believe the market is a growing one and with our growing pool of farmers, we are not only stationed to provide you with large quantities of agro products but to provide top quality products.</p>
                <p className="text-gray-700 mb-4">We give utmost concern to our esteemed clients and we are fully prepared to give you the best service this season!</p>
                <p className="text-gray-700 mb-4">@DETOPAGRO, we can help in Sourcing and aggregating the following commodities in large quantity:</p>
                <p className="text-gray-700 mb-4">Paddy Rice, Maize, Local Rice, Rice Bran, Soya beans, Groundnut, Sesame seeds, Dry split ginger, Shea nut, Sorghum, Hibiscus flower, Raw cashew nuts, Pure Natural Horne Processed cashew Nut. E. T. C</p>
                <p className="text-gray-700 mb-2 font-semibold">Our Core Services include:</p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Agro-commodities Supply</li>
                <li>Aggregation Services</li>
                <li>Sourcing & Producing</li>
                </ul>
            </div>
            
        </div>
        
        </div>
        <div className="mt-20 hide" ref={sectionRef}>
      <h1 className='text-3xl font-bold text-center mb-4 text-deep-green'>Our Core Values and Principles</h1>
      <div className="aboutcontainer">
        <div className="card-wrapper">
          <div className="card card2">
            <h2>Vision</h2>
            <p>To be the global leader in Supply of agriculture commodities and a provider of quality services that exceeds the expectations of our esteemed customers.</p>
          </div>
          <div className="card card1">
            <h2>Mission</h2>
            <p>To provide exceptional agro allied services by pursuing business through innovation and advanced technology. We also strive to prosper and build long term relationships with our customers, clients, shareholder and employees..</p>
          </div>
          <div className="card card3">
            <h2>Action Guidelines</h2>
            <p>To deliver customer satisfaction with creativity, Innovation, Sincerity, and Gratitude, and to act in compliance with the law and ethics.</p>
          </div>
          <div className="card card4">
            <h2>Our Core Philosophy</h2>
            <p>To be at the right place at the right time with the right quantity at the right cost.</p>
          </div>
        </div>
      </div>
    </div>
        <div className="container mt-10 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-deep-green">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className='w-fit'>
                        <Image className='w-16' src='integrity.svg' alt='icons' type='icon' />
                    </div>
                    <h3 className="text-xl font-medium mt-2 mb-2">INTEGRITY</h3>
                    <p className='text-sm'>DETOP is known for its steadfast adherence to moral and ethical conduct while dealing with clients and customers.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className='w-fit'>
                        <Image className='w-16' src='improvement.svg' alt='icons' type='icon' />
                    </div>
                    <h3 className="text-xl font-medium mt-2 mb-2">CONSTANT IMPROVEMENT</h3>
                    <p className='text-sm'>We believe we are not perfect but we can work our way to perfection by improving at every step of the way</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className='w-fit'>
                        <Image className='w-16' src='trust.svg' alt='icons' type='icon' />
                    </div>
                    <h3 className="text-xl font-medium mt-2 mb-2">TRUST</h3>
                    <p className='text-sm'>Our clients uphold a high level of confidence and reliance in us as we provide them with unambiguous transactions.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className='w-fit'>
                        <Image className='w-16' src='sustainability.svg' alt='icons' type='icon' />
                    </div>
                    <h3 className="text-xl font-medium mt-2 mb-2">SUSTAINABILITY</h3>
                    <p className='text-sm'>We maintain the peak of quality to uphold our client’s partnership and ensure their continuous profitability.</p>
                </div>
            </div>
            <div className=" mt-10">
            <div className="bg-white md:w-1/2 mx-auto rounded-lg shadow-md p-6">
                    <div className='w-fit'>
                        <Image className='w-16' src='commitment.svg' alt='icons' type='icon' />
                    </div>
                    <h3 className="text-xl font-medium mt-2 mb-2">COMMITMENT</h3>
                    <p className='text-sm'>We are committed to fulfilling our partnership objectives with clients impeccably. </p>
                </div>
        </div>
            </div>
    </div>
  )
}

export default AboutUs