import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Animationblox.css"
import { motion } from 'framer-motion'
import MotionDiv from './MotionDiv'

import SliderFile from './SliderFile.jsx'
import MotionDivCent from './MotionDivCent'
import MotionDivRight from './MotionDivRight'
import FilterMenu from './FilterMenu.jsx'
import FilterBlok from './FilterBlok.jsx'
import FilterMenu2 from './FilterMenu2.jsx'
import { filter } from 'framer-motion/client'
import SearchComponent from './SearchComponent.jsx'
import { CounterContext } from '../context/counter_context.jsx'
export default function Animationblox() {
    const { contheme, setconTheme } = useContext(CounterContext);

    useEffect(() => {
        document.documentElement.dataset.theme = contheme;
    }, [contheme]);
    const text = "Test Text"
    return (
        <>
            {/* <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className='dsada'
            ></button> */}


            {/* <div className='Div23'>
                {
                    text.split('').map((char, index) => {
                        return <motion.span className='mSpan'
                            initial={{
                                opacity: 0,
                                filter: "blur(10px)"
                            }}
                            whileInView={{
                                opacity: 1,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.1 * index
                            }}
                            viewport={{

                                once: true
                            }}
                        >
                            {char === " " ? '\u00A0' : char}
                        </motion.span>

                    })

                }
            </div> */}

            <div className="RowWrapper">

                <div className="SideBarWrapItem">
                    <FilterBlok></FilterBlok>
                    <SearchComponent></SearchComponent>
                    <FilterMenu></FilterMenu>
                    <FilterMenu2 Title={"Bedrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
                    {/* <SliderFile></SliderFile> */}

                </div>




                <div className='Animationblox-Container'>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>

                    </div>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>


                    </div>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>


                    </div>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>
                        <MotionDiv></MotionDiv>


                    </div>
                </div>

            </div>



        </>
    )
}
