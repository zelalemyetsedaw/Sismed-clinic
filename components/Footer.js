import React from 'react'
import { FaAmbulance, FaLongArrowAltRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className=" bg-gray-100">
        <div className="md:flex md:flex-row md:flex-wrap flex flex-col  justify-around py-24 px-10 gap-12">
          <div className="w-full  md:w-1/6 flex flex-col gap-y-12">
            <h1 className="text-xl font-bold"> Sismed </h1>
            <p>
              {" "}
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex justify-center  rounded-full w-14 h-14 p-4 text-center bg-blue-500 ">
                <FaAmbulance size={30} color="white " />
              </div>
              <div className="flex justify-center  rounded-full w-14 h-14 p-4 text-center bg-blue-500 ">
                <FaAmbulance size={30} color="white " />
              </div>
              <div className="flex justify-center  rounded-full w-14 h-14 p-4 text-center bg-blue-500 ">
                <FaAmbulance size={30} color="white " />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/6 flex flex-col gap-y-10">
            <h1 className="text-xl font-bold"> Departments </h1>
            <ul className="text-[#207DFF] flex flex-col gap-y-3 text-md">
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Neurology{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Opthalmology{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Nuclear Magnetic{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Surgical{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Cardiology{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Dental{" "}
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
                Home{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                About{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Departments{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Contact{" "}
              </li>
              <li className="flex items-center ">
                {" "}
                <span className="mr-2">
                  <FaLongArrowAltRight />
                </span>
                Doctors{" "}
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/6 flex flex-col gap-y-10">
            <h1 className="text-xl font-bold"> Services </h1>
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
                Outdoors Checkup{" "}
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
                <FaAmbulance size={30} color="gray mr-2" />
              </div>{" "}
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="flex gap-6 justify-start">
              <div>
                <FaAmbulance size={30} color="gray mr-2" />
              </div>{" "}
              <span className="text-[#207DFF]"> +2 392 3929 210 </span>
            </div>
            <div className="flex gap-6">
              <div>
                <FaAmbulance size={30} color="gray mr-2" />
              </div>{" "}
              <p className="text-[#207DFF]"> info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer