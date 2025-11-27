import { createContext, useState } from "react"
import { themechanger } from "../services/themech.service";


const initialState =
{
    contheme: themechanger.getTheme(),
    setconTheme: () => { },
    filterdata: false,
    setFilterData: () => { },
    CategoryId: "All",
    setCategoryId: () => { },
    BedroomsCount: "Any",
    setBedroomsCount: () => { },
    BathroomsCount: "Any",
    setBathroomsCount: () => { },
    Rating: "Any",
    setRating: () => { },
}

export const CounterContext = createContext(initialState);


export const CounterProvider = ({ children }) => {
    const [contheme, setconTheme] = useState(initialState.contheme);
    const [filterdata, setFilterData] = useState(initialState.filterdata);
    const [CategoryId, setCategoryId] = useState(initialState.CategoryId);
    const [BedroomsCount, setBedroomsCount] = useState(initialState.BedroomsCount);
    const [BathroomsCount, setBathroomsCount] = useState(initialState.BathroomsCount);
    const [Rating, setRating] = useState(initialState.Rating);






    return (
        <CounterContext.Provider value={{ contheme, setconTheme ,filterdata,setFilterData, CategoryId,setCategoryId,BedroomsCount,setBedroomsCount,BathroomsCount,setBathroomsCount,Rating,setRating}}>
            {children}
        </CounterContext.Provider>

    );
}