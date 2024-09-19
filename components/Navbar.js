"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY > 50);

      const sections = ["home", "about", "s", "contactus"];
      // const offsets = sections.map(
      //   (id) => document.getElementById(id)?.offsetTop || 0
      // );
      const offsets = [0,466,2280,3600]
      
      // Set the active section based on scroll position
      if (scrollY < offsets[1]) setActiveSection("home");
      else if (scrollY < offsets[2]) setActiveSection("about");
      else if (scrollY < offsets[3]) setActiveSection("s");
      else setActiveSection("contactus");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div className="bg-transparent fixed right-0 left-0 top-0 flex justify-between items-center py-5 ">
        <div
          className={`${
            scroll
              ? "bg-white opacity-100 lg:shadow-lg"
              : " lg:bg-white shadow-lg bg-black opacity-100 lg:opacity-40"
          } absolute inset-0 duration-1000`}
        ></div>
        <div className="relative flex justify-between items-center w-full">
          <div>
            <h1
              className={`${
                scroll ? "text-black" : "text-white"
              } lg:pl-28 pl-10 text-2xl  lg:text-black font-extrabold`}
            >
              Sismed
            </h1>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              <p
                className={`${
                  scroll ? "text-black " : "text-white "
                } flex items-center pr-10`}
              >
                <FaBars className="mr-2" />
                MENU
              </p>
            </button>
          </div>

          <div className="hidden pr-28 lg:flex gap-7 items-center">
            <ul className="flex gap-7">
              {["home", "about", "services", "contactus"].map((section) => (
                <li
                  key={section}
                  className={`${
                    activeSection === section
                      ? "text-blue-500 border-blue-600"
                      : "border-b-transparent"
                  } hover:border-blue-600 cursor-pointer border-b-2 transition-colors duration-500`}
                >
                  <Link href={`#${section}`} scroll={true}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="#appointment">
              <button className="bg-[#FE5F55] hover:bg-[#207DFF] text-white text-sm p-3 rounded">
                Appointment
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden bg-black pl-10 text-white absolute top-full left-0 w-full text-left shadow-lg`}
        >
          <ul className="flex flex-col text-xl gap-y-7">
            {["home", "about", "s", "contactus"].map((section) => (
              <li
                key={section}
                className="hover:border-b-2 w-fit cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-300"
              >
                <Link href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
              </li>
            ))}
          </ul>
          <Link href="#appointment">
            <button className="bg-[#FE5F55] hover:bg-[#207DFF] w-full my-3 text-white text-sm p-3 rounded">
              Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
