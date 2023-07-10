

import React, { useState } from 'react'
import Destinations from './destination'
const uniqueCountry = [
    ...new Set(Destinations.map((country)=>{
      return country.country
    }))
  ]
const DestinationCountry = ({setCountryData}) => {
    const [click, setClick] = useState(false);
    const [menuButton] = useState(uniqueCountry);
    const filterCountry = (country)=>{
        const updatedCountry = Destinations.filter((curCountry)=>{

            return curCountry.country === country
        })
        setCountryData(updatedCountry)
    }
  return (
    <>
    {
        menuButton.map((curelm)=>{
        return (<button className="md:py-3 md:px-9 px-5 py-1 font-semibold rounded text-lg xl:text-xl border-[#8b3eea] border my-2 md:m-1 hover:bg-[#8b3eea] hover:text-white text-[#8b3eea]" key={curelm} onClick={()=> filterCountry(curelm)}>{curelm}</button>
        )
        })
    }</>
  )
}

export default DestinationCountry