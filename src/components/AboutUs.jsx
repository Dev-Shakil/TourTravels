import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className="about-us py-12 h-[90vh]">
    <h2 className="text-center py-2 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] ">About Us</h2>
    <div className="flex gap-x-5 lg:mx-[80px] xl:mx-[180px] xl:ml-[350px] mx-[30px]  flex-wrap py-5 justify-center">
      <div className="md:w-[50%] w-[100%]">
        <h3 className="text-4xl font-semibold py-4">Discover your all the destinations with us</h3>
        <p className="text-gray-300 font-semibold text-justify">Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat aliquip commodo ipsum officia in Lorem commodo aliquip dolore. Nisi domip excepteur commodo ea nostrud mollit.</p>
      <div className="py-2 ">
        <span className="flex items-center gap-3"> <Image src="/about-3.png" alt="about hero" width={50} height={50}/> <h2 className="text-2xl font-semibold">Explore top place over the world</h2></span>
      </div>
      <div className="py-2">
        <span className="flex items-center gap-3"> <Image src="/about-2.png" alt="about hero" width={50} height={50}/> <h2 className="text-2xl font-semibold">Affordable tour packages</h2></span>
      
      </div>
      <div className="py-2">
        <span className="flex items-center gap-3"> <Image src="/about-2.png" alt="about hero" width={50} height={50}/> <h2 className="text-2xl font-semibold">Experienced tour guide</h2></span>
      </div>
      </div>
      <div className="md:w-[47%] flex items-center w-[100%]">
        <Image src="/about_two.png" alt="about hero" width={500} height={400}/>    
        </div>
        </div>
    </section>
  )
}

export default AboutUs