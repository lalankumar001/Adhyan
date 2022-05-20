import React from 'react'
import { NavLink } from 'react-router-dom'
import MiniNavBar from './MiniNavBar'
import Java from './Images/Bcapic/Java.png'
import SE from './Images/Bcapic/Se.png'
import AI from './Images/Bcapic/AI.png'
import NetworkSecurity from './Images/Bcapic/NetworkSecurity.png'
import Pa from './Images/Bcapic/PAccounting.png'

const BcaFourthSem = () => {
    return (
        <div> 
            < MiniNavBar />
            <h1 className='SemHeading'>BCA FOURTH SEMESTER SUBJECTS</h1>
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

        </div>
    )
}

export default BcaFourthSem
