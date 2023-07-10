import Image from 'next/image'
import React from 'react'

const DestinationCard = ({countryData}) => {
  return (
    <>
          {countryData.map((menu)=>{
            return(<>
        <div className="rounded-lg shadow-2xl md:w-[500px] bg-white m-3 relative  overflow-hidden">
            
                <div className=" transition duration-300 ease-in-out hover:scale-110">
             <Image src={menu.images} width={600} height={100} alt="breakfast" className="card-image h-[400px] md:w-[500px] rounded-t-lg"/></div>
             <div className="p-5">
                 <span className="text-2xl font-semibold">{menu.country}</span>
                 <h2 className="card-title">{menu.name}</h2>
                
                 </div>
            
         </div></>)
        })}
    </>
  )
}

export default DestinationCard