import Carousel from '@/components/Carousal'
import Navbar from '@/components/Navbar'
import React from 'react'
const images = [
    "https://drive.google.com/uc?export=view&id=1pndlDqCuwcdPSdp9lH--Nfoyga7qQoae",
    "https://drive.google.com/uc?export=view&id=1HhIwv4r_OJFecjUKMspeuOUmeOy73nqE",
    "https://drive.google.com/uc?export=view&id=11VSSSHEb_Giq1nXBOMmTYbc9YrSdTbec",
    "https://drive.google.com/uc?export=view&id=1XpZBYIgE1JD80dgqmMITviS_1y1nu71r",
    "https://drive.google.com/uc?export=view&id=1DT6h2LiZIIW2NW2zcQGJqkveMDWxMCfJ",
  ];
const Test = () => {
  return (
    <>
    <div>
        <div className='z-10 relative'>
            <Navbar />
            
        </div>
        
    </div>
    <div className='relative '>
    <Carousel images={images} />
</div>
</>
  )
}

export default Test