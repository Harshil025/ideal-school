import React, { useRef } from 'react'
import  {useState ,useEffect} from 'react';
import Popup1 from './Popup1';

function Popup2() {


   
    const [timedPopup, setTimedPopup] =  useState(false);
  
     useEffect ( () => {
  setTimeout ( () => {
       setTimedPopup(true);
     }, 7000);
     } ,[]) ;


     
  return (
    <div className="App">
     <Popup1 trigger ={timedPopup } setTrigger ={setTimedPopup}>
    
     </Popup1>

     </div>
  )
}

export default Popup2