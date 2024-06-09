import React from 'react'
import Image from '../../lib/components/image/Image'

const AboutUs = () => {
  return (
    <div className='maxWidth mx-auto pt-10 lg:pt-24 mb-24'>
    <h1 className='text-deep-green text-center text-5xl py-8'>About Us</h1>


        <div className='flex items-center mx-5 lg:mx-50'>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg sm:w-1/2">
            <div className="mb-6">
                <p className="text-xl font-bold text-green-700 mb-2 text-center">I am ADEMOLA AHMED OLAOLUWA. The CEO of DETOP ESSENCE ENTERPRISES.</p>
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
        <div className="sm:w-1/2 p-5">
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
                </div>
                <div className="card-wrapper">
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
        </div>
    </div>
  )
}

export default AboutUs