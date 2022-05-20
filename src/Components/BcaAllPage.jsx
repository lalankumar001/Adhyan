import React from 'react'
// subjects images
import MathImg from './Images/Bcapic/Mathematic-1.png'
import TcImg from './Images/Bcapic/Technical communication.png'
import CprogrammingImg from './Images/Bcapic/Programing using c.png'
import ComputerandItImg from './Images/Bcapic/Intro to computer and it.png'
import PhysicsImg from './Images/Bcapic/Physics.png'
import MathSecondImg from './Images/Bcapic/Mathematics-2.png'
import Pmanagement from './Images/Bcapic/PrincipleofManagement.png'
import DE from './Images/Bcapic/DigitalElectronics.png'
import DS from './Images/Bcapic/datastructure.png'
import DBMS from './Images/Bcapic/Dbms.png'
import MaththirdImg from './Images/Bcapic/Mathematics-3.png'
import CA from './Images/Bcapic/CA.png'
import Fedt from './Images/Bcapic/Vb.net.png'
import Pa from './Images/Bcapic/PAccounting.png'
import OOPImg from './Images/Bcapic/Oop.png'
import Mathfourth from './Images/Bcapic/Mathematics-4.png'
import Wtech from './Images/Bcapic/WebTech.png'
import Java from './Images/Bcapic/Java.png'
import SE from './Images/Bcapic/Se.png'
import CN from './Images/Bcapic/CN.png'
import OS from './Images/Bcapic/OS.png'
import CG from './Images/Bcapic/CG.png'
import ECOM from './Images/Bcapic/Ecom.png'
import St from './Images/Bcapic/St.png'
import Microprocessor from './Images/Bcapic/Microprocessor.png'
import ACN from './Images/Bcapic/ACN.png'
import WBprogramming from './Images/Bcapic/WebBasedProgramming.png'
import BE from './Images/Bcapic/BEcom.png'
import DHDM from './Images/Bcapic/dhdm.png'
import Mcomputing from './Images/Bcapic/mcomputing.png'
import Linux from './Images/Bcapic/linux.png'
import MMedia from './Images/Bcapic/multimedia.png'
import BioInfo from './Images/Bcapic/bioinfo.png'
import AI from './Images/Bcapic/AI.png'
import NetworkSecurity from './Images/Bcapic/NetworkSecurity.png'
import NetworkProgramming from './Images/Bcapic/NetworkProgramming.png'
import { NavLink } from 'react-router-dom'
import MiniNavBar from './MiniNavBar'
import AllPagefooter from './AllPageFooter'

const AdhyanHome = () => {
    return (
        <div>
          
            <div>
              <MiniNavBar />
                {/* fOR fIRST SEMESTER   for code click leftside arrow*/}
           <h1 className='SemHeading'>ACADEMIC YEAR 2021-22 ONWARDS... &nbsp; &ensp; <NavLink to="/Contact/BcaAllPage/BcaSyllabusUpto_2021" className='btn btn-danger'>Upto Academic Year 2020-21</NavLink></h1> 
           <div className="card text-center">
  <div className="card-header"><h2>Discrete Mathematics</h2></div>
  <div className="card-body">
    <NavLink to="/Contact/BcaAllPage/BcaMath_1" className='btn btn-'><img src={MathImg} alt='SubjectImg'></img></NavLink>
  </div>
  {/* <div className="card-footer text-muted"> 2 days ago </div> */}
</div>
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaCprogramming" className='btn btn-'><img src={CprogrammingImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaComputerIt" className='btn btn-'><img src={ComputerandItImg } alt='SubjectImg'></img></NavLink>
  </div>

  <div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaWebTech" className='btn btn-'><img src={Wtech} alt='SubjectImg'></img></NavLink>
  </div>
</div>

</div>
  <div className="card text-center">
  <div className="card-body">
    <NavLink to="/Contact/BcaAllPage/BcaTechnicalCommunication" className='btn btn-'><img src={TcImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

   
   <h1 className='SemHeading'>PRACTICALS 1 , 2 , 3</h1>
  <div className="card text-center">
  <div className="card-header">C PROGRAMMING</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_1" className='btn btn-'><img src={CprogrammingImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-header">COMPUTER AND IT LAB</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_2" className='btn btn-'><img src={ComputerandItImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-header">Web Technologies Lab</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_8" className='btn btn-'><img src={Wtech} alt='SubjectImg'></img></NavLink>
  </div>
</div>

{/* fOR sECOND sEMESTER */}
</div>
<h1 className='SemHeading'>BCA SECOND SEMESTER</h1>
<div className="card text-center">
<div className="card-header">Applied Mathematics </div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaMath_2" className='btn btn-'><img src={MathSecondImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaWebProgramPHP" className='btn btn-'><img src={WBprogramming} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaDS" className='btn btn-'><img src={DS} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaDBMS" className='btn btn-'><img src={DBMS} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaFEDT" className='btn btn-'><img src={Fedt} alt='SubjectImg'></img></NavLink>
  </div>
</div>

{/* Second semester practicals  */}
<h1 className='SemHeading'>PRACTICALS 4 , 5 , 6</h1>
<div className="card text-center">
<div className="card-header">Web Based Programming LAB </div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaWebProgramPHP" className='btn btn-'><img src={WBprogramming} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-header">Data Structure LAB </div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_3" className='btn btn-'><img src={DS} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-header"> DBMS LAB  </div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_4" className='btn btn-'><img src={DBMS} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-header">VB.net Lab</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_5" className='btn btn-'><img src={Fedt} alt='SubjectImg'></img></NavLink>
  </div>
</div>

{/* For Third Semester */}
<h1 className='SemHeading'>BCA THIRD SEMESTER</h1>
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaCN" className='btn btn-'><img src={CN} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaCA" className='btn btn-'><img src={CA} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaProgrammingCPP" className='btn btn-'><img src={OOPImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPrincipleOfManagement" className='btn btn-'><img src={Pmanagement} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<h1 className='SemHeading'>PRACTICALS 7</h1>
<div className="card text-center">
  <div className="card-header">C++ Lab</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_6" className='btn btn-'><img src={OOPImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

{/* For Fourth Semester */}
<h1 className='SemHeading'>BCA FOURTH SEMESTER</h1>
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaJava" className='btn btn-'><img src={Java} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaSE" className='btn btn-'><img src={SE} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaAI" className='btn btn-'><img src={AI} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaNetworkSecurity" className='btn btn-'><img src={NetworkSecurity} alt='SubjectImg'></img></NavLink>
  </div>  
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPOA" className='btn btn-'><img src={Pa} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<h1 className='SemHeading'>PRACTICALS 8 AND 9</h1>
<div className="card text-center">
  <div className="card-header">Java Programming Lab</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_7" className='btn btn-'><img src={Java} alt='SubjectImg'></img></NavLink>
  </div>
</div>

{/* For Fifth Semester */}
<h1 className='SemHeading'>BCA FIFTH SEMESTER</h1>
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaOS" className='btn btn-'><img src={OS} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaLinux" className='btn btn-'><img src={Linux} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaCG" className='btn btn-'><img src={CG} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<h1 className='SemHeading'>PRACTICALS 9</h1>
<div className="card text-center">
  <div className="card-header">Linux Lab</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_10" className='btn btn-'><img src={Linux} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-header">Computer Graphics Lab</div>
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaPractical_9" className='btn btn-'><img src={CG} alt='SubjectImg'></img></NavLink>
  </div>
</div>

{/* For Sixth Semester */}
<h1 className='SemHeading'>BCA SIXTH SEMESTER</h1>
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaDataWareHousing" className='btn btn-'><img src={DHDM} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaECOM" className='btn btn-'><img src={ECOM} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<h1 className='SemHeading'>PRACTICALS 10 AND DELETED SUBJECT FROM BCA COURSE NOW </h1>

{/* sOME DELETED SUBJECT FORM BCA COURSE */}
<div className="card text-center">
  <div className="card-body">
    <NavLink to="/Contact/BcaAllPage/BcaPhysics" className='btn btn-'><img src={PhysicsImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaDE" className='btn btn-'><img src={DE} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaMath_3" className='btn btn-'><img src={MaththirdImg} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaMath_4" className='btn btn-'><img src={Mathfourth} alt='SubjectImg'></img></NavLink>
  </div>
</div>
      
<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaST" className='btn btn-'><img src={St} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaMicroprocessor" className='btn btn-'><img src={Microprocessor} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaACN" className='btn btn-'><img src={ACN} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaMobileComputing" className='btn btn-'><img src={Mcomputing} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaMultimedia" className='btn btn-'><img src={MMedia} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaBioInformatics" className='btn btn-'><img src={BioInfo} alt='SubjectImg'></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaNetworkProgramming" className='btn btn-'><img src={NetworkProgramming} alt='SubjectImg' ></img></NavLink>
  </div>
</div>

<div className="card text-center">
  <div className="card-body">
  <NavLink to="/Contact/BcaAllPage/BcaBE" className='btn btn-'><img src={BE} alt='SubjectImg'></img></NavLink>
  </div>
  {/* <AllPagefooter /> */}
</div>
<AllPagefooter />
        </div>
    )
}

export default AdhyanHome
