import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Header.css"
import sunD from '../assets/img/sun.png';
import nightD from '../assets/img/nightD.png';
import Icon from '../assets/img/icon.png';
import IconD from '../assets/img/iconD.png';
import { setStyle } from 'framer-motion';
import { themechanger } from '../services/themech.service';
import { CounterContext } from '../context/counter_context';
export default function Header() {

    const Dark = 'dark';
    const Light = 'light';
    const { contheme, setconTheme } = useContext(CounterContext);

    useEffect(() => {
        themechanger.setTheme(contheme);
        console.log(contheme)
        document.documentElement.dataset.theme = contheme;
    }, [contheme])

    function setThemes() {
        // if (themechanger.getTheme() == Light)
        //     themechanger.setTheme(Dark);
        // else
        //     themechanger.setTheme(Light);
        // console.log(themechanger.getTheme())
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

                    {/* <div className='SearchValue'>
                        <input className='classLight' type="text" />

                        <div className='CircleIconLight'>
                            <div id='searchIcon'></div>
                        </div>
                    </div> */}
                    <div className='ProfileIconM'>
                        <div className='IconDevDB' style={{ backgroundImage: `${contheme === Light ? Icon : IconD}` }}></div>
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
                        <div onClick={() => setParams()} className='ProfileIconM'>
                            <div className='InnerIcon'>
                                <p>Rubel Maksym</p>

                            </div>
                            <div className='ProfileImage'></div>
                        </div>


                        <div ref={ProfileRef} className='InnerBlock'>
                            <div className='CInner'>
                                <div className='InnerIcon-true'>
                                    <p>Settings</p>

                                </div>
                                <div className={contheme !== Light ? 'settingIcon' : 'settingIcon1'}></div>

                            </div>
                            <div onClick={() => setThemes()} className='CInner'>
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
                            </div>
                            <div className='CInner'>
                                <div className='InnerIcon-true'>
                                    <p>Exit</p>

                                </div>
                                <div className={contheme !== Light ? 'LogIcon' : 'LogIcon1'}></div>
                            </div>
                        </div>


                    </div>



                </div >

            </div >


        </>

    )
}
