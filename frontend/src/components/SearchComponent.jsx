import React from 'react'

export default function SearchComponent() {
    return (
        <label className="label-level1">
            <p> </p>
            <div className='SearchValue'>
                <input placeholder='Search' className='classLight' type="text" />

                <div className='CircleIconLight'>
                    <div id='searchIcon'></div>
                </div>
             
            </div>
        </label>
    )
}
