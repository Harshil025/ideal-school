import React from 'react';
import CountUp from "react-countup";
import Footer from './Footer';
import about from "../images/5.jpg";
import skill from "../images/skill.jpg";
import count from "../images/5.jpg";
import write from "../images/writer.png";
import instructor from "../images/instructor.png";
import innovation from "../images/innovation.png";
import Trust from "../images/trust12.png";
import Leadership from "../images/leadership.png";
import Certified from "../images/certificate.png";
import Ashish from "../images/ashish.jpeg";
import { NavLink } from 'react-router-dom';
import Popup2 from './Popup2';

const About = () => {
  return (
    <>
    <div className="card ">
      <img className="about_img "
          src={about}
          alt="home img"  />
    <div className="about3 ">
      <div className='about1'>
      <h1> About us</h1>
    <p className='about2'>  <span> <NavLink  to="/"> Home <i class="fa fa-chevron-right"></i> </NavLink></span> About uS <i class="fa fa-chevron-right"></i></p>
      </div>            
    </div>
  </div>


  <div className='about5 container' >
  <img className="about1_img "
          src={skill}
          alt="home img"  />
  <div className='about61'>
  <h4 className='about6'> Ideal School of Skill Stablished Since 2013 </h4>
      <div className='about8'>
      <p className="pr-lg-5 pl-lg-5 ">
      What do you think is better to receive after each lesson:
     a lovely looking badge or important skills you can immediately put into practice.
       There is really no magic to it.
      <p>On her way she met a copy. The copy warned the Little Blind Text,
       that where it came from it would have been rewritten a thousand times and everything that was left from 
       its origin would be the word.</p>
       <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
         It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p>On her way she met a copy. The copy warned the Little Blind Text,
        that where it came from it would have been rewritten a thousand times and everything that
        was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p> But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their
      </p>
      <div className="atf-main-btn d-flex mt-3"> 
      <NavLink to="/contact" className="page-scroll">Connect With Us <i className="fa fa-angle-right"></i></NavLink>
      </div>
      </div>
      </div>
      </div>



      <div class="  text-center  d-flex " >
      <img className="count_img "
          src={count}
          alt="home img"  />
    <div className="count3  ">
      <div className='count1 container '>

                        <div class="count2">
                        <h2><span><CountUp start={0} end={40} duration={4} suffix="+" /></span></h2>
                        <h5>PROFESSIONAL INSTRUCTION</h5>
                    </div>
                    <div class="count2">
                        <h2><span><CountUp start={0} end={10} duration={4} suffix="+" /></span></h2>
                        <h5>Certified Teachers</h5>
                    </div>
                    <div class="count2">
                        <h2><span><CountUp start={0} end={400} duration={4} suffix="+" /></span></h2>
                        <h5>Students Enrolled</h5>
                    </div>
                    <div class="count2">
                        <h2><span><CountUp start={0} end={9} duration={4} suffix="+" /></span></h2>
                        <h5>Years’ Experience</h5>
                    </div>
                    </div>
                    </div>
                </div>

                <div className='value1'>
                  <h1 className='text-center'>Our value</h1>
                    <div className='value '>
                   <div className="services ">
                   <div className='services1 '>
                     <img 
                        className='faction_img'
                        src={write} />
                      <div className='services2 '>
                     <h3 className="heading mb-3">Top Quality Content</h3>
                     <p>A small river named Duden flows by their place and supplies</p>  
                     </div>
                     </div>
                 </div>

                 <div className="services ">
                   <div className='services1 '>
                     <img 
                        className='faction_img'
                        src={instructor} />
                      <div className='services2 '>
                     <h3 className="heading mb-3">Highly Skilled Instructor</h3>
                     <p>A small river named Duden flows by their place and supplies</p>  
                     </div>
                     </div>
                 </div>

                 <div className="services ">
                   <div className='services1 '>
                     <img 
                        className='faction_img'
                        src={Trust} />
                      <div className='services2 '>
                     <h3 className="heading mb-3">Trust</h3>
                     <p>Treat clients’ aspirations with utmost responsibility</p>  
                     </div>
                     </div>
                 </div>

                 <div className="services ">
                   <div className='services1 '>
                     <img 
                        className='faction_img'
                        src={innovation} />
                      <div className='services2 '>
                     <h3 className="heading mb-3">Innovation</h3>
                     <p>Inventing new methods to improve our processes</p> 
                     </div>
                     </div>
                 </div>
                 
                 <div className="services ">
                   <div className='services1 '>
                     <img 
                        className='faction_img'
                        src={Leadership} />
                      <div className='services2 '>
                     <h3 className="heading mb-3">Leadership</h3>
                     <p>Feel and deliver as the industry leader</p>  
                     </div>
                     </div>
                 </div>
                 <div className="services ">
                   <div className='services1 '>
                     <img 
                        className='faction_img'
                        src={ Certified} />
                      <div className='services2 '>
                     <h3 className="heading mb-3">Get Certified</h3>
                     <p>A small river named Duden flows by their place and supplies</p>  
                     </div>
                     </div>
                 </div>

                 </div>
                </div>
                
               <div>
                 <h3 className='skill'><i class="fab fa-battle-net"></i><span> Ideal School Of Skill Founder </span>  <i class="fab fa-battle-net"></i>  </h3>
                <div className="skill1  ">
                <img className="skill_img "
                 src={Ashish}
                alt="home img"  />
                </div>
                <div className='skill2 text-center'>
                <h3> Mr.Ashsih Vaghasiya</h3>
                <p> (Founder & CEO - Ideal School Of Skill )</p>
                </div>



               </div>
      
    <Footer />
    <Popup2 />
    </>
  )
}

export default About;