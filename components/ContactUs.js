import React from "react";
import { FaAmbulance, FaGlobe, FaMapSigns, FaPaperPlane, FaPhone, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div id="contactus" className="bg-white pt-28 lg:pt-40 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold"> Contact Us </h1>
          <p className="text-gray-400 md:px-4 px-0 text-md md:text-lg pt-4">
          Have questions or need assistance? We're here to help. Reach out to us, and our team will respond promptly to provide the support you need.
          </p>
        </div>

        <div className="flex-wrap flex gap-7 justify-center">
          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaMapSigns  size={40} color="#207DFF " />
            </div>
            <p className="text-lg"> ADDRESS </p>
            <p className="text-lg text-gray-400">
              {" "}
              Tullu Dimtu{" "}
            </p>
          </div>

          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center md:mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaPhoneAlt size={40} color="#207DFF " />
            </div>
            <p className="text-lg"> CONTACT NUMBER </p>
            <p className="text-lg text-gray-400">
              {" "}
              +251 903 48 68 48{" "}
            </p>
          </div>

          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center md:mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaPaperPlane  size={40} color="#207DFF " />
            </div>
            <p className="text-lg"> EMAIL ADDRESS </p>
            <p className="text-lg text-gray-400">
               sismedmediumclinic@gmail.com
            </p>
          </div>

          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center md:mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaGlobe  size={40} color="#207DFF " />
            </div>
            <p className="text-lg"> WEBSITE </p>
            <p className="text-lg text-gray-400">
              {" "}
              sismed.com{" "}
            </p>
          </div>
        </div>

        <div className="md:w-10/12 w-full  md:mx-auto   my-10  md:flex">
          <div className=" w-full md:w-1/2  bg-[#F8F9FA] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090044!2d-122.41941548468143!3d37.774929779758795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814dbe2fbf13%3A0x6e3c7b26cd9f1b9d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1639682240000!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              className="md:h-full h-72"
            ></iframe>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
