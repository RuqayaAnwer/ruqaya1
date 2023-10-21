import React from 'react'
import ContactForm from './ContactForm'
import HeroContact from './HeroContact'
const ContactUs=()=> {
  return (
    <div>
      <HeroContact heading="تواصل معنا" text="اكتب لنا" />
      <ContactForm />
      
    </div>
  )
}

export default ContactUs
