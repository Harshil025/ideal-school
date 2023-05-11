import React ,{useState} from 'react';
import swal from 'sweetalert';
import ideal from "../images/ideal.png";

function Popup1 (props) {

    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        subject:'',
        msg:'', 
      });
    
    
      const InputEvent =(event) =>{
        const { name, value }= event.target;
    
        setData((preval) =>{
          return{
            ...preval,
            [name] :value, 
          }
        })
    
      }


       //connect with firwbase
 const  formSubmit = async (e) =>{
    e.preventDefault();
    

const { fullname, phone, email, subject, msg } = data; {
const res = fetch(
  "https://ideal-school-data-default-rtdb.firebaseio.com/userDataRecords1.json",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullname,
      phone,
      email,
      subject,
      msg,
    }),
  }
);

if (res) {
  setData({
   fullname:'',
   phone:'',
   email:'',
   subject:'',
   msg:'', 
  });
  swal("Thank You !", "we will contact soon!", "success");
} else {
  alert("plz fill the data");
}
} 
}
 
    return (props.trigger) ? (

      <div className='pop1'>
      <div className='pop2'>

      <div className='pop3'>
      <div className='close' onClick={ () => props.setTrigger(false)}>
      <i class="fa-solid fa-xmark"></i>
      </div>
      <div className='pop4'>
      <img
                        className="pop_img"
                        src={ideal}
                        alt="home img"
                      />    
         
       </div>
      </div>

     
      <div className=' container-fluid'>
                <div className='row'>
               <div className='col-11 mx-auto'>
          
               <div className="contact-rightside   my-5">
               <form onSubmit={formSubmit} >

              <div className='pop_input'>

              <div className="  contact-input-feild1 col-md-6 mb-3  ">
                <input
                  type="text"
                  className="form-control2"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder=" Enter your name"
                  required
                />
              </div>

              <div className=" contact-input-feild1 col-md-6  mb-3">
                <input
                  type="number"
                  className="form-control2"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              </div>


              <div className="col-md-12 mb-3">
                <input 
                  type="email"
                  className="form-control1 "
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className="form-control1"
                  id="exampleFormControlInput1"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                  placeholder=" Enter your Subject"
                  required
                />
              </div>
              <div className="mb-3 col-md-12 ">
                <textarea
                  className="form-control1"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder=" Enter your Message"
                  required
                ></textarea>
              </div>

              <div className="submit2 col-12">
    <button className="btn btn-outline-primary" type="submit">Send Message</button>
  </div>

            </form>
            </div>



          
            </div>
            </div>
            </div>
      { props.children }
      </div>
      </div>


    ) : "";  
}

export default Popup1;
