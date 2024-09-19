'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: '',
    phone: '',
    date: '',
    time: '',
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
      subject: "appointment",
      firstName: formData.firstName,
      lastName: formData.lastName,
      service: formData.service,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
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
          alert('Your appointment request has been sent successfully.');
          setFormData({
            firstName: '',
            lastName: '',
            service: '',
            phone: '',
            date: '',
            time: '',
            message: ''
          });
          setIsSending(false); // Stop sending
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the request. Please try again later.');
          setIsSending(false); // Stop sending on failure
        }
      );
  };

  return (
    <div className="bg-[#F8F9FA] w-full md:w-2/5 md:mb-0 mb-0">
      <form
        className="w-full md:mx-0  md:w-4/5 h-full pr-6 bg-white pl-8 md:pl-10 pt-20"
        onSubmit={sendEmail}
      >
        <h1 className="text-2xl pl-6 text-blue-400 font-bold mb-6"> Appointment Form </h1>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Service You Want"
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date || ""}
          onChange={handleChange}
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <input
          type="time"
          name="time"
          placeholder="Time"
          value={formData.time || ""}
          onChange={handleChange}
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
          required
        />

        <button
          type="submit"
          disabled={isSending} // Disable while sending
          className={`md:mb-0 mb-10 p-4 rounded-full w-11/12 text-white ${isSending ? 'bg-gray-500' : 'bg-[#FE5F55] hover:bg-[#207DFF]'}`}
        >
          {isSending ? 'Appointing...' : 'Appointment'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
