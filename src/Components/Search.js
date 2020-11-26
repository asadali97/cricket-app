import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [search, setSearch]=useState();
    const [sfilter, setFilter]=useState();
    const [info, setInfo]=useState();

    const myFunc = (value) => {
      //  setSearch(value);
      let temp = props.result.filter((res) => {
        res.title.toLowerCase().includes(value.toLowerCase)
        });

     
    }

   
    return(
        <>
        <input type="text" 
        onChange={(e) => myFunc(e.target.value)}
        placeholder="Search here..."/>
        {/* {
            sfilter.map((res) => {
                <>
                {res.title}<br/>
                <img src={res.image}/>
                </>
            })
        } */}
        </>
    )
}
export default Search;