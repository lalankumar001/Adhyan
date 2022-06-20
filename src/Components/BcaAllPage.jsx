import React from 'react'
import { NavLink } from 'react-router-dom'
import MiniNavBar from './MiniNavBar'
import AllPagefooter from './AllPageFooter'
import MovingText from './MovingNotics'

const AdhyanHome = () => {
    return (
        <div>
            <div>
            <MovingText />
              <MiniNavBar />
<span id='pagethik'>
                {/* fOR fIRST SEMESTER   for code click leftside arrow*/}
              <h1 className='SemHeading'>ACADEMIC YEAR 2021-22 ONWARDS... &nbsp; &ensp; <NavLink to="/Contact/BcaAllPage/BcaSyllabusUpto_2021" className='btn btn-danger'>Upto Academic Year 2020-21</NavLink></h1> 
           <h1 className='SemHeading'>BCA FIRST SEMESTER</h1>
           </span>
           <div className="card text-center">
  <div className="card-body">
  <span className='AllpageHome'>
    <NavLink to="/Contact/BcaAllPage/BcaMath_1" className='btn btn-info'>Mathematic-1</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaCprogramming" className='btn btn-info'>C Progamming </NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaComputerIt" className='btn btn-info'>Fundamentals Of Computer And IT</NavLink> &nbsp; 
    <NavLink to="/Contact/BcaAllPage/BcaWebTech" className='btn btn-info'>Web Technology</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaTechnicalCommunication" className='btn btn-info'>Technical Communication</NavLink> &nbsp;
    </span>
    <hr />
    {/* first sem all practicals file here */}
    <div className="semHeading"><h1> Practicals </h1></div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_1" className='btn btn-info'>C Progamming Practical</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_2" className='btn btn-info'>Fundamentals Of Computer and IT Practical</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_3" className='btn btn-info'>Web Technology Practical</NavLink> &nbsp;
  </div>
  </div>
</div>

{/* fOR sECOND sEMESTER */}
<h1 className='SemHeading'>BCA SECOND SEMESTER</h1>
  <div className="card text-center">
  <div className="card-body">
  <span className='AllpageHome'>
  <NavLink to="/Contact/BcaAllPage/BcaMath_2" className='btn btn-info'>Mathematics-2</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaWebProgramPHP" className='btn btn-info'>Web Based Programming </NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaDS" className='btn btn-info'>Data Structure using C</NavLink> &nbsp; 
    <NavLink to="/Contact/BcaAllPage/BcaDBMS" className='btn btn-info'>Database Management System</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaFEDT" className='btn btn-info'>Front End Designing Tool VB.net</NavLink> &nbsp;
    </span>
    <hr />
    {/* second semester all practical file here */}
    <div className="semHeading"><h1> Practicals </h1></div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_4" className='btn btn-info'>Web Based Programming</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_5" className='btn btn-info'>Data Structure Practical</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_9" className='btn btn-info'>DBMS Practical</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_6" className='btn btn-info'>FEDT Vb.net Practical</NavLink> &nbsp;
  </div>
  </div>
  </div>
   </div>

{/* For Third Semester */}
<h1 className='SemHeading'>BCA THIRD SEMESTER</h1>
   <div className="card text-center">
   <div className="card-body">
  <span className='AllpageHome'>
    <NavLink to="/Contact/BcaAllPage/BcaCN" className='btn btn-info'>Computer Networks</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaCA" className='btn btn-info'>Computer Architecture </NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaProgrammingCPP" className='btn btn-info'>OOPS using C++</NavLink>  &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaPrincipleOfManagement" className='btn btn-info'>Principles of Management</NavLink> &nbsp;
    </span>
    <hr />
    {/* 3rd semester all practical file here */}
    <div className="semHeading"><h1> Practicals </h1></div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_7" className='btn btn-info'>C++ Progamming Practical</NavLink>
    </div>
  </div>
  </div>

{/* FOR FOURTH SEMESTER */}
  <h1 className='SemHeading'>BCA FOURTH SEMESTER</h1>
  <div className="card text-center">
  <div className="card-body">
  <span className='AllpageHome'>
    <NavLink to="/Contact/BcaAllPage/BcaJava" className='btn btn-info'>Java</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaSE" className='btn btn-info'>Software Engineering </NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaAI" className='btn btn-info'>Artificial Intelligence</NavLink> &nbsp; 
    <NavLink to="/Contact/BcaAllPage/BcaNetworkSecurity" className='btn btn-info'>Computer Network and Security</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaPOA" className='btn btn-info'>Principles of Accounting</NavLink> &nbsp;
    </span>
    <hr />
    {/* FORTH SEMESTER ALL PRACTICAL HERE */}
    <div className="semHeading"><h1> Practicals </h1></div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_8" className='btn btn-info'>Java Practical</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_8" className='btn btn-info'>Software Engineering</NavLink>
  </div>
  </div>
  </div>

{/* For fifth semester */}
  <h1 className='SemHeading'>BCA FIFTH SEMESTER</h1>
  <div className="card text-center"> 
  <div className="card-body">
  <span className='AllpageHome'>
    <NavLink to="/Contact/BcaAllPage/BcaOS" className='btn btn-info'>Operating System</NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaLinux" className='btn btn-info'>Linux Operating System </NavLink> &nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaCG" className='btn btn-info'>Computer Graphics</NavLink>  &nbsp;
     </span>
    <hr />
    {/* fifth semester all practical file here */}
    <div className="semHeading"><h1> Practicals </h1></div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_10" className='btn btn-info'>Linux Practical</NavLink> &nbsp;
  <NavLink to="/Contact/BcaAllPage/BcaPractical_11" className='btn btn-info'>Computer Graphics Practical</NavLink>
  </div>
  </div>
  </div>

  {/* For sixth semester */}
  <h1 className='SemHeading'>BCA SIXTH SEMESTER</h1>
           <div className="card text-center">
  <div className="card-body">
  <span className='AllpageHome'>
    <NavLink to="/Contact/BcaAllPage/BcaDataWareHousing" className='btn btn-info'>Dataware Housing and Data Mining</NavLink>&nbsp;
    <NavLink to="/Contact/BcaAllPage/BcaECOM" className='btn btn-info'>E-commerce </NavLink>
    </span>
    <hr />
    {/* all sixth semester practical file here */}
    <div className="semHeading"><h1> Practicals </h1></div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_12" className='btn btn-info'>Internet Of Things</NavLink>
   </div>
  
  </div>
  
  </div>
  

<AllPagefooter />
        </div>
    )
}

export default AdhyanHome
