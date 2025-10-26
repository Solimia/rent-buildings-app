import React, { useEffect, useRef } from 'react'
import "./Animationblox.css"
import { motion } from 'framer-motion'
import MotionDiv from './MotionDiv'
import MotionDivCent from './MotionDivCent'
import MotionDivRight from './MotionDivRight'
export default function Animationblox() {
    // const RightRef = useRef();
    // useEffect(() => {
    //     const handleScroll2 = () => {

    //         const maxScroll = document.body.scrollHeight - window.innerHeight;

    //         console.log("maxScroll");
    //         const scrollFraction = window.scrollY / 150;
    //         const scrollFraction2 = window.scrollY / maxScroll / 2;
    //         const scrollFraction3 = window.scrollY / maxScroll / 4;
    //         console.log("scrollFraction", scrollFraction);
    //         const RightR = RightRef.current;
    //         if (RightR) {
    //             RightR.style.transform = `rotate(${50 + ((scrollFraction * -50) < -50 ? -50 : (scrollFraction * -50))}deg) 
    //             translateX(${-200 + scrollFraction * 200}px)`;



    //         }
    //     }

    //     window.addEventListener("scroll", handleScroll2);


    //     return () => {
    //         window.addEventListener("scroll", handleScroll2);

    //     }

    // }, []);
    return (
        <>
        <div className='Div23'></div>
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



        </>
    )
}
