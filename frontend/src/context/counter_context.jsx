import { createContext, useState } from "react"
import { themechanger } from "../services/themech.service";


const initialState =
{
    contheme: themechanger.getTheme(),
    setconTheme: () => { }
}

export const CounterContext = createContext(initialState);


export const CounterProvider = ({ children }) => {
    const [contheme, setconTheme] = useState(initialState.contheme);





    return (
        <CounterContext.Provider value={{ contheme, setconTheme }}>
            {children}
        </CounterContext.Provider>

    );
}