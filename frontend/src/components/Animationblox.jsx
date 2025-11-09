import React, { useContext, useEffect} from 'react'
import "./Animationblox.css"
import MotionDiv from './MotionDiv'
import FilterMenu from './FilterMenu.jsx'
import FilterBlok from './FilterBlok.jsx'
import FilterMenu2 from './FilterMenu2.jsx'
import SearchComponent from './SearchComponent.jsx'
import { CounterContext } from '../context/counter_context.jsx'
export default function Animationblox() {
    const { contheme } = useContext(CounterContext);

    useEffect(() => {
        document.documentElement.dataset.theme = contheme;
    }, [contheme]);

    return (
        <>
            <div className="RowWrapper">

                <div className="SideBarWrapItem">
                    <FilterBlok></FilterBlok>
                    <SearchComponent></SearchComponent>
                    <FilterMenu></FilterMenu>
                    <FilterMenu2 Title={"Bedrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
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
