import React from "react";
import Image from "next/image";
import {
  FaAmbulance,
  FaRegClock,
  FaStethoscope,
  FaUserMd,
} from "react-icons/fa";
import AppointmentForm from "./AppointmentForm";
import Link from "next/link";
const Services = () => {
  return (
    <div>
      <div id="appointment" className="md:flex md:flex-row flex flex-col md:mt-0 mt-10  bg-[#F8F9FA]">
        <div className="w-full md:w-2/3  lg:pl-20 pl-5 py-20 md:py-32 ">
          <h1 className=" text-5xl bold font-extrabold pb-6"> Our General Services </h1>
          <div className="service md:flex md:flex-row flex flex-col flex-wrap">
            <div className="flex py-5 md:py-10 w-full md:w-1/2 pr-10 md:pr-20">
              <div className=" rounded-full flex items-center justify-center w-28 lg:w-44 h-16 lg:h-20 bg-[#FFEEED]">
                <FaAmbulance
                  color="#FE5F55"
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
                <FaUserMd
                  color="#FE5F55"
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
                <FaStethoscope
                  color="#FE5F55"
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
                <FaRegClock
                  color="#FE5F55"
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
        <AppointmentForm />
      </div>

      <div  className="relative mt-0 w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Your Health is Our Priority
          </h1>
          <p className="mt-2">
          We provide top-notch healthcare solutions tailored to your needs. Your well-being is our mission.
          </p>
          <Link href="#home" >
          <button  className="mt-4 bg-white text-black px-4 py-2 rounded">
            Back to Home
          </button>
          </Link>
        </div>
        <Image
          src="http://www.doctolet.in/wp-content/uploads/2017/04/banner_arzt-1024x350.jpg"
          width={1024}
          height={350}
          alt="background image"
          className="w-full h-96 object-cover "
        />
      </div>
      
    </div>
  );
};

export default Services;
