import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Animationblox.css"
import MotionDiv from './MotionDiv'
import FilterMenu from './FilterMenu.jsx'
import FilterBlok from './FilterBlok.jsx'
import FilterMenu2 from './FilterMenu2.jsx'
import SearchComponent from './SearchComponent.jsx'
import { CounterContext } from '../context/counter_context.jsx'
import axios from 'axios'
export default function Animationblox() {
    const { searchP,contheme, filterdata, setFilterData,CategoryId } = useContext(CounterContext);
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const PageRef = useRef(page);

    useEffect(() => {
        fetchData();

    }, [page]);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    function prevPage() {

        if (page <= 1) return;
        setPage((prevPage) => prevPage - 1);
        fetchData();
    }
    function nextPage() {

        if (page >= Math.ceil(data.totalCount / data.size)) return;
        setPage((prevPage) => prevPage + 1);

        fetchData();
    }
    useEffect(() => {
        document.documentElement.dataset.theme = contheme;
    }, [contheme]);
    useEffect(() => {
        if (!isMobile) {
            setFilterData(false);
        }
        console.log("isMobile changed:", isMobile);
        console.log("filterdata:", filterdata);
    }, [isMobile]);
    async function fetchData() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/Houses/GetHousePagination?page=${page}&size=12`);
        const data = response.data;
        setData(data);
    }
    const [BathRoomCount, setBathRoomCount] = useState("Any");
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [BedRoomCount, setBedRoomCount] = useState("Any");
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [Rating, setRating] = useState("Any");
    const [currentIndex3, setCurrentIndex3] = useState(0);
    // const [CategoryId, setCategoryId] = useState("Any");
    // const [currentIndex1, setCurrentIndex] = useState(0);
    async function fetchFileredData() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/Houses/GetHousePagination?page=${page}&size=12&CategoryId=${CategoryId}&BedroomsCountm=${BedRoomCount}&BathroomsCount=${BathRoomCount}&Rating=${Rating}&searchP=${searchP}`);
        const data = response.data;
        setData(data);
        console.log("filtered data:", data);
    }
    // fetchData();
    useEffect(() => {
        fetchData();
    }, []);


    const options = [
        { label: "Any" },
        { label: "1" },
        { label: "2" },
        { label: "3" },
        { label: "4+" },


    ];


    return (
        <>

            <div className='SideBarWrapItemParent' style={{ left: filterdata ? '-100%' : '0' }}>
                <FilterBlok></FilterBlok>
                <div className="SideBarWrapItem">

                    <SearchComponent></SearchComponent>
                    <FilterMenu></FilterMenu>
                    {/* <FilterMenu2 Title={"Bedrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Bathrooms"}></FilterMenu2>
                    <FilterMenu2 Title={"Rating"}></FilterMenu2> */}
                    <label className="label-level1">
                        <p>Bedrooms</p>
                        <div className="background-group-div">
                            <div className="button-group">

                                <div


                                    className="slider-bg"
                                    style={{
                                        transform: `translateX(${currentIndex2 * 100}%)`,
                                        width: `${100 / options.length}%`,
                                    }}
                                ></div>

                                {options.map(({ label }, idx) => (
                                    <button
                                        key={label}
                                        onClick={() => {
                                            setBedRoomCount(label);
                                            setCurrentIndex2(idx);
                                        }}
                                        className={`radio-btn ${label === BedRoomCount ? "active" : ""}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </label>
                    <label className="label-level1">
                        <p>Bathrooms</p>
                        <div className="background-group-div">
                            <div className="button-group">

                                <div


                                    className="slider-bg"
                                    style={{
                                        transform: `translateX(${currentIndex1 * 100}%)`,
                                        width: `${100 / options.length}%`,
                                    }}
                                ></div>

                                {options.map(({ label }, idx) => (
                                    <button
                                        key={label}
                                        onClick={() => {
                                            setBathRoomCount(label);
                                            setCurrentIndex1(idx);
                                        }}
                                        className={`radio-btn ${label === BathRoomCount ? "active" : ""}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </label>
                    <label className="label-level1">
                        <p>Rating</p>
                        <div className="background-group-div">
                            <div className="button-group">

                                <div


                                    className="slider-bg"
                                    style={{
                                        transform: `translateX(${currentIndex3 * 100}%)`,
                                        width: `${100 / options.length}%`,
                                    }}
                                ></div>

                                {options.map(({ label }, idx) => (
                                    <button
                                        key={label}
                                        onClick={() => {
                                            setRating(label);
                                            setCurrentIndex3(idx);
                                        }}
                                        className={`radio-btn ${label === Rating ? "active" : ""}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </label>
                </div>
                <button className='CloseFilterBtn' onClick={() => fetchFileredData()}>
                    <div className='CircleIconLight'>
                        <div id='searchIcon'></div>
                    </div>
                    <p>Search</p>
                </button>
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

                <div className='Animationblox-Container-Controll'>
                    <div className='Animationblox-Container-Flex'>
                        {
                            data && data.items.map((item) => (
                                <MotionDiv key={item.id} mainimgUrl={item.mainimgUrl} pricePerNight={item.pricePerNight}
                                    address={item.address} ratingf={item.rating} title={item.title} rooms={item.rooms} id={item.id}></MotionDiv>
                            ))
                        }
                    </div>
                    <div className='Pagination-Controll-ClassParent'>
                        <div className='PagePag-class'>
                            <button onClick={() => prevPage()} className='ArrowLBtn'>
                                <div className='ArrowL'></div>
                                <p>back</p>
                            </button>
                            <div className='PagePag-Numbers'>
                                <p>{page}</p>
                            </div>

                            <button onClick={() => nextPage()} className='ArrowLBtn'>
                                <p>next</p>
                                <div className='ArrowR'></div>
                            </button>

                        </div>
                    </div>

                </div>


            </div >



        </>
    )
}
