import React from 'react'
import { NavLink } from 'react-router-dom'
import MiniNavBar from './MiniNavBar'
import Math from './Images/Bcapic/SubPIc/mathe1.png'
import CprogrammingImg from './Images/Bcapic/SubPIc/ProgrammingUsingC.png'
import ComputerandItImg from './Images/Bcapic/SubPIc/IntroToComputerAndIT.png'
import Wtech from './Images/Bcapic/SubPIc/WebTech.png'
import TcImg from './Images/Bcapic/SubPIc/Tc.png'
// second sem
import MathSecondImg from './Images/Bcapic/SubPIc/Mathe2.png'
import WBprogramming from './Images/Bcapic/SubPIc/WebBasedProgramming.png'
import DS from './Images/Bcapic/SubPIc/DsUsingC.png'
import DBMS from './Images/Bcapic/SubPIc/Dbms.png'
import Fedt from './Images/Bcapic/SubPIc/Fedt.png'
// third sem
import CN from './Images/Bcapic/SubPIc/CN.png'
import CA from './Images/Bcapic/SubPIc/CA.png'
import OOPImg from './Images/Bcapic/SubPIc/OOpUsingC.png'
import Pmanagement from './Images/Bcapic/SubPIc/Pom.png'
// fourth sem
import Java from './Images/Bcapic/SubPIc/Java.png'
import SE from './Images/Bcapic/SubPIc/Se.png'
import AI from './Images/Bcapic/SubPIc/Ai.png'
import NetworkSecurity from './Images/Bcapic/SubPIc/CNIS.png'
import Pa from './Images/Bcapic/SubPIc/POA.png'
// fifth sem
import OS from './Images/Bcapic/SubPIc/OS.png'
import Linux from './Images/Bcapic/SubPIc/Linux.png'
import CG from './Images/Bcapic/SubPIc/CG.png'
// six sem
import DHDM from './Images/Bcapic/SubPIc/DWDM.png'
import ECOM from './Images/Bcapic/SubPIc/Ecom.png'
import Iot from './Images/Bcapic/SubPIc/Iot.png'
import AllPageFooter from './AllPageFooter'

const BcaPreviousYearQuesPaper = () => {
    return (
        <div>
            < MiniNavBar />
            <h1 className='PYearQpaper'><NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PreviousYpaperAll" className='btn btn-danger'>Click Here For Downloading The Previous Year Questions Paper </NavLink></h1> 
            <span className='SemHeading'><h2>FIRST SEMESTER</h2></span>
            <div className='card'>
                <div  className='PYQpaper'>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQmath_1" ><img src={Math} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQcprogramming" ><img src={CprogrammingImg} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQComputerandIT" ><img src={ComputerandItImg} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQwebtec" ><img src={Wtech} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQtc" ><img src={TcImg} alt='SubjectImg' className='btn btn-'></img></NavLink>
            </div>
            </div>
            {/* second year paper */}
            <span className='SemHeading'><h2>SECOND SEMESTER</h2></span>
            <div className='card'>
                <div  className='PYQpaper'>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQmath_2"><img src={MathSecondImg} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQWBprogramming"><img src={WBprogramming} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQDs"><img src={DS} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQDbms"><img src={DBMS} alt='SubjectImg' className='btn btn-'></img></NavLink>
            {/* environment studies subject  */}
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQFedt"><img src={Fedt} alt='SubjectImg' className='btn btn-'></img></NavLink>
            </div>
            </div>
            {/* third sem */}
            <span className='SemHeading'><h2>THIRD SEMESTER</h2></span>            
            <div className='card'>
                <div  className='PYQpaper'>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQCN" ><img src={CN} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQCa" ><img src={CA} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQOOP" ><img src={OOPImg} alt='SubjectImg' className='btn btn-'></img></NavLink>
            {/* HUman value and ethics paper */}
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQPmanagement"><img src={Pmanagement} alt='SubjectImg' className='btn btn-'></img></NavLink>
           </div>
           </div>
           {/* fourth sem */}
            <span className='SemHeading'><h2>FOURTH SEMESTER</h2></span>
            <div className='card'>
                <div  className='PYQpaper'>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQJAVA" ><img src={Java} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQSE" ><img src={SE} alt='SubjectImg' className='btn btn-'></img></NavLink>
            {/* intro to management sub here */}
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQAI" ><img src={AI} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQNS" ><img src={NetworkSecurity} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQPa" ><img src={Pa} alt='SubjectImg' className='btn btn-'></img></NavLink>
            </div>
            </div>
            {/* fifth sem */}
            <span className='SemHeading'><h2>FIFTH SEMESTER</h2></span>            
            <div className='card'>
             <div  className='PYQpaper'>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQoS" ><img src={OS} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQLinux" ><img src={Linux} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQCG" ><img src={CG} alt='SubjectImg' className='btn btn-'></img></NavLink>
            </div>
            </div>
            {/* Six sem */}
            <span className='SemHeading'><h2>SIXTH SEMESTER </h2></span>            
            <div className='card'>
             <div  className='PYQpaper'>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQDHDM" ><img src={DHDM} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQEcom" ><img src={ECOM} alt='SubjectImg' className='btn btn-'></img></NavLink>
            <NavLink to="/Contact/BcaAllPage/PreviousyearQpaper/PyearQIot" ><img src={Iot} alt='SubjectImg' className='btn btn-'></img></NavLink>
            </div>
            </div>
           <AllPageFooter />
        </div>
    )
}

export default BcaPreviousYearQuesPaper
