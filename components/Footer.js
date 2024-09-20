import Link from 'next/link'
import React from 'react'
import {  FaEnvelope, FaFacebook, FaInstagram, FaLongArrowAltRight, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className=" bg-gray-100">
        <div className="md:flex md:flex-row md:flex-wrap flex flex-col  justify-around py-24 px-10 gap-12">
          <div className="w-full  md:w-1/6 flex flex-col gap-y-12">
            <h1 className="text-xl font-bold"> Sismed Medium Clinic</h1>
            <p>
              {" "}
              We provide top-notch healthcare solutions tailored to your needs. Your well-being is our mission.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex justify-center  rounded-full w-14 h-14 p-4 text-center bg-blue-500 ">
                <FaInstagram size={30} color="white " />
              </div>
              <div className="flex justify-center  rounded-full w-14 h-14 p-4 text-center bg-blue-500 ">
                <FaFacebook size={30} color="white " />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/6 flex flex-col gap-y-10">
            <h1 className="text-xl font-bold"> Services </h1>
            <ul className="text-[#207DFF] flex flex-col gap-y-3 text-md">
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Gynecology{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Obstetrics{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Cardiac Disease{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Adult Medical Service{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Minor Surgical Procedures{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Hypertension{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Antenatal Care (ANC){" "}
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/6 flex flex-col gap-y-10">
            <h1 className="text-xl font-bold"> Links </h1>
            <ul className="text-[#207DFF] flex flex-col gap-y-3 text-md">
              
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                <Link href="#home">Home{" "}</Link>
              </li>
              
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                <Link href="#about">About{" "}</Link>
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                <Link href="#services">services{" "}</Link>
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                <Link href="#contactus">Contactus{" "}</Link>
              </li>
              
            </ul>
          </div>

          <div className="w-full md:w-1/6 flex flex-col gap-y-10">
            <h1 className="text-xl font-bold"> General Services </h1>
            <ul className="text-[#207DFF] flex flex-col gap-y-3 text-md">
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Emergency Services{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Qualified Doctors{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Preventive Health Checkups{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                24 Hours Services{" "}
              </li>
            </ul>
          </div>


          <div className="w-full lg:w-1/6 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold"> Have a Questions? </h1>
            <div className="flex gap-6 pt-5">
              <div>
                <FaMapMarkerAlt size={20} color="gray mr-2" />
              </div>{" "}
              <p>Tulu Dimtu, on the way to Alem Bank, in front of Green School.</p>
            </div>
            <div className="flex gap-6 justify-start">
              <div>
                <FaPhoneAlt size={20} color="#207DFF" />
              </div>{" "}
              <span className="text-[#207DFF]"> +251 903 48 68 48 </span>
            </div>
            <div className="flex gap-6">
              <div>
                <FaEnvelope size={20} color="#207DFF" />
              </div>{" "}
              <p className="text-[#207DFF] overflow-visible"> sismedmediumclinic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer