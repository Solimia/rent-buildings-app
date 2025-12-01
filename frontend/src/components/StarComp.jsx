import React from 'react'
import "./StarComp.css"
export default function StarComp({ rating }) {
    const roundedRating = Math.round(rating);
    return(
        <div className="star-rating-container">
           <p>{rating}</p>
            <div className="starfilled"/>
        </div>
    );
}
