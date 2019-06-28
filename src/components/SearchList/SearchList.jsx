import React from 'react'
import search from '../SVG/search.svg'
const SearchList = () =>{
    return(
        <div className="group-search">
            <label htmlFor="" ><img src={search} height="20px" alt=""/></label>
            <input className="input" type="search" placeholder="Search" aria-label="Search"/>      
        </div>
    )
}
export default SearchList;