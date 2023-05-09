import React from "react";
import { NavLink } from "react-router-dom";
import ideal from "../images/ideal.png";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="container-fluid px-lg-5">

        
        <nav className="navbar active navbar-expand-lg navbar-light ">
          <div className="container-fluid px-lg-5">
            <NavLink className="navbar-brand" to="/">
              <div className="col-lg-3 order-1 order-lg-2 headerm-ig">
                <img
                  className="root"
                  src={ideal}
                  alt="home img"
                  width="150"
                  height="50"
                />
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-6 mb-lg-0" >
                <li className="nav-item">
                  <NavLink
                    
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                   
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink 
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Course
                  </NavLink>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/spoken">
                        Spoken English
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/jewellery">
                        Jewellery Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/public">
                        Public Speaking
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/personality">
                        Personality Development
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    className="nav-link"
                    to="/contact"
                  > Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </div>
        </div>
    </>
  );
};

export default Navbar;