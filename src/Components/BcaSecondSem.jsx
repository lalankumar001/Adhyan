import React from 'react'
import MiniNavBar from './MiniNavBar'
import MathSecondImg from './Images/Bcapic/Mathematics-2.png'
import WBprogramming from './Images/Bcapic/WebBasedProgramming.png'
import DS from './Images/Bcapic/datastructure.png'
import DBMS from './Images/Bcapic/Dbms.png'
import Fedt from './Images/Bcapic/Vb.net.png'
import { NavLink } from 'react-router-dom'

const BcaSecondSem = () => {
    return (
        <div> 
            < MiniNavBar />
            <h1 className='SemHeading'>BCA SECOND SEMESTER SUBJECTS</h1>
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
        </div>
    )
}

export default BcaSecondSem
