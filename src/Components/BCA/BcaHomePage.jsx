import React from 'react'
import BcaLogo from "../Images/bcaCourse.svg";
import BtechLogo from "../Images/btechCourse.svg";
import { NavLink } from "react-router-dom";
import './BcaHomePage.css'
import Mininav from '../MiniNavBar'

const BcaHomepage = () => {
  return (
    <div className='mt-5 p-2'>
      <h1 className="fs-1 fw-bold text-center mt-5 shadow p-2">
          {" "}
          <b className="text-info mt-5 AcademicText">Academic Year  </b> 2021 - 22 Onwards...
        </h1>
        {/* <Mininav /> */}
        {/* 1 st sem Start from Here */}
        <h1 className="fs-1 fw-bold text-left mt-5 shadow p-2">
          {" "}
          <b className="text-dark mx-2">First Semester  </b>
        </h1>

        <div className="bg-light p-1">
        <div className="container w-75 h-75 p-2 mt-3">
          <div className="row">
            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Mathematic -1</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  Discrete Mathematics
                </h1>
              </NavLink>
            </div>

            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">C Programming</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  Programming in C
                </h3>
              </NavLink>
            </div>

            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Computer and IT</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  Computer and IT
                </h3>
              </NavLink>
            </div>

            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Web Technologies</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  Web Technologies
                </h3>
              </NavLink>
            </div>

            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Technical Communication</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  Technical Communication
                </h3>
              </NavLink>
            </div>
{/* 1st Sem Practical Paper */}
<h1 className='text-center fs-2 fw-bold bg-info p-1 mt-1'>Core Course Practicals</h1>
            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Practical-I </h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  'C' Prog Lab
                </h3>
              </NavLink>
            </div>

            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Practical - II</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  IT Lab
                </h3>
              </NavLink>
            </div>

            <div className="col-sm">
              {/* BCA svg */}
               <NavLink to="/CoursesHomepage/BcaHomePage" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Practical - III</h3>
                <img src={BcaLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-2 ">
                  Web Tech Lab
                </h3>
              </NavLink>
            </div>


            <div class="col-sm">
              {/* Btech svg */}
              <a href="" className="btn btn-info w-100 h-75 border">
                <h3 className="fw-bold text-dark border">Btech</h3>
                <img src={BtechLogo} alt="" className="w-100 h-75" />
                <h3 className="card-title text-center text-white w-100 h-100 fw-bold fs-5 p-3 ">
                  Bachelor of Technology
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BcaHomepage