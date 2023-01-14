import React from "react";
import Logo from "./Images/adhyanlogo.png";
import { FaRegCopyright } from "react-icons/fa";
import "./AllFooter.css";
import { MdLocationOn } from "react-icons/md";

const AllPageFooter = () => {
  return (
    <div className="FooterPage mt-2">
      <hr />
      <div class="container w-100 text-center justify-content-between ">
        <div class="row">
          <div class="col">
            <img src={Logo} alt="" className="w-75 h-75 " />
          </div>
          <div class="col text-start">
            <h2 className="fw-bold">Courses</h2>
            <ul>
              <li>
                <a href="">BCA</a>
              </li>
              <li>
                <a href="">Btech</a>
              </li>
              <li>
                <a href="">MCA</a>
              </li>
            </ul>
          </div>
          <div class="col text-start ">
            <h2 className="fw-bold">About</h2>
            <ul>
              <li>
                <a href="">BCA</a>
              </li>
              <li>
                <a href="">Btech</a>
              </li>
              <li>
                <a href="">MCA</a>
              </li>
            </ul>
          </div>

          <div class="col text-start">
            <h2 className="fw-bold text-center">Contact</h2>
            <ul>
              <li>
                <a href="">BCA</a>
              </li>
              <li>
                <a href="">Btech</a>
              </li>
                   <hr />
              <h4><MdLocationOn /> New Delhi , India</h4>
            </ul>
          </div>
        </div>
      </div>

      {/* <a href="https://www.youtube.com/channel/UCGoQTxp8Vd17oxUM7iNJ8dA" target="_blank" rel="noopener noreferrer"><FaYoutube  color='red' background-color="white"/></a>
      <a href="https://www.facebook.com/asteptowardsunity/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  color='red'/></a>
      <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
      <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a> */}

      <div className="bg-secondary p-4 w-100">
        <h6 className="text-white text-center fs-5 fw-bold">
          COPYRIGHT <FaRegCopyright /> 2022 | Adhyan Group | All Rights
          Reserved.{" "}
        </h6>
      </div>
    </div>
  );
};

export default AllPageFooter;
