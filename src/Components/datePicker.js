import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import './data.css';
import "react-datepicker/dist/react-datepicker.css";

import {
  BrowserRouter as Router,
  Link, Route
} from "react-router-dom";
 
const Calender = (props) => {

    const [search, setSearch] = useState(props.result);
    const [filterInfo, setFilterinfo] = useState(props.result);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
      setSearch(props.result);
      setFilterinfo(props.result);
    }, [props.result]);

    useEffect(() =>{
     setFilterinfo(search.filter((info) =>
     Date.parse(info.created_at) >= startDate && Date.parse(info.created_at) <= endDate
))   ;

 
      //console.log(res);
    },[startDate,endDate]);
    
    return (
      <>
        <label>  From: </label>
        <DatePicker
          className="date"
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
        />
        <label>  To: </label>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
        />
        {
        filterInfo.map(con => (
        <div className="main">
            <Link className="link" to={"/detail/news/" + con.id}>
                <h1>{con.title}</h1>
            </Link>
            <img src={con.image} />
        </div>
      ))}   
      </>
    );
}
export default Calender;