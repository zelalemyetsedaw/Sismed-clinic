import React from "react";
import Image from "next/image";
import { FaAmbulance } from "react-icons/fa";
const Services = () => {
  return (
    <div>
      <div
        id="department"
        className="md:flex md:flex-row flex flex-col md:mt-0 mt-10  bg-[#F8F9FA]"
      >
        <div className="w-full md:w-2/3  lg:pl-20 pl-5 py-20 md:py-32 ">
          <h1 className=" text-5xl bold font-extrabold pb-6"> Our Services </h1>
          <div className="service md:flex md:flex-row flex flex-col flex-wrap">
            <div className="flex py-5 md:py-10 w-full md:w-1/2 pr-10 md:pr-20">
              <div className=" rounded-full flex items-center justify-center w-28 lg:w-44 h-16 lg:h-20 bg-[#FFEEED]">
                <FaAmbulance
                  color="red"
                  className="lg:text-[50px] m-4 text-[40px]"
                />
              </div>

              <div className="pl-4 lg:pl-8 py-2 ">
                <h1 className="text-2xl  pb-4"> Emergency services </h1>
                <p className="text-gray-400">
                  In times of urgent need, Sismed offers fast, reliable
                  emergency medical care.
                </p>
              </div>
            </div>

            <div className="flex py-5 md:py-10 w-full md:w-1/2 pr-10 md:pr-20">
              <div className=" rounded-full flex items-center justify-center w-28 lg:w-44 h-16 lg:h-20 bg-[#FFEEED]">
                <FaAmbulance
                  color="red"
                  className="lg:text-[50px] m-4 text-[40px]"
                />
              </div>

              <div className="pl-4 lg:pl-8 py-2 ">
                <h1 className="text-2xl  pb-4"> Qualified Doctors </h1>
                <p className="text-gray-400">
                  Our clinic is home to a team of highly skilled and certified
                  doctors from various medical fields
                </p>
              </div>
            </div>

            <div className="flex py-5 md:py-10 w-full md:w-1/2 pr-10 md:pr-20">
              <div className=" rounded-full flex items-center justify-center w-28 lg:w-44 h-16 lg:h-20 bg-[#FFEEED]">
                <FaAmbulance
                  color="red"
                  className="lg:text-[50px] m-4 text-[40px]"
                />
              </div>

              <div className="pl-4 lg:pl-8 py-2 ">
                <h1 className="text-2xl  pb-4"> Preventive Health Checkups </h1>
                <p className="text-gray-400">
                At Sismed, we believe prevention is better than cure
                </p>
              </div>
            </div>

            <div className="flex py-5 md:py-10 w-full md:w-1/2 pr-10 md:pr-20">
              <div className=" rounded-full flex items-center justify-center w-28 lg:w-44 h-16 lg:h-20 bg-[#FFEEED]">
                <FaAmbulance
                  color="red"
                  className="lg:text-[50px] m-4 text-[40px]"
                />
              </div>

              <div className="pl-4 lg:pl-8 py-2 ">
                <h1 className="text-2xl  pb-4"> 24 Hours Service </h1>
                <p className="text-gray-400">
                  Healthcare emergencies can happen at any time. That’s why we
                  offer 24-hour services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F9FA] w-full  md:w-2/5 md:mb-0 mb-0">
          <div className="w-full md:mx-0 mx-4 md:w-4/5 h-full pr-6 bg-white pl-10 pt-20">
            <h1 className="text-2xl text-blue-400 font-bold mb-6">
              {" "}
              Free Consultation{" "}
            </h1>
            <input
              type="text"
              placeholder="First Name"
              className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
            />
            <input
              type="text"
              placeholder="Service You Want"
              className="w-11/12 p-4 mb-5 rounded-full border border-spacing-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-11/12 p-4 mb-5 rounded-full  border border-spacing-2"
            />
            <input
              type="text"
              placeholder="Date"
              className="w-11/12 p-4 mb-5 rounded-full  border border-spacing-2"
            />
            <input
              type="text"
              placeholder="Time"
              className="w-11/12 p-4 mb-5 rounded-full  border border-spacing-2"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-11/12 p-4 mb-5 rounded-full  border border-spacing-2"
            />
            <button className="md:mb-0 mb-10 p-4 rounded-full bg-[#FE5F55] w-11/12 text-white">
              {" "}
              Appointment{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-0 w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Your Health is Our Priority
          </h1>
          <p className="mt-2">
            We can manage your dream building. A small river named Duden flows
            by their place.
          </p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded">
            Search
          </button>
        </div>
        <Image
          src="http://www.doctolet.in/wp-content/uploads/2017/04/banner_arzt-1024x350.jpg"
          width={1024}
          height={350}
          className="w-full h-96 object-cover "
        />
      </div>
    </div>
  );
};

export default Services;
