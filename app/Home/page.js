import React from "react";
import { FaAmbulance } from "react-icons/fa";
import aboutImage from "../../public/banner_arzt.jpg";
import Image from "next/image";
import buildingimage from "../../public/buildingimage.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceList from "@/components/ServiceList";
import Statistics from "@/components/Statistics";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div >
      <div
        style={{
          backgroundImage:
            "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url('https://nyihr.com/wp-content/uploads/care-plus-16.jpg')",
          // backgroundPosition: '50% -38.7812px',
          // height: '633px',
        }}
        data-section="home"
        data-stellar-background-ratio="0.5"
        className="relative z-30 h-[633px] bg-no-repeat bg-cover bg-center"
      >
        <Navbar />
        <Herosection />
      </div>
      <div className="relative z-10">
      <About />
      <Services />
      <ServiceList/>
      <Statistics />
      <ContactUs />
      <Footer />
      </div>
      
      

      
    </div>
  );
};

export default Home;
