import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className='pt-24'>


        <section className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-orange">Contact Us</h2>
  <p className="mt-4 text-lg text-deep-green">Visit our location or get in touch with us.</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" style={{border:0}} allowFullScreen={true}></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-deep-green">Our Address</h3>
                            <div className='flex'>
                                <div className='w-10 flex items-center'>
                                <IoLocationOutline size={30} />
                                </div>
                                <p className="mt-1 text-gray-600">Lagos, Nigeria</p>
                            </div>
                            
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-deep-green">Hours</h3>
                            <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-deep-green">Contact</h3>
                            <div className='flex'>
                                <div className='w-10 flex items-center'>
                                <IoIosMail size={25} />
                                </div>
                                <p className=" text-gray-600 flex"><a href="mailto:detopessence01@gmail.com"> detopessence01@gmail.com</a></p>
                            </div>
                            <div className='flex py-2'>
                                <div className='w-10 flex items-center'>
                                <IoCallOutline size={25} />
                                </div>
                                <p className=" text-gray-600">  <a href="tel:+2348167603732">+2348167603732</a></p>
                            </div>
                            {/* <div className='flex'>
                                <div className='w-10 flex items-center'>
                                <FaWhatsapp size={25} />
                                </div>
                                <p className="mt-1 text-gray-600"> +23470999988887</p>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ContactUs