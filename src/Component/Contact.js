import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import  hand from "../images/hand1.jpg";
import swal from 'sweetalert';
import Footer from './Footer';



const Contact = () => {

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
     "https://idealschoolofskill-default-rtdb.firebaseio.com/userDataRecords.json",
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


  
  return( 
    <>
    <div className="card  text-white">
      <img className="contact_img"
          src={hand}
          alt="home img"  />
    <div className="contact3">
      <div className='contact1'>
      <h1> Contact us</h1>
    <p className='contact2'>  <span> <NavLink  to="/"> Home <i class="fa fa-chevron-right"></i> </NavLink></span> Contact US <i class="fa fa-chevron-right"></i></p>
      </div>            
    </div>
  </div>
  

  {/* Contact */}
  <div className='contact5'>

  <div className='contact_info d-flex container '>

     
    <div className='container-fluid'>
      <div className='row '>
         <div className='col-lg-10 offset-lg-1'>
         <div> <i class="fa-regular fa-address-book"></i> Contact us </div>
      <h3 class="item--title st-default " data-wow-delay="ms">
       <span class="sp-main">
         If need any info please 
         contact <b>us!</b>
       </span>
       </h3>
       
           {/* Address */}
           <div className='contact_item  d-flex justify-content-start  '>
           <div className='icon'>
           <i className="fa-solid fa-house-user"></i></div>
           <div className='contact_info_content'>
           <div className='contact_info_title'>
           <h4>Address :</h4>
          <p> 137,Swagat Soc.,BRTS Road Simadanaka, Surat </p>
              </div>
              </div>
              </div>

              {/* mobile */}

              <div className='contact_item  d-flex justify-content-start  '>
              <div className='icon'>
              <i className="fa-solid fa-phone"></i></div>
           <div className='contact_info_content'>
           <div className='contact_info_title'>
           <h4>Call for help:</h4>
           <a herf="tel:+91 83474 22792 "><p>+91 83474 22792</p></a>
           <a herf="tel:+91 79901 51617"><p>+91 79901 51617</p></a>                        
              </div>
              </div>
              </div>
              {/* email */}
              <div className='contact_item  d-flex justify-content-start  '>
                <div className='icon'>
              <i className="fa fa-envelope"></i></div>
           <div className='contact_info_content'>
           <div className='contact_info_title'>
           <h4>Mail for information:</h4>
          <a herf="mailto:ideal001@gmail.com"><p> ideal001@gmail.com</p></a>
              </div>
              </div>
              </div>
         </div>
      </div>
    </div>
 
    {/* conctus from */}
          <div className="contact-rightside col-12 col-lg-6 my-5">
            <form onSubmit={formSubmit}>
              <div className='contact_input'>
              <div className="  contact-input-feild mb-3  ">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder=" Enter your name"
                  required
                />
              </div>
              <div className=" contact-input-feild width-  mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              </div>

              <div className="mb-3">
                <input 
                  type="email"
                  className="form-control "
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                  placeholder=" Enter your Subject"
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder=" Enter your Message"
                  required
                ></textarea>
              </div>

              <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Send Message</button>
  </div>
            </form>
            
          </div>
        </div>
        </div>
        <Footer/>
  </>)
}

export default Contact;