import React from "react";
import star from "../images/star.png"

function Card({coverImg:img,stats,title,price,location,openSpots}){
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={img} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">USA</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
            
        </div>
    )
}

export default Card;