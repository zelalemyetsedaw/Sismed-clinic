import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceList from "@/components/ServiceList";
import Statistics from "@/components/Statistics";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div>
        <div
          style={{
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url('https://res.cloudinary.com/ddwwi0vjk/image/upload/v1727271815/saveimage_we9nex.jpg')",
          }}
          data-section="home"
          data-stellar-background-ratio="0.5"
          className="relative z-20 h-[633px] bg-no-repeat bg-cover bg-center"
        >
          <Navbar />
          <Herosection />
        </div>
        <div className="relative z-10">
          <section className=""><About /></section>
          <Services />
          <ServiceList />
          <Statistics />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </main>
  );
}
