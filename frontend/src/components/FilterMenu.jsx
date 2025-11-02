import React, { useEffect, useState } from "react";
import "./FilterMenu.css";
import { div, label } from "framer-motion/client";

export default function FilterMenu() {
    const [selected, setSelected] = useState("house");
    const [currentIndex, setCurrentIndex] = useState(0);

    const options = [
        { id: "house", label: "House" },
        { id: "condo", label: "Condo" },
        { id: "other", label: "Other" },
    ];

    useEffect(() => {
        console.log("Active index:", currentIndex);
    }, [currentIndex]);

    return (
        <label className="label-level">
            <p>Building type</p>
            <div className="background-group-div">
                <div className="button-group">

                    <div
                        
                        className="slider-bg"
                        style={{
                            transform: `translateX(${currentIndex * 100}%)`,
                            width: `${100 / options.length}%` // 100% parent width / [].lenght,
                        }}
                    ></div>

                    {options.map(({ id, label }, idx) => (
                        <button
                            key={id}
                            onClick={() => {
                                setSelected(id);
                                setCurrentIndex(idx);
                            }}
                            className={`radio-btn ${selected === id ? "active" : ""}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </label>


    );
}
