import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Hero from '../components/homepage/Hero'
import City from '../components/homepage/City'
import ServSlider from '../components/homepage/ServSlider'

function HomePage() {
  return (
      <>
         
          <Hero />
          <h1 style={{textAlign:"center", color:"#45171d"}}>اختر مدينتك</h1>
          <City />
          <h1 style={{textAlign:"center",color:"#45171d"}}> اهم خدمات بوقي</h1>
          <ServSlider />
          
      </>
  )
}

export default HomePage
