import React from "react";
import { NavLink } from "react-router-dom";
import Logo from './Images/adhyanlogo.png'
import Menu from './Images/Menu.svg'


const Login = () => {
<<<<<<< Updated upstream
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
             <NavLink className="navbar-brand" to="/#"></NavLink>
             <img  className="logo" src={Logo} alt="Logo" />
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link"  id='NavBarLinkFirst' to="/Home">Home</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" id='NavBarLinkSecond'  to="/Contact">Contact Us</NavLink> 
        </li>
        {/* <li className="nav-item">
          <NavLink  activeClassName="menu_active"className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" to="/Register">Register</NavLink>
        </li> */}
  <li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" id='NavBarLinkThird'  to="/About">About Us</NavLink> 
        </li>
<li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" id='NavBarLinkThird'  to="/About">Blog</NavLink> 
        </li>
<li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" id='NavBarLinkThird'  to="/About">Login/Register</NavLink> 
        </li>
      </ul>
    </div>
  </div>
</nav>
=======
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <NavLink to="/Home" className="navbar-brand"></NavLink>
          <img src={Logo} alt="Logo" className="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler"><img src={Menu} alt="Menu"/></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-5 fw-semibold fs-4 pt-3">
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    to="/Home"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    to="/Contact"
                  >
                    Courses
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item d-grid gap-3 btn btn-dark mb-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-danger"
                    to="/Contact"
                  >
                    Login
                  </NavLink>
                </li>
                
              </ul>
            </div>

          </div>
>>>>>>> Stashed changes
        </div>
      </nav>
    </div>
  );
};

export default Login;
