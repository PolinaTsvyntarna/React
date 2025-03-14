import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <main>
      <section className="contact-form">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;


