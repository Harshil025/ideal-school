import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Component/Home';
import About from './Component/About';
import Courses from './Component/Courses';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Jewellery from './Component/Jewellery';
import Personality from './Component/Personality';
import Public from './Component/Public';
import Spoken from './Component/Spoken';
import { Routes , Route , Navigate} from 'react-router-dom';



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/courses' element={<Courses/>} />
      <Route exact path='/contact' element={<Contact/>} />

       <Route exact path='/spoken' element={<Spoken/>} />
      <Route exact path='/jewellery' element={<Jewellery/>} />
      <Route exact path='/public' element={<Public/>} />
      <Route exact path='/personality' element={<Personality/>} />
      <Route path="*" element={<Navigate  to="/" />} />
      </Routes>
      </>
  )
};

export default App;