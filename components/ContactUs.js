import React from "react";
import { FaAmbulance } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div id="contactus" className="bg-white pt-28 lg:pt-40 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold"> Contact Us </h1>
          <p className="text-gray-400 md:px-4 px-0 text-md md:text-lg pt-4">
            {" "}
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia{" "}
          </p>
        </div>

        <div className="flex-wrap flex gap-7 justify-center">
          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaAmbulance size={50} color="red " />
            </div>
            <p className="text-lg"> ADDRESS </p>
            <p className="text-lg text-gray-400">
              {" "}
              198 West 21th Street, Suite 721 New York NY 10016{" "}
            </p>
          </div>

          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center md:mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaAmbulance size={50} color="red " />
            </div>
            <p className="text-lg"> CONTACT NUMBER </p>
            <p className="text-lg text-gray-400">
              {" "}
              + 1235 2355 98{" "}
            </p>
          </div>

          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center md:mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaAmbulance size={50} color="red " />
            </div>
            <p className="text-lg"> EMAIL ADDRESS </p>
            <p className="text-lg text-gray-400">
              {" "}
              info@yoursite.com{" "}
            </p>
          </div>

          <div className="w-full mx-4 md:mx-0 md:w-2/5 lg:w-1/5 text-center p-10 bg-[#F8F9FA] items-center md:mt-10 flex flex-col gap-y-6">
            <div className="flex justify-center  rounded-full w-24 h-24 p-6 text-center bg-white ">
              <FaAmbulance size={50} color="red " />
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
              className="h-full"
            ></iframe>
          </div>

          <div className="pt-10 py-24 bg-gray-100 w-full md:w-1/2 flex flex-col gap-4 items-center ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-3/4 border-2 p-4"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-3/4 border-2 p-4"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-3/4 border-2 p-4"
            />
            <textarea
              type="text"
              placeholder="Your Name"
              className="w-3/4 border-2 p-4"
            />
            <button className="p-4 w-1/2 bg-[#FE5F55] rounded-full">
              {" "}
              Send Message{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
