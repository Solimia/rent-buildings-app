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
    searchP: "",
    setsearchP: () => { },
}

export const CounterContext = createContext(initialState);


export const CounterProvider = ({ children }) => {
    const [contheme, setconTheme] = useState(initialState.contheme);
    const [filterdata, setFilterData] = useState(initialState.filterdata);
    const [CategoryId, setCategoryId] = useState(initialState.CategoryId);
    const [BedroomsCount, setBedroomsCount] = useState(initialState.BedroomsCount);
    const [BathroomsCount, setBathroomsCount] = useState(initialState.BathroomsCount);
    const [searchP, setsearchP] = useState(initialState.searchP);






    return (
        <CounterContext.Provider value={{ contheme, setconTheme ,filterdata,setFilterData, CategoryId,setCategoryId,BedroomsCount,setBedroomsCount,BathroomsCount,setBathroomsCount,searchP,setsearchP}}>
            {children}
        </CounterContext.Provider>

    );
}