import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
//IMAGES
import atlethic from "./images/athletic.png"


function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Card img={atlethic}
      rating={5.0}
      amountReview={6}
      country="USA"
      description="Life lessons with Katie Zaferes"
      price= {136}
      />

    </>
  )
}

export default App