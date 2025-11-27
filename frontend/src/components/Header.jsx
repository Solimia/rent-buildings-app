import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Header.css"
import sunD from '../assets/img/sun.png';
import nightD from '../assets/img/nightD.png';
import Icon from '../assets/img/icon.png';
import IconD from '../assets/img/iconD.png';
import { themechanger } from '../services/themech.service';
import { CounterContext } from '../context/counter_context';
import { u } from 'framer-motion/client';
import { ismobile } from '../services/ismobile.service';
export default function Header() {

    const Dark = 'dark';
    const Light = 'light';
    const { contheme, setconTheme, setFilterData } = useContext(CounterContext);
    
    const isMobile = ismobile.useIsMobile();
    useEffect(() => {
        themechanger.setTheme(contheme);
        console.log(contheme)
        document.documentElement.dataset.theme = contheme;
    }, [contheme])
    function FilterRide() {
        if (isMobile) {
            setFilterData((prev) => !prev);

        }
    }
    useEffect(() => {
        if (!isMobile) {
            setFilterData(false);

        }
    }, [isMobile]);
    function setThemes() {
        setconTheme((prev) => (prev === Light ? Dark : Light));
    }
    const ProfileRef = useRef();
    function setParams() {
        if (ProfileRef.current == null)
            return

        const ProfileDiv = ProfileRef.current;
        if (ProfileDiv.style.opacity == "0") {
            ProfileDiv.style.height = "min-content";
            ProfileDiv.style.opacity = "1";
            ProfileDiv.style.pointerEvents = "auto";
        }
        else {
            ProfileDiv.style.height = "0";
            ProfileDiv.style.opacity = "0";
            ProfileDiv.style.pointerEvents = "none";
        }



    }
    return (
        <>
            <div className='HeaderMenu-class'>
                <div className='RightMenu-div'>
                    <div className='ProfileIconM'>
                        <div className='IconDevDB' style={{ backgroundImage: `${contheme === Light ? Icon : IconD}` }}></div>
                        <button className='CircleIcon' style={{display : isMobile ? 'flex ' : 'none'}} onClick={() => FilterRide()}>Filter</button>
                        <div className='InnerIconT'>
                            <p id='RentP'>Rent  </p>
                            <p id='houseP'>house</p>

                        </div>
                    </div>
                </div>
                <div className='RightMenu-div'>

                    <div className='CircleIcon'>
                        <div id={`${contheme === Light ? "basketIcon1" : "basketIcon"}`}></div>

                    </div>
                    <div className='CircleIcon'>
                        <div id='heartIcon' ></div>
                    </div>

                    <div className='ProfileIcon'>
                        <button onClick={() => setParams()} className='ProfileIconM'>
                            <div className='InnerIcon'>
                                <p>Rubel Maksym</p>

                            </div>
                            <div className='ProfileImage'></div>
                        </button>


                        <div ref={ProfileRef} className='InnerBlock'>
                            <div className='CInner'>
                                <div className='InnerIcon-true'>
                                    <p>Settings</p>

                                </div>
                                <div className={contheme === Light ? 'settingIcon1' : 'settingIcon'}></div>

                            </div>
                            <button onClick={() => setThemes()} className='CInner'>
                                <div className='InnerIcon-true'>
                                    <p>Theme</p>

                                </div>
                                <div id='ThemeIcon'
                                    style={{
                                        backgroundImage: `url(${contheme === Light
                                            ? sunD
                                            : nightD
                                            })`,
                                    }}
                                ></div>
                            </button>
                            <div className='CInner'>
                                <div className='InnerIcon-true'>
                                    <p>Exit</p>

                                </div>
                                <div className={contheme === Light ? 'LogIcon1' : 'LogIcon'}></div>
                            </div>
                        </div>


                    </div>



                </div >

            </div >


        </>

    )
}
