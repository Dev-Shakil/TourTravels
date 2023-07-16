"use client"
import ServicesCard from '@/components/ServicesCard'
import Services from '@/components/services';
import React, { useState } from 'react'

const ServicesPage = () => {
    const [servicesData, setServicesData] = useState(Services);
  return (
    <section className="services ">
    <h2 className="text-center py-4 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Our Services</h2>
    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
        <ServicesCard services={servicesData}/>
      </div>
    </section>
  )
}

export default ServicesPage