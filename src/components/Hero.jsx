import React from "react"
import gridImage from "../images/photo-grid.png"

function Hero(){
    return(
        <div className="hero">
            <img src={gridImage} className= "hero--gridImg"/>

            <div className="hero--info">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>

            </div>
        </div>
    )
}

export default Hero