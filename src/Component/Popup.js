
import Popup1 from './Popup1';
import  {useState ,useEffect} from 'react';

function Popup() {

  const [buttonPopup, setButtonPopup] =  useState(false);
  
  

   
   



  return (
    <div className="">
            <div className='popup-btn'>
             <button onClick={() => setButtonPopup(true)}>Contact Us <i className="fa fa-angle-right"></i></button>
             </div>
                        <Popup1 trigger ={buttonPopup} setTrigger ={setButtonPopup}>
               
              </Popup1>


             
            
    </div>
  );
}

export default Popup;