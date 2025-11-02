import React, { useEffect, useRef, useState } from 'react'
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
export default function Animationblox() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    const text = "Test Text"
    return (
        <>
            {/* <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className='dsada'
            ></button> */}

            <div className='Div23'>
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
                <div className='dLayer1'></div>
                <div className='dLayer2'></div>
                <div className='dLayer3'></div>

            </div>
            <div className='Div23'>
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
            </div>
            <div className="RowWrapper">
                <div className='SideBarFilterWrap'>
                    <div className="SideBarWrapItem">
                        <FilterBlok></FilterBlok>
                        <FilterMenu></FilterMenu>
                        <FilterMenu2 Title={"Bedrooms"}></FilterMenu2>
                        <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>



                        {/* <SliderFile></SliderFile> */}

                    </div>


                </div>

                <div className='Animationblox-Container'>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDivCent></MotionDivCent>
                        <MotionDivRight></MotionDivRight>

                    </div>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDivCent></MotionDivCent>
                        <MotionDivRight></MotionDivRight>

                    </div>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDivCent></MotionDivCent>
                        <MotionDivRight></MotionDivRight>

                    </div>
                    <div className='SecondCol'>
                        <MotionDiv></MotionDiv>
                        <MotionDivCent></MotionDivCent>
                        <MotionDivRight></MotionDivRight>

                    </div>
                </div>

            </div>



        </>
    )
}
