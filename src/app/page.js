"use client"
import DestinationCountry from '@/components/DestinationCountry'
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import Destinations from '@/components/destination';
import { useState } from 'react';
import DestinationCard from '@/components/DestinationCard';
import ServicesCard from '@/components/ServicesCard';
import Services from '@/components/services';

const uniqueCountry = [
  ...new Set(Destinations.map((country)=>{
    return country.country
  }))
]

export default function Home() {
  const [countryData, setCountryData] = useState(Destinations)
  const [servicesData, setServicesData] = useState(Services)
  return (
    <div>
    <main className=" bg-[url('/hero.jpg')]  bg-no-repeat bg-cover min-h-[100vh]">
      
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
    <h2 className="text-white text-3xl md:text-5xl  lg:text-8xl font-bold text-shadow pb-5 brightness-200 ">Explore the world togather</h2>
    <h3 className="text-white  md:text-2xl lg:text-4xl font-semibold">Find awesome flights, Hotel, Tour, and Packages</h3></div>
    </main>
    <section className="hot-deals py-8">
    	<h2 className="text-center py-7 text-2xl font-semibold md:text-3xl text-[#8b3eea] lg:text-5xl">Explore Our Hot Deals</h2>
      <div className="flex  bg-white shadow-[30px_35px_60px_15px_rgba(0,0,0,0.2)] my-2 mx-8 rounded justify-center p-4 md-m flex-wrap ">
      <DestinationCountry countryData={countryData} setCountryData={setCountryData}/>
      
      </div>
      <div className="flex mx-[80px] justify-center flex-wrap">
      <DestinationCard countryData={countryData}/>
      </div>
    </section>

    <section className="services ">
    <h2 className="text-center py-4 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Our Services</h2>
    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
        <ServicesCard services={servicesData}/>
      </div>
    </section>
    <section className="about-us py-12 ">
    <h2 className="text-center py-2 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] ">About Us</h2>
    <div className="flex gap-x-5 lg:mx-[80px] xl:mx-[180px] xl:ml-[350px] mx-[30px]  flex-wrap py-5 justify-center">
      <div className="md:w-[50%] w-[100%]">
        <h3 className="text-4xl font-semibold py-4">Discover your all the destinations with us</h3>
        <p className="text-gray-500 font-semibold text-justify">Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat aliquip commodo ipsum officia in Lorem commodo aliquip dolore. Nisi domip excepteur commodo ea nostrud mollit.</p>
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
    
    <section className="membership">
    <h2 className="text-center py-3 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Our Membership</h2>

    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
    <Image src="/Biman.png" alt="about hero" width={200} height={100}/> 
    <Image src="/haab.jpeg" alt="about hero" width={200} height={200}/> 
    <Image src="/iata.png" alt="about hero" width={200} height={200}/> 
    </div>
    </section>
    <section className="contactus py-10">
    <h2 className="text-center py-4 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Contact Us</h2>

    <div className="flex lg:mx-[80px] xl:mx-[180px] xl:ml-[350px] mx-[30px] justify-between flex-wrap py-5 gap-5">
    <div className="md:w-[67%] w-[100%]">
        <h3 className="text-3xl font-semibold py-4">Do you have any query? Contact with us to get any any support.</h3>
        <p className="text-2xl font-bold py-2 text-[#8b3eea]">Leave us a message</p>

        <form className="
        gap-y-2 gap-2">
          <div className="flex gap-3 w-[100%] mb-4"><input className="w-[48%] p-3 border-dashed border-2 focus:border-dashed border-indigo-600" type="text" placeholder="First name"/>
          <input className="w-[48%] p-3 border-dashed border-2 border-indigo-600" type="text" placeholder="Email Address"/></div>
          <div className="flex gap-3 w-[100%]"> <textarea className="w-full p-3 border-dashed border-2 border-indigo-600 mr-3" rows='3'  placeholder="massege"/></div>
          <div>
            <button type="submit" className="px-6 py-2 text-xl font-semibold border-[#8b3eea] border-2 my-2 flex justify-center hover:bg-[#8b3eea] hover:text-white">Send Massege</button>
          </div>
        </form>
      </div>
   
  
    <div className="md:w-[30%] w-[100%] flex md:flex-col gap-x-2 flex-col">
      <div className="  ">
        <h3 className="text-2xl font-semibold md:py-4">Contact details</h3>
        <div className="py-2 md:space-y-1">
        <p className="text-xl text-gray-600 font-semibold">Help line</p>
        <p className="text-[#8b3eea] md:text-2xl font-semibold">+880 1711-561321</p>
        </div>
        <div className="py-2 md:space-y-1">
        <p className="text-xl text-gray-600 font-semibold">Support Mail</p>
        <p className="text-[#8b3eea] md:text-2xl font-semibold">azizabbas2116@gmail.com</p>
        </div>
        <div className="py-2 md:space-y-1">
        <p className="text-xl font-semibold">Contact hour</p>
        <p className="text-[#8b3eea] md:text-2xl font-semibold">Mon-Sun : 24 hours</p>
        </div>
      </div>
      <div className="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.395272691448!2d90.4190038!3d23.73328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ef5ba1e8d5%3A0x225dcc5ebf28f844!2sjomidar%20palace!5e0!3m2!1sen!2sbd!4v1688991304815!5m2!1sen!2sbd" width="300" height="250" className="border-none w-[380px] sm:w-[280px] mt-3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>

    </section>

    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <button href="https://flowbite.com/" className="flex items-center">
                  
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AZIZ ABBAS TRADE</span>
              </button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <button href="https://flowbite.com/" className="hover:underline">Flowbite</button>
                      </li>
                      <li>
                          <button href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</button>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <button href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</button>
                      </li>
                      <li>
                          <button href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</button>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <button href="#" className="hover:underline">Privacy Policy</button>
                      </li>
                      <li>
                          <button href="#" className="hover:underline">Terms &amp; Conditions</button>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <button className="hover:underline">Aziz Abbas Trade</button>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <button href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </button>
              <button href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </button>
              <button href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </button>
              <button href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </button>
              <button href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </button>
          </div>
      </div>
    </div>
</footer>
    </div>


  )
}
