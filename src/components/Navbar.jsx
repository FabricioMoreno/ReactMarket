import React from "react";
import airbnbLogo from "../images/airbnb-logo.png"

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar--header">
                <img src={airbnbLogo}/>
                
            </div>
        </nav>
    )
}

export default Navbar