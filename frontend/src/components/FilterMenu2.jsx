import React, { useEffect, useRef, useState } from "react";
import "./FilterMenu.css";
import { div, label } from "framer-motion/client";

export default function FilterMenu2({ Title }) {
    const [selected, setSelected] = useState("1");
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderBGRef = useRef();
    const options = [
        { label: "1" },
        { label: "2" },
        { label: "3" },
        { label: "4" },
        { label: "5" },


    ];
 
    useEffect(() => {
        console.log("Active index:", currentIndex);
    }, [currentIndex]);

    return (
        <label className="label-level">
            <p>{Title}</p>
            <div className="background-group-div">
                <div className="button-group">

                    <div

                        
                        className="slider-bg"
                        style={{
                            transform: `translateX(${currentIndex * 100}%)`,
                            width: `${100 / options.length}%`,
                        }}
                    ></div>

                    {options.map(({ label }, idx) => (
                        <button
                            key={label}
                            onClick={() => {
                                setSelected(label);
                                setCurrentIndex(idx);
                            }}
                            className={`radio-btn ${label === selected ? "active" : ""}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </label>


    );
}
