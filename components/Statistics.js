import Link from 'next/link'
import React from 'react'

const Statistics = () => {
  return (
    <div
        style={{
          backgroundImage:
            "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url('https://drive.google.com/uc?export=view&id=1DuhlJpKL8TZiQm8pEkg5mGgCx5-FGPve')",
        }}
        data-section="home"
        data-stellar-background-ratio="0.5"
        className=" h-full md:h-96  lg:h-screen bg-no-repeat bg-cover "
      >
        <div className="bg-[#428CF4] md:flex lg:py-10 py-0  h-full opacity-80 ">
          <div className="md:w-1/2 w-full flex flex-col self-center text-left gap-y-6 text-white pl-5 md:pl-10  lg:pl-20 ">
            <div>
              <h2 className="pt-24 md:pt-0 text-md">FUN FACTS</h2>
            </div>

            <div>
              <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold">
                Over 5,100 patients trust us
              </h2>
            </div>

            <div>
              <Link href="#about" scroll={true}>
              <button className="p-4 w-4/5 md:w-full lg:w-1/2  rounded-full bg-[#FE5F55] ">
                {" "}
                Make an Appointment{" "}
              </button>
              </Link>
            </div>
          </div>

          <div className="flex w-full md:w-1/2  flex-wrap py-10 md:p-5 lg:p-10">
            <div className="w-full md:w-1/2 md:py-0 py-10 flex flex-col items-center justify-center text-white border-b-2 md:border-r-2 h-1/2">
              <h1 className="text-7xl font-extrabold"> 4 </h1>
              <p className="text-lg text-center"> Years of Experience </p>
            </div>

            <div className="w-full md:w-1/2 py-10 md:py-0 flex flex-col items-center justify-center text-white border-b-2  h-1/2">
              <h1 className="text-7xl font-extrabold"> 500 </h1>
              <p className="text-lg"> Happy Patients </p>
            </div>

            <div className="w-full md:w-1/2 md:py-0 py-10 flex flex-col items-center justify-center text-white border-b-2 md:border-b-0 border-r-0 md:border-r-2 h-1/2">
              <h1 className="text-7xl font-extrabold"> 2 </h1>
              <p className="text-lg"> Number of Doctors </p>
            </div>

            <div className="w-full md:w-1/2 md:py-0 py-10 flex flex-col items-center justify-center text-white md:border-b-0 border-b-2 h-1/2">
              <h1 className="text-7xl font-extrabold"> 10 </h1>
              <p className="text-lg"> Number of Staffs </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Statistics