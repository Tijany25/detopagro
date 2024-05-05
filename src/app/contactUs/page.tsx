import React from 'react'
import ContactUs from '../modules/views/contact-us/ContactUs'
import Footer from '../modules/lib/components/footer/Footer'
import connectDB from '../api/db'

const page = () => {
  return (
    <>
    <ContactUs />
    <Footer />
    </>
  )
}

export default page
