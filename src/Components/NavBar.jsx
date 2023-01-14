import React from "react";
import { NavLink } from "react-router-dom";
import Logo from './Images/adhyanlogo.png'
import Menu from './Images/Menu.svg'


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <NavLink to="/Home" className="navbar-brand"></NavLink>
          <NavLink to="/Home"><img src={Logo} alt="Logo" className="Logo w-75" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler"><img src={Menu} alt="Menu" /></span>
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
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
