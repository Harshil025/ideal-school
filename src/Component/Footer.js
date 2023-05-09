import React from "react";
import { NavLink } from "react-router-dom";
import ideal from "../images/ideal.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
            <div className=" ">
            <div class="row"> 
            <div className="">
            <div className="row">

                <div className="footer-box1 col-12 clo-lg-4  d-flex justify-content-evenly ">
                <div className="list">
                <NavLink to="/">
                <div className="col-lg-2  order-1 order-lg-2 headerm-ig">
                      <img
                        className="root"
                        src={ideal}
                        alt="home img"
                      />
                    </div>
                  </NavLink>
                  
                  <div className=" row d-flex">
                    <div className=" mx-auto">
                    <a href="https://www.facebook.com/search/top?q=ideal%20school%20of%20skill" class="icon1"> <i class="fab fa-facebook"></i> </a>
                    <a href="https://www.instagram.com/ideal_school_of_skill/" class="icon1"> <i class="fab fa-instagram"></i> </a>
                    <a href="https://www.linkedin.com/in/akash-vaghasiya-70abbb1ba/" class="icon1"> <i class="fab fa-linkedin"></i> </a>
                    <a href="https://www.youtube.com/channel/UCeA4Av7VL3UZd5C94FVgCfQ" class="icon1"> <i class="fab fa-youtube"></i> </a>
                    </div>
                  </div>
                  </div>
                  
               
                
                    <div className="list-menu" >
                    <h4>Quick Links</h4>
                    <ul class="list-menu1">
                                    <li>  <NavLink to="/"> <i class="fas fa-angle-double-right mr-2 "></i>Home </NavLink></li>
                                    <li> <NavLink to="/about"><i class="fas fa-angle-double-right mr-2"></i>About Us</NavLink></li>
                                    <li> <NavLink to="/"><i class="fas fa-angle-double-right mr-2"></i>Courses</NavLink></li>
                                    <li> <NavLink to="/contact"><i class="fas fa-angle-double-right mr-2"></i>Contact Us</NavLink></li>
                      </ul>
                    </div>

                    <div className="list-menu">
                    <h4>Our Courses</h4>
                    <ul class="list-menu1">
                                    <li> <NavLink to="/spoken"><i class="fas fa-angle-double-right  mr-2"></i>Spoken English</NavLink></li>
                                    <li> <NavLink to="/jewellery"><i class="fas fa-angle-double-right mr-2"></i>Jewellery Design</NavLink></li>
                                    <li> <NavLink to="/public"><i class="fas fa-angle-double-right mr-2"></i>Public Speaking</NavLink></li>
                                    <li> <NavLink to="/personality"><i class="fas fa-angle-double-right mr-2"></i>Personality Devlopment</NavLink></li>
                      </ul>
                    </div>

                    
                    <div class="list-menu">
                                <h4>Have a Questions?</h4>
                                <p class="list-menu2 pr-lg-3 paragraphtext"><i class="fa-solid fa-location-dot"></i> 137,Swagat Soc.,BRTS Road Simadanaka, Surat</p>
                                <p class="list-menu2 pr-lg-3 paragraphtext"> <i class="fa-solid fa-phone"></i><a href="tel:+91 99244 72407 "> +91 83474 22792 </a></p>
                                <p class="list-menu2 pr-lg-3 paragraphtext"><i class="fa-solid fa-phone"></i><a href="tel:+91 97128 28835"> +91 79901 51617</a></p>
                                <p class="list-menu2 pr-lg-3 paragraphtext"><i class="fa-solid fa-envelope"></i><a href="mailto:ideal001@gmail.com"> ideal001@gmail.com</a></p>
                    </div>
                    </div>

        <div className="foot1 bg-light text-center w-100">
          <p> {year} © Copyright-All rights reserved by <NavLink to="/" target="_blank" rel="nofollow noopener"> Ideal School Of Skill.</NavLink>
          </p>
        </div>

        </div>
        </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
