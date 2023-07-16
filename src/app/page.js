"use client"
import DestinationCountry from '@/components/DestinationCountry'
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import Destinations from '@/components/destination';
import { useState } from 'react';
import DestinationCard from '@/components/DestinationCard';
import ServicesCard from '@/components/ServicesCard';
import Services from '@/components/services';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeroSection from '@/components/HeroSection';
import OurRecentFlight from '@/components/OurRecentFlight';
import Countries from '@/components/Countries';
import AboutUs from '@/components/aboutus';
import Contact from '@/components/contact';
import Footer from '@/components/Footer';

const uniqueCountry = [
  ...new Set(Destinations.map((country)=>{
    return country.country
  }))
]





const Home = () =>{
  const [countryData, setCountryData] = useState(Destinations)
  const [servicesData, setServicesData] = useState(Services);
 
  return (
    <div>
    {/* <main className=" bg-[url('/hero.jpg')]  bg-no-repeat bg-cover min-h-[100vh]">
      
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
    <h2 className="text-white text-3xl md:text-5xl  lg:text-8xl font-bold text-shadow pb-5 brightness-200 ">Explore the world togather</h2>
    <h3 className="text-white  md:text-2xl lg:text-4xl font-semibold">Find awesome flights, Hotel, Tour, and Packages</h3></div>
    </main> */}
    
    <HeroSection/>
    <div>
    <h2 className="text-center py-8 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[46%] after:left-[36%]  after:bottom-[0px] ">Our Recent Flights</h2>
    <OurRecentFlight/>
    </div>
   

    <section className="services ">
    <h2 className="text-center py-4 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Our Services</h2>
    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
        <ServicesCard services={servicesData}/>
      </div>
    </section>
   <AboutUs/>
    
    <section className="membership">
    <h2 className="text-center py-3 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Our Membership</h2>

    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
    <Image src="/Biman.png" alt="about hero" width={200} height={100}/> 
    <Image src="/haab.jpeg" alt="about hero" width={200} height={200}/> 
    <Image src="/iata.png" alt="about hero" width={200} height={200}/> 
    </div>
    </section>
    <div className='py-[100px]'>
    <h2 className="text-center py-2 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] ">Our Source of Countries</h2>
    <Countries/>
    </div>
   <Contact/>

    
    </div>


  )
}
export default Home;