import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';


const Detail = (props) => {
   var a = useParams();
   const [ doc, setDoc ]  = useState();

    useEffect(() => {
        for (let i =0; i < props.result.length; i++) 
        {
            if (props.result[i].id === parseInt(a.id)) 
            {
                setDoc(props.result[i]);
            }
        }
    })

   return(
       doc ? <>
        <div class="container pb-3">
            <div class="container border bg-light pt-2">
                <h5 class="text-dark text-left">{doc.title}</h5>
                <div class=" text-secondary">
                {doc.by}<br/><br/></div>
                <img src={doc.image}
                class="rounded mx-auto d-block img-thumbnail w-75 h-50" 
                alt="Responsive image"/>
                <div className="para">
                <p class="d-flex flex-column text-dark text-left pt-3 mr-3" dangerouslySetInnerHTML={{__html: doc.body }}/>
                </div>
                </div>
            </div>
            <div className="space"></div>
        
            <footer className="footer" class="page-footer font-small bg-info">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="" class="text-light" > Cricket Info </a>
            </div>
            </footer> </> : "" 
   )
}
export default Detail;