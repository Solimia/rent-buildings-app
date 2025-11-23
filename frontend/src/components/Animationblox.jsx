import React, { useContext, useEffect, useState } from 'react'
import "./Animationblox.css"
import MotionDiv from './MotionDiv'
import FilterMenu from './FilterMenu.jsx'
import FilterBlok from './FilterBlok.jsx'
import FilterMenu2 from './FilterMenu2.jsx'
import SearchComponent from './SearchComponent.jsx'
import { CounterContext } from '../context/counter_context.jsx'
import axios from 'axios'
export default function Animationblox() {
    const { contheme } = useContext(CounterContext);
    const [data, setData] = useState(null);


    useEffect(() => {
        document.documentElement.dataset.theme = contheme;
    }, [contheme]);

    async function fetchData() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/Houses`);
        const data = response.data;
        console.log("Fetched data:", data);
        setData(data);
    }

    // fetchData();
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className='SideBarWrapItemParent'>
                <FilterBlok></FilterBlok>
                <div className="SideBarWrapItem">

                    <SearchComponent></SearchComponent>
                    <FilterMenu></FilterMenu>
                    <FilterMenu2 Title={"Bedrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>

                </div>
            </div>


            <div className="RowWrapper">
                {/* 
                <div className="SideBarWrapItem">
                    
                </div> */}

                <div className="SideBarWrapItemOpacity">
                    <FilterBlok></FilterBlok>
                    <SearchComponent></SearchComponent>
                    <FilterMenu></FilterMenu>
                    <FilterMenu2 Title={"Bedrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
                </div>

                <div className='Animationblox-Container-Flex'>
                    {
                        data && data.map((item) => (
                            <MotionDiv key={item.id} mainimgUrl={item.mainimgUrl} pricePerNight={item.pricePerNight}
                                address={item.address} ratingf={item.rating} title={item.title}></MotionDiv>
                        ))
                    }
                </div>

            </div >



        </>
    )
}
