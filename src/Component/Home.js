import React from 'react';
import Footer from './Footer';
import sp from '../images/sp2.jpg';
import count from '../images/count.jpg';
import slide from '../images/public2.jpg';
import count3 from '../images/count4.jpg';
import { NavLink } from 'react-router-dom';
import home from "../images/home1.png";
import home2 from "../images/5.jpg";
import spoken from "../images/spoken.jpg";
import jewellery from "../images/jewellery1.jpeg";
import pbt from "../images/public6.jpg";
import personality from "../images/personality.jpg";
import ashish from "../images/ashish1.jpeg";
import staff1 from "../images/staff1.jpg";
import staff2 from "../images/staff2.jpg";
import student1 from "../images/student1.jpg"
import student2 from "../images/student2.jpg"
import student3 from "../images/student3.jpg"
import Popup from './Popup';
import Popup2 from './Popup2';




const Home = () => {
  return (
    <>
 
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={sp} class="img_slider" alt="..."/>
       <div className="carousel1">
      <div className='carousel2'>
      <h1 className='carousel3'> SPOKEN ENGLISH</h1>

      <div className='carousel4'>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Courses For Student & Emoloyees </p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Grammer Coaching</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Fluency Training</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> speaking other people</p>
      </div>

      <div className="carousel5"> 
      <NavLink to="/contact" >Contact Us <i className="fa fa-angle-right"></i></NavLink>
      </div>

      </div> 
      </div>
    </div>

    <div class="carousel-item">
      <img src={count} class="img_slider" alt="..."/>
      <div className="carousel1">
      <div className='carousel2'>
      <h1 className='carousel3'> JEWELLERY DESIGN</h1>
      <div className='carousel4'>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Courses For Student & Emoloyees </p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Translate tour Sharp</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> concepts Into Delicate outcomes </p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> 100% Job Placment</p>
      </div>

      <div className="carousel5"> 
      <NavLink to="/contact2" >Contact Us <i className="fa fa-angle-right"></i></NavLink>
      </div>
      </div> 
      </div>
    </div>

    <div class="carousel-item">
      <img src={slide} class="img_slider" alt="..."/>
      <div className="carousel1">
      <div className='carousel2'>
      <h1 className='carousel3'> PUBLIC SPEAKING</h1>
      <div className='carousel4'>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Courses For Student & Emoloyees </p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Grammer Coaching</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Fluency Training</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> speaking other people</p>
      </div>

      <div className="carousel5"> 
      <NavLink to="/contact2" >Contact Us <i className="fa fa-angle-right"></i></NavLink>
      </div>
      </div> 
      </div>

    </div>

    <div class="carousel-item">
      <img src={count3} class="img_slider" alt="..."/>
      <div className="carousel1">
      <div className='carousel2'>
      <h1 className='carousel3'> PERSONALITY  DEVELOPMENT</h1>
      <div className='carousel4'>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Courses For Student & Emoloyees </p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Grammer Coaching</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> Fluency Training</p>
      <p> <i class="fa-solid fa-arrow-right-to-bracket"></i> speaking other people</p>
      </div>

      <div className="carousel5"> 
      <NavLink to="/contact2" >Contact Us <i className="fa fa-angle-right"></i></NavLink>
      </div>
      </div> 
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>


  <div className='care'>
  <div className=' container-fluid'>
     <div className='row'>
       <div className='col-11 mx-auto'>

    <div className='care0'>
    <div className='care1'>
      <img  className='care_img'
      src={home}
      alt='not image'/>
    </div>
    <div className='care2'>
    <h6><i class="fa-solid fa-book"></i> WHAT WE PROVIDE </h6>
    <h1>We Care About Your Life For Better</h1>

    <p> Ideal school of skill guides the young mind  who  aim how to  develope their skill to pursue  their goal.
    Whether you want to pursue a tutoring job or are considering work as a teacher,
     understanding how to present your qualifications can have a significant impact on your candidacy. By highlighting your tutoring skills and working on areas you can improve,
     you can introduce yourself as a qualified candidate to employers. </p>

     <div className="care3"> 
      <NavLink to="/about" >Know More <i className="fa fa-angle-right"></i></NavLink>
      </div>
    </div>
    </div>

   </div>
   </div>
   </div>
  </div>


  <div class="  text-center  d-flex " >
      <img className="home_img "
          src={home2}
          alt="home img"  />
    <div className="coach3  ">
      <div className='coach1  '>

                           <h1>GET THE COACHING TRAINING</h1>
                           <div className='coach2 text-center'>
                           <p>Our People Are Our Greatest Assets And Biggest Differentiator.
                              Don’t See What You’re Looking For But Still Interested In Working With Us?</p>
                             
                           <p className="coach4"><NavLink to="/about" >Contact Us <i className="fa fa-angle-right"></i></NavLink></p>  
                       
                    </div>
                    </div>
                    </div>
                </div>

                
                <div className=' container-fluid'>
                <div className='row'>
               <div className='col-11 mx-auto'>

                  <div className='cour1'>                 
                    <h1 > Our Courses</h1>
                   
                  
                  <div className='cour0'>
                  <div className='cour6'>
                  <div className='cour'>
                    <img
                     className='cour_img'
                     src={spoken}
                     alt="no image"/>

                     <h4>Spoken English</h4>
                     <p className='cour2'>There are a number of ways you can learn English by yourself.
                        Learning English by yourself can be a challenge but it is possible.
                        </p>
                         <p className="cour3"><NavLink to="/spoken" >Read More <i className="fa fa-angle-right"></i></NavLink></p>  
                  </div>
                  </div>

                  <div className='cour6'>
                  <div className='cour'>
                    <img
                     className='cour2_img'
                     src={jewellery}
                     alt="no image"/>

                     <h4>Jewellery Design</h4>
                     <p className='cour2'>Jewellery design is the art or profession of designing and creating jewellery. This is one of civilization's earliest forms of decoration, dating back at ..
                         </p>
                         <p className="cour3"><NavLink to="/jewellery" >Read More <i className="fa fa-angle-right"></i></NavLink></p>  
                  </div>
                  </div>

                  <div className='cour6'>
                  <div className='cour'>
                    <img
                     className='cour3_img'
                     src={pbt}
                     alt="no image"/>

                     <h4>Public Speaking</h4>
                     <p className='cour2'>Public speaking is important in both business, education, and the public arena. There are many benefits to speaking in public whether you're an individual or a business.
                         </p>
                         <p className="cour3"><NavLink to="/public" >Read More <i className="fa fa-angle-right"></i></NavLink></p>  
                  </div>
                  </div>

                  <div className='cour6'>
                  <div className='cour'>
                    <img
                     className='cour4_img'
                     src={personality}
                     alt="no image"/>

                     <h4>personality Development</h4>
                     <p className='cour2'>Personality development is defined as a process of developing and enhancing one's personality. Personality development helps an individual to gain confidence and high self esteem.
                         </p>
                         <p className="cour3"><NavLink to="/personality" >Read More <i className="fa fa-angle-right"></i></NavLink></p>  
                  </div>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>

                 
      
                  <div className=' container-fluid'>
                <div className='row'>
               <div className='col-11 mx-auto'>
                  <div className='meet'>
                    <h5>MEET OUR BRILLIANT MINDS</h5>
                    <h1>Our Leadership Team</h1>

                  <div className='staff0'>
                
                  <div className='staff'>
                    <div className='staff1'>
                      <img 
                      className='staff_img'
                      src={ashish}
                      alt=".."
                      />
                    </div>

                    <div className='staff4'>
                    <div className='staff5 text-center'>
                      <h3> Ashsih Vaghasiya</h3>
                      <span className='staff6 mb-2'>Spoken English Teacher</span>
                      <div className='staff7'>
                        <ul className='staff8'>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                          <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                        </ul>
                        <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className='staff'>
                    <div className='staff1'>
                      <img 
                      className='staff_img'
                      src={staff1}
                      alt=".."
                      />
                    </div>

                    <div className='staff4'>
                    <div className='staff5 text-center'>
                      <h3> Jeffrey Rockenson</h3>
                      <span className='staff6 mb-2'>jewellery Design Teacher</span>
                      <div className='staff7'>
                        <ul className='staff8'>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                          <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                        </ul>
                        <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      </div>
                      </div>
                    </div>
                  </div>


                  <div className='staff'>
                    <div className='staff1'>
                      <img 
                      className='staff_img'
                      src={staff2}
                      alt=".."
                      />
                    </div>

                    <div className='staff4'>
                    <div className='staff5 text-center'>
                      <h3> Hanson Deack</h3>
                      <span className='staff6 mb-2'>Public Speaking Teacher</span>
                      <div className='staff7'>
                        <ul className='staff8'>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                          <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                        </ul>
                        <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      </div>
                      </div>
                    </div>
                  </div>


                  <div className='staff'>
                    <div className='staff1'>
                      <img 
                      className='staff_img'
                      src={staff1}
                      alt=".."
                      />
                    </div>

                    <div className='staff4'>
                    <div className='staff5 text-center'>
                      <h3> jonQuil Von</h3>
                      <span className='staff6 mb-2'>personality  Development Teacher</span>
                      <div className='staff7'>
                        <ul className='staff8'>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                        <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                          <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                        </ul>
                        <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      </div>
                      </div>
                    </div>
                  </div>


                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
             

                  <div className=' container-fluid'>
                <div className='row'>
               <div className='col-11 mx-auto'>
             <div className='student'>
            <h5> TESTIMONIAL</h5>
            <h1>What our Student say about </h1>
            
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button className="v2g" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button className="v2g" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="v2g" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className='row'> 
    <div className='col-md-5'>

    <div className="carousel-item active">
    <div className='student1'>
            <div class="icon9 "><span class="fa fa-quote-left"></span></div>
              <div className='student0'>
              <p>
              Far far away, behind the word mountains,
               far from the countries Vokalia and Consonantia, 
               there live the blind texts
              </p> 
              <div className='student2'>
               <div className='student3'>
              <img className='student_img'
              src={student1}
              alt="no image" /></div>
              <div className='student4'>
              <h4> Vivek Vaghasiya</h4>
               <h6>Student</h6>
               </div>
               </div>
               </div>
            </div>
    </div>


    <div className="carousel-item">
    <div className='student1'>
            <div class="icon9 "><span class="fa fa-quote-left"></span></div>
              <div className='student0'>
              <p>
              Far far away, behind the word mountains,
               far from the countries Vokalia and Consonantia, 
               there live the blind texts
              </p> 
              <div className='student2'>
               <div className='student3'>
              <img className='student_img'
              src={student2}
              alt="no image" /></div>
              <div className='student4'>
              <h4>Umesh Kheni</h4>
               <h6>Student</h6>
               </div>
               </div>
               </div>
            </div>
    </div>

    <div className="carousel-item">
    <div className='student1'>
            <div class="icon9 "><span class="fa fa-quote-left"></span></div>
              <div className='student0'>
              <p>
              Far far away, behind the word mountains,
               far from the countries Vokalia and Consonantia, 
               there live the blind texts
              </p> 
              <div className='student2'>
               <div className='student3'>
              <img className='student_img'
              src={student3}
              alt="no image" /></div>
              <div className='student4'>
              <h4>Rumil Tejani</h4>
               <h6>Student</h6>
               </div>
               </div>
               </div>
            </div> 
    </div>


    </div>
  </div>
  </div>

</div>


             </div>
             </div>
             </div>
             </div>
             
              <Popup2></Popup2>
    <Footer />
    </>
  )
}

export default Home;