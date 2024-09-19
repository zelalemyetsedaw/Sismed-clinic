'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaAmbulance, FaBaby, FaFemale, FaHeartbeat, FaPrescriptionBottleAlt, FaStethoscope, FaUserMd } from 'react-icons/fa'

const services = [
  { id: 1, icon: FaFemale, title: 'Gynecology', description: "Specialized care for women's reproductive health.", color: '#207DFF' },
  { id: 2, icon: FaBaby, title: 'Obstetrics', description: 'Healthcare related to childbirth and the care of women during and after pregnancy.', color: '#207DFF' },
  { id: 3, icon: FaHeartbeat, title: 'Cardiac Disease', description: 'Specialized care for cardiac diseases.', color: '#FE5F55' },
  { id: 4, icon: FaStethoscope, title: 'Adult Medical Service', description: 'Routine medical care for adults.', color: '#207DFF' },
  { id: 5, icon: FaUserMd, title: 'Minor Surgical Procedures', description: 'Offering minor surgeries.', color: '#207DFF' },
  { id: 6, icon: FaHeartbeat, title: 'Hypertension', description: 'Far far away, behind the word mountains', color: '#FE5F55' },
  { id: 7, icon: FaUserMd, title: 'Antenatal Care (ANC)', description: 'Comprehensive care for women during pregnancy.', color: '#207DFF' },
  { id: 8, icon: FaPrescriptionBottleAlt, title: 'Pharmacy Services', description: 'Access to prescription medications and medical advice.', color: '#207DFF' },
  { id: 9, icon: FaAmbulance, title: 'Emergency Service', description: '24/7 emergency medical services for critical care.', color: '#FF0000' },
]

const ServiceCard = ({ id, icon: Icon, title, description, color, hovered, onMouseEnter, onMouseLeave }) => (
  <div
    onMouseEnter={() => onMouseEnter(id)}
    onMouseLeave={() => onMouseLeave()}
    className="w-full md:w-1/3 hover:bg-[#207DFF] hover:text-white transition-colors duration-500 bg-white border border-spacing-4 h-60 p-10 md:p-8 lg:p-10 text-center flex-col items-center justify-center"
  >
    <div className="flex pb-2 justify-center">
      <Icon size={30} color={hovered === id ? '#FFFFFF' : color} />
    </div>
    <h2 className="pb-2 text-2xl md:text-base lg:text-xl text-inherit">{title}</h2>
    <p className="text-gray-300 md:text-sm text-lg lg:text-lg">{description}</p>
  </div>
)

const ServiceList = () => {
  const [hovered, setHovered] = useState(0)

  return (
    <div id="services"  className="pt-20 flex">
      
      <div className="w-1/3 hidden md:block">
        <Image
          src="https://drive.google.com/uc?export=view&id=18GQoLPyCvfzg6VyFGl0G9D3FIlK49a0-"
          width={452}
          height={304}
          alt="background image"
          className="h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 w-full md:flex md:flex-wrap flex-col md:flex-row">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            {...service}
            hovered={hovered}
            onMouseEnter={setHovered}
            onMouseLeave={() => setHovered(0)}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceList
