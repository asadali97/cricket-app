import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';


import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

const News = (props) => {

  const [search, setSearch] = useState("");
  const [result, setResult] = useState(props.result);
  const [filterInfo, setFilterinfo] = useState(props.result);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  useEffect(() => {
    setResult(props.result);
    setFilterinfo(props.result);
  }, [props.result]);

  useEffect(() => {
      setFilterinfo( result.filter((info) =>
          info.title.length >= 0 &&     
            info.title.toLowerCase().includes(search.length >= 0 && search.toLowerCase())
        ))
      //console.log(temp);
  }, [search]);

  useEffect(() =>{
    startDate != null && endDate != null &&
    setFilterinfo(result.filter((info) =>
    Date.parse(info.created_at) >= startDate && Date.parse(info.created_at) <= endDate
))   ;


     //console.log(res);
   },[startDate,endDate]);


        return(
          <>
            <div class="container">
              <div class="container ">
                <div>
                    <input type="text" class="form-control" 
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search here..."/><br/>
                </div>  
                <label class="pr-2">  Filter by Date:  </label>
                <div class="d-inline-flex pb-3 pr-5 mr-5 w-75 text-dark text-left">
                        <DatePicker
                          class="w-25"
                          placeholderText="   From..."
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="dd/MM/yyyy"/>

                        <DatePicker
                          placeholderText="   To..."
                          selected={endDate}
                          onChange={date => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          dateFormat="dd/MM/yyyy"/><br/>
                  </div>
              { 
              filterInfo.length >= 0 && filterInfo.map(con => (
                <div class="container pb-2 pt-2 border bg-light">
                    <Link to={"/detail/news/" + con.id}>
                        <h4 class="vw-25 text-dark text-left">{con.title}</h4>
                    </Link>
                    <Link to={"/detail/news/" + con.id}>
                    <img src={con.image} 
                    class="rounded mx-auto d-block img-thumbnail w-75 h-50" 
                    alt="Responsive image" />
                    </Link>
                </div>            
                ))}
              </div>
            
            </div>
            <footer class="page-footer font-small bg-info">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="" class="text-light" > Cricket Info </a>
            </div>
            </footer>
          </>
        )
}
export default News;