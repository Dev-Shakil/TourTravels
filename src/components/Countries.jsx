import Image from 'next/image'
import React from 'react'

const Countries = () => {

  const country=[
    {
        name:"Saudia Arabia",
        url:"/ksa1.png"
    },
    {
        name:"Dubai",
        url:"/dubai1.jpg"
    },
    {
        name:"Qatar",
        url:"/qatar.png"
    },
    {
        name:"Oman",
        url:"/oman1.jpg"
    },
    {
        name:"Kuwait",
        url:"/kuwait.jpg"
    },
    {
        name:"Bahrain",
        url:"/bahrain.jpg"
    },
    {
        name:"Malaysia",
        url:"/malaysia1.png"
    },
  ]
  return (
    <div className="flex flex-wrap justify-center items-center py-5 mx-10">
        {
            country.map((country ,ind)=>{
                return <>
                    <div className="text-center p-5 cursor-pointer ">
                    <Image src={country.url} width={200} height={100} alt="breakfast" className="card-image h-[120px] w-[120px] md:h-[200px] md:w-[200px] rounded-t-lg hover:opacity-50"/> 
                    <span className="pt-2 font-bold text-lg">{country.name}</span>
                    </div>
                </>
            })
        }
    </div>
  )
}

export default Countries