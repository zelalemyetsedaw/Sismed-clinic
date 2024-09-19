'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;
  
    const nextSlide = () => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };
  
    const prevSlide = () => {
      setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };
  
    useEffect(() => {
      const autoSlide = setInterval(nextSlide, 10000); // Change slide every 5 seconds
      return () => clearInterval(autoSlide); // Cleanup on unmount
    }, [currentIndex]);
  
    return (
      <div>
      <div className="relative w-full md:mt-0 mt-10 md:h-full " >
        {/* Carousel wrapper */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute h-full w-full md:h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                
                src={image}
                className=" object-cover h-full w-full"
                width={500}
                height={600}  // Adjusted height
                alt={`Clinic image ${index + 1}`}
              />
              
            </div>
          ))}
        </div>
  
        {/* Slider indicators */}
        <div className="absolute flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
  
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
  
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      </div>
    );
  };
  
export default Carousel;
