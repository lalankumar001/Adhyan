import React from "react";
import BcaLogo from "../Images/bcaCourse.svg";
import BtechLogo from "../Images/btechCourse.svg";
import Footer from "../AllPageFooter";
import { NavLink } from "react-router-dom";

const BcaHomepage = () => {
  return (
    <div className="mt-5">
      <div className="mt-4 p-5">
        <h1 className="fs-1 fw-bold text-center mt-3 shadow p-2">
          {" "}
          <b className="text-info">Your One-Stop Library </b> for Endless
          Possibilities!
          <p className="fs-5 p-3">
            For GGSIP students, we offer all study materials without charge.
          </p>
        </h1>
      </div>
      <div className="bg-light p-1">
        <div className="container w-75 h-75 p-2 mt-3 ">
          <div className="row">
            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h1 className="fw-bold text-dark border">BCA</h1>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-3 p-2 ">
                  Bachelor of computer Applications
                </h1>
              </NavLink>
            </div>

            <div class="col-sm">
              {/* Btech svg */}
              <a href="" className="btn btn-info w-100 h-75 border">
                <h1 className="fw-bold text-dark border">Btech</h1>
                <img src={BtechLogo} alt="" className="w-100 h-75" />
                <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-3 p-3 ">
                  Bachelor of Technology
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <Footer />
      </div>
    </div>
  );
};

export default BcaHomepage;
