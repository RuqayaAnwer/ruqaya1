import React from 'react';
import ContactForm from '../contact/ContactForm';
import ContactCard from '../contact/ContactCard';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-cards-container">
        <ContactCard />
      </div>
      <div className="contact-form">
        <h2>اتصل بنا</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
