import Image from 'next/image'
import React from 'react'

const ServicesCard = ({services}) => {
  return (
    <>
    {services.map((menu)=>{
      return(<>
  <div className="rounded-lg shadow-2xl border border-[#8b3eea] m-3 relative max-w-xs overflow-hidden text-center md:w-[50%]">
      
          <div className="max-w-xs transition duration-300  ease-in-out hover:scale-110 flex justify-center py-3">
       <Image src={menu.icon} width={200} height={100} alt="breakfast" className="card-image h-[70px] w-[70px] rounded-t-lg"/></div>
       <div className="p-5">
           <span className="text-2xl font-semibold">{menu.title}</span>
           <h2 className="pt-3 text-gray-500">{menu.desc}</h2>
          
           </div>
      
   </div></>)
  })}
</>
  )
}

export default ServicesCard