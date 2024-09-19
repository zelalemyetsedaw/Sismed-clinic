
import Carousel from "./Carousal";
import Link from "next/link";
const images = [
  "https://drive.google.com/uc?export=view&id=1pndlDqCuwcdPSdp9lH--Nfoyga7qQoae",
  "https://drive.google.com/uc?export=view&id=1HhIwv4r_OJFecjUKMspeuOUmeOy73nqE",
  "https://drive.google.com/uc?export=view&id=11VSSSHEb_Giq1nXBOMmTYbc9YrSdTbec",
  "https://drive.google.com/uc?export=view&id=1XpZBYIgE1JD80dgqmMITviS_1y1nu71r",
  "https://drive.google.com/uc?export=view&id=1DT6h2LiZIIW2NW2zcQGJqkveMDWxMCfJ",
];

const About = () => {
  
  return (
    <div id="about" className="">
      <div
        
        className="About flex flex-col md:flex md:flex-row lg:flex w-full lg:w-3/4 lg:px-0 px-10 lg:m-auto gap-10 items-center"
      >
        <div className=" lg:w-1/2 md:w-1/2  w-full   ">
          <Carousel images={images} />
        </div>
        <div className=" lg:w-1/2 md:w-1/2 md:py-20 py-0 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold">
            {" "}
            We Are <span className="text-[#207DFF]">Sismed</span> A Medical
            Clinic{" "}
          </h2>
          <p className="pt-7 pb-5 text-gray-500">
            {" "}
            Sismed Clinic is a community-focused healthcare provider offering a
            wide range of medical services. With our highly qualified
            professionals and state-of-the-art facilities, we ensure
            personalized care for every patient. Your well-being is our
            commitment, and we strive to deliver reliable, top-tier healthcare
            services to all
          </p>
          <div className="lg:flex lg:flex-row flex flex-col gap-y-3">
            <Link href="#appointment" scroll={true}>
              <button className="mr-3 bg-[#207DFF] text-white p-5 rounded-full">
                {" "}
                Make an appointment{" "}
              </button>
            </Link>
            <Link href="#contactus" scroll={true}>
              <button className="bg-[#FE5F55] text-white p-5 rounded-full">
                {" "}
                Contact us{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
