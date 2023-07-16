import React, { useState } from 'react'
import DestinationCountry from './DestinationCountry'
import DestinationCard from './DestinationCard'
import Destinations from './destination'

const Management = () => {
    const [countryData, setCountryData] = useState(Destinations)
  return (
    <section className="hot-deals py-8">
    <h2 className="text-center py-7 text-2xl font-semibold md:text-3xl text-[#8b3eea] lg:text-5xl">Meet The Team</h2>
  <div className="flex  bg-white shadow-[30px_35px_60px_15px_rgba(0,0,0,0.2)] my-2 mx-8 rounded justify-center p-4 md-m flex-wrap ">
  <DestinationCountry countryData={countryData} setCountryData={setCountryData}/>
  
  </div>
  <div className="flex mx-[80px] justify-center flex-wrap">
  <DestinationCard countryData={countryData}/>
  </div>
</section>
  )
}

export default Management