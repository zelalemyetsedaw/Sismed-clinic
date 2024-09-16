import React from 'react'

const Herosection = () => {
  return (
    <div id="home" className=" content  h-full flex flex-col gap-5 items-start justify-center pt-32 pl-10 lg:pl-32 w-full md:w-1/2 ">
          <div className="text-[#207DFF] font-bold ">WELCOME TO SISMED</div>
          <div>
            <h1 className="lg:text-6xl md:text-5xl text-2xl  bold font-extrabold">
              {" "}
              Your Health, Our Priority
            </h1>
          </div>
          <div>
            <p className="p-2 text-gray-500 text-sm md:text-md lg:text-lg">
            At Sismed, we are dedicated to providing high-quality medical care with compassion.Whether you need urgent assistance or a routine checkup, our team is ready to support your health journey, 24/7.
            </p>
          </div>
          <div>
            <button className="bg-[#207DFF] text-white p-4 rounded-full">
              {" "}
              Make an Appointment
            </button>
          </div>
        </div>
  )
}

export default Herosection