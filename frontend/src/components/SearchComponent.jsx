import React, { useContext } from 'react'
import { CounterContext } from '../context/counter_context';

export default function SearchComponent() {
    const {searchP,setsearchP} = useContext(CounterContext);


    return (
        <label className="label-level1">
            Search
            <div className='SearchValue'>
                <input placeholder='Search' value={searchP}  
                onChange={(e) => setsearchP(e.target.value)}
                className='classLight' type="text" />

             
             
            </div>
        </label>
    )
}
