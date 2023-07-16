"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [resp,setResp] = useState(false);
    const [navbar, setNavbar] = useState(false)
      //navbar scroll changeBackground function
  const changeBackground = () => {
    
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
   
        
<nav className={`${navbar? "bg-[#8B3EEA]":""}` + "border-gray-200 bg-[#8B3EEA] dark:bg-gray-900   dark:border-gray-700 sticky top-0 z-50"}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center">
        
        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">AZIZ ABBAS TRADE</span>
    </Link>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" onClick={()=>setResp(!resp)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`md:block w-full md:w-auto ${resp ? 'block' : 'hidden'}`} id="navbar-multi-level">
      <ul className= "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 text-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <Link href="/">
        <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-white text-lg duration-500" >

          Home
        </li></Link>
        <Link href="/services">
        <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-white text-lg duration-500" >
          Services
        </li></Link>
        <Link href="/about">
        <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-white text-lg duration-500" >
          About
        </li></Link>
        <Link href="/contact">
        <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-white text-lg duration-500" >
          Contact
        </li></Link>
      </ul>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar