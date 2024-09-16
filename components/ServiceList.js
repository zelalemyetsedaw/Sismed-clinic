import Image from 'next/image'
import React from 'react'
import { FaAmbulance, FaHeartbeat, FaStethoscope, FaUserMd } from 'react-icons/fa'

const ServiceList = () => {
  return (
    <div className="flex">
        <div className="w-1/3 hidden md:block">
          <Image
            src="https://static.wixstatic.com/media/5b77cb_dc37426f76774784bc33e67cbba70e01~mv2.png/v1/fill/w_452,h_303,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/doctor%20patient%20handshake.png"
            width={452}
            height={304}
            className="h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 w-full md:flex md:flex-wrap md:flex-row flex flex-col">
          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaStethoscope size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Pediatrics
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Specialized healthcare services for children {" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaUserMd  size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              ANC,Obstrice and Gynecologic
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Women's health, pregnancy, and reproductive care{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaHeartbeat size={30} color="red " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Cardiac Disease 
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Specialized care for cardiac diseases and non communicable diseases .{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaStethoscope  size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Adult Medical Service
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Routine medical care and health checkups for adults.{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaUserMd size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Minor Surgical Procedures
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Offering minor surgeries performed by experienced professionals.{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaHeartbeat size={30} color="red " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Hypertension
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Far far away, behind the word mountains{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaStethoscope size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Neurology
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Far far away, behind the word mountains{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaStethoscope size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Neurology
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Far far away, behind the word mountains{" "}
            </p>
          </div>

          <div className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500  bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center justify-center flex-col items-center">
            <div className="flex pb-2 justify-center">
              <FaStethoscope size={30} color="blue " />
            </div>
            <h2 className="pb-2 text-2xl md:text-xl lg:text-2xl text-inherit ">
              {" "}
              Neurology
            </h2>
            <p className="text-gray-300 md:text-md text-lg lg:text-lg">
              {" "}
              Far far away, behind the word mountains{" "}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ServiceList