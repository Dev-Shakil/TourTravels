'use client'
import React, { useState } from 'react'

const Contact = () => {
    
    
  
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const data = {
        fname:String(e.target.fname.value),
        lname:String(e.target.lname.value),
        email:String(e.target.email.value),
        phone:String(e.target.phone.value),
        text:String(e.target.text.value)
      }
     console.log(data)
     
     console.log("hello world")
     const response = await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",

      },
      body:JSON.stringify(data),
     });
     console.log(response)
     if(response.ok) {
      console.log("Massege Sent Successfully");
        e.target.fname.value="";
        e.target.lname.value="";
        e.target.email.value="";
        e.target.phone.value="";
      e.target.text.value=""; 
     }
     if(!response.ok){
      console.log("Error On Sending Massege" )
     }
    }
  
  return (
    <section className="contactus py-10">
    <h2 className="text-center py-4 text-2xl font-semibold relative md:text-3xl text-[#8b3eea] lg:text-5xl  after:content-[''] after:absolute after:w-[190px]  after:h-[2px] after:bg-[#8b3eea] md:after:left-[39%] lg:after:left-[42%] xl:after:left-[44%] after:left-[36%]  after:bottom-[0px] my-5">Contact Us</h2>

    <div className="flex lg:mx-[80px] xl:mx-[180px] xl:ml-[150px] mx-[30px] justify-between flex-wrap py-5 gap-5">
    <div className="lg:w-[57%] w-[100%]  p-5  ">
        <h3 className="text-3xl font-semibold py-4">Do you have any query? Contact with us to get any any support.</h3>
        <p className="text-2xl font-bold py-2 text-[#8b3eea]">Leave us a message</p>

        <form className="
        gap-y-5 gap-2" onSubmit={handleSubmit}>
          <div className="flex gap-3 w-[100%] mb-4"><input className="w-[48%] p-3  border-2 focus:border-dashed border-indigo-600" required name="fname" type="text"  placeholder="First name"/>
          <input className="w-[48%] p-3  border-2 focus:border-dashed border-indigo-600 " required name="lname" type="text" placeholder="Last name"/>
          </div>
          <div className="flex gap-3 w-[100%] mb-4"><input className="w-[48%] p-3 border-2 border-indigo-600" type="text" name="email" required placeholder="Email Address"/>
          <input className="w-[48%] p-3 border-2 border-indigo-600" required type="text" name="phone" placeholder="Phone Number"/></div>


          <div className="flex gap-3 w-[100%]"> <textarea className="w-full p-3 border-2 border-indigo-600 md:mr-6 mr-3" rows='3' required name="text"  placeholder="massege"/></div>
          <div>
            <button type="submit" className="px-6 py-2 text-xl font-semibold border-[#8b3eea] border-2 my-2 flex justify-center hover:bg-[#8b3eea] hover:text-white">Send Massege</button>
          </div>
        </form>
      </div>
   
  
    <div className="lg:w-[40%] w-[100%] flex md:flex-col gap-x-2 flex-col shadow-2xl p-5 border border-[#8b3eea] ">
      <div className="  ">
        <h3 className="text-2xl font-semibold md:py-4">Contact details</h3>
        <div className="py-2 md:space-y-1">
        <p className="text-xl text-gray-600 font-semibold">Help line</p>
        <p className="text-[#8b3eea] md:text-xl font-semibold">+880 1711-561321</p>
        </div>
        <div className="py-2 md:space-y-1">
        <p className="text-xl text-gray-600 font-semibold">Support Mail</p>
        <p className="text-[#8b3eea] md:text-xl font-semibold">azizabbas2116@gmail.com</p>
        </div>
        <div className="py-2 md:space-y-1">
        <p className="text-xl font-semibold">Office Address</p>
        <p className="text-[#8b3eea] md:text-xl font-semibold ">Jomidar Palace, Room F-5 Inner Circuler Road, 291, Fakirapool Dhaka-1000 Banlgladesh</p>
        </div>
      </div>
      <div className="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.395272691448!2d90.4190038!3d23.73328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ef5ba1e8d5%3A0x225dcc5ebf28f844!2sjomidar%20palace!5e0!3m2!1sen!2sbd!4v1688991304815!5m2!1sen!2sbd" width="300" height="250" className="border-none w-[380px]  md:w-[550px] xl:w-[450px] mt-3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>

    </section>
  )
}

export default Contact