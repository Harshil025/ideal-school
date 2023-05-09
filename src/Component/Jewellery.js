import React from 'react';
import Footer from './Footer';
import CountUp from "react-countup";
import dimond from "../images/251001.jpg";
import man from "../images/man12.png";
import manual  from "../images/manual.jpg";
import matrix from '../images/matrix.jpg';
import  read from "../images/read.png";
import group1 from "../images/group1.jpg";
import group2 from "../images/group2.jpg";
import group3 from "../images/group3.jpg";
import { NavLink } from 'react-router-dom';

const Jewellery = () => {
  return (
    <>
    
    <div className="card ">
    <img className="section_img "
          src={dimond}
          alt="home img"  />
    <div className='section10'>


    <div className="section3  ">

   <div className='section41'>
     <h1>An exclusive learning journey for Jewellery Design</h1>
    <h5 className="section51"><span><i class="fa-solid fa-quote-left"></i></span> Our center offers group and personal lessons in Jewellery Design and other latest Design for all ages and levels of knowledge.</h5>

    <div className="section6"> 
      <NavLink to="/contact" >Get Started<i className="fa fa-angle-right"></i></NavLink>
      </div>

   </div>
                
      <div className='section1'>
      <img className="section1_img  d-flex "
          src={man}
          alt="home img"  />
      
      </div>  
      
      <div className='spoken2  '>
      <div class="spoken1 ">
<h2><span><CountUp start={0} end={9} duration={4} suffix="+" /></span></h2>
<h5>Years’ Experience</h5>
</div>

<div class="spoken1">
<h2><span><CountUp start={0} end={400} duration={4} suffix="+" /></span></h2>
<h5>Students Enrolled</h5>
</div>

<div class="spoken1">
<h2><span><CountUp start={0} end={10} duration={4} suffix="+" /></span></h2>
<h5>Certified Teachers</h5>
</div>


</div>   
</div>
<div className='spoken8'>
  
    <h2 className='text-center'> Jewellery Design</h2>
   <h5 className='text-center'> Improve your Designing skills</h5>
     

    <div className='j2'>

    <div className='j1'>
    <img 
                        className='manual_img'
                        src={manual} />
    <h4>Jewellery Design (Manual) </h4>

    <h6>Duration : 3/5 Month</h6>
    </div>

    <div className='j3'>
    
    <h4>Jewellery Designing courses  </h4>
    <p><i class="fa-solid fa-arrow-right"></i> Translate Tour </p>
    <p><i class="fa-solid fa-arrow-right"></i> Sharp </p>
    <p><i class="fa-solid fa-arrow-right"></i> Concepts Into  </p>
    <p><i class="fa-solid fa-arrow-right"></i> Delicate </p> 
    <p><i class="fa-solid fa-arrow-right"></i> Outcomes  </p>  

    </div>


    <div className='j1'>
    <img 
                        className='manual2_img'
                        src={matrix} />
    <h4>Jewellery Design (Matrix) </h4>

    <h6>Duration : 6/8 Month</h6>
    </div>
    </div>

   </div> 
</div>

 </div>
    

  <div className='spoken111'>

   <div className=' container-fluid'>
     <div className='row'>
       <div className='col-11 mx-auto'>

    <div className='spoken12'>
    <div>
     <h1 className='spoken13'>
       Our Gallery
     </h1>
     <div>
     <img 
      className='group_img'
      src={group1}
      alert="not avaliable image"  />
     </div>
     <div>
     <img 
      className='group2_img'
      src={group2}
      alert="not avaliable image" />
     <img 
      className='group3_img'
      src={group3}
      alert="not avaliable image"  />
     </div>
     </div>

     <div className='choose0'>
       <h1 className='text-center'> Why Choose Us</h1>
       <h4>Here Are The Details Of Why Ideal School Of Skill </h4>
       <div className='chhose01'>
       <div className='choose1'>
        <div className='choose2'>
        <i class="fa-regular fa-circle-check"></i>
        </div>
        <div className='choose5'>
        <span className='choose4'>1</span></div>
        <div className='choose3'>
        <h3>Quick Results</h3>
        <p>Get quick and guaranteed results with the best teachers.</p>
       </div>
       </div>

       <div className='choose11'>
        <div className='choose21'>
        <i class="fa-solid fa-hand-holding-dollar"></i>
        </div>
        <div className='choose5'>
        <span className='choose4'>2</span></div>
        <div className='choose3'>
        <h3>Save Money</h3>
        <p>You can save a lot of money on our lessons & resources.</p>
       </div>
       </div>

       <div className='choose12'>
        <div className='choose23'>
        <i class="fa-regular fa-comments"></i>
        </div>
        <div className='choose5'>
        <span className='choose4'>3</span></div>
        <div className='choose3'>
        <h3>Get Support</h3>
        <p>Our staff and teachers are always ready to help you.</p>
       </div>
       </div>
       </div>
     </div>
     </div>
     
     <div className='faq1'>
      <h4> FAQ</h4>
      <h2>Some faq for more inquiry</h2>
      
      <div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What are the minimum requirements to learn Jewellery Design Courses?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         You require a desktop PC, mobile or laptop with internet facility and headphone to get connected.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can anyone register  for the Jewellery Design Courses?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
    Yes, anyone can register for the Jewellery Design course
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What is the fee Structure ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There is a nominal monthly charge of Rs 899+ 18% GST every month (three days per week) as tuition fee. Beside that there is a one time admission fee of Rs 499 + 18% GST for the Jewellery Design class.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      will I be provided with any material?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, all relevant material will be provided.
      </div>
    </div>
  </div>
</div>
    </div>


       </div>
     </div>
   </div>

   </div>
   
    <Footer />
    </>
  )
}

export default Jewellery;