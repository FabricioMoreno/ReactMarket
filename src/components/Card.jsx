import React from "react";
import star from "../images/Star.png"

function Card({img,rating,amountReview,country,description,price}){
    return(
        <div className="card">
            <img src={img} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{rating}</span>
                <span className="gray">({amountReview}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{description}</p>
            <p><span className="bold">From ${price}</span> / person</p>
            
        </div>
    )
}

export default Card;