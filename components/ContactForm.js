'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false); // Track sending status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Start sending

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        'service_e079qvq', // Replace with your EmailJS service ID
        'template_5u35idh', // Replace with your EmailJS template ID
        templateParams,
        '9dvE015Rtj6YBG089' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully.');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setIsSending(false); // Stop sending
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
          setIsSending(false); // Stop sending on failure
        }
      );
  };

  return (
    <div className="pt-10 py-24 bg-gray-100 w-full md:w-1/2 flex flex-col gap-4 items-center">
      <form onSubmit={sendEmail} className="w-full flex flex-col items-center gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-3/4 border-2 p-4 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-3/4 border-2 p-4 rounded-md"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-3/4 border-2 p-4 rounded-md"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-3/4 border-2 p-4 rounded-md"
          required
        />
        <button
          type="submit"
          disabled={isSending} // Disable button while sending
          className={`p-4 w-1/2 rounded-full text-white ${isSending ? 'bg-blue-500' : 'bg-[#FE5F55]'}`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
