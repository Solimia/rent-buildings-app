import React, { useContext, useEffect, useState } from "react";
import "./FilterMenu.css";
import { div, label } from "framer-motion/client";
import { CounterContext } from "../context/counter_context";

export default function FilterMenu() {
    const [selected, setSelected] = useState("all");
    const [currentIndex, setCurrentIndex] = useState(0);

    const {CategoryId,setCategoryId} = useContext(CounterContext);

    const options = [
        { id: "All", label: "All" },
        { id: "5", label: "Cabin" },
        { id: "4", label: "Villa" },
        { id: "2", label: "House" },
    ];

    useEffect(() => {
        console.log("Active index:", currentIndex);
    }, [currentIndex]);

    return (
        <label className="label-level1">
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
                                setCategoryId(id);
                                setCurrentIndex(idx);
                            }}
                            className={`radio-btn ${CategoryId === id ? "active" : ""}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </label>


    );
}
