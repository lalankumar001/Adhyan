import React from 'react'
import { NavLink } from 'react-router-dom'
import MiniNavBar from './MiniNavBar'
import DHDM from './Images/Bcapic/dhdm.png'
import ECOM from './Images/Bcapic/Ecom.png'

const BcaSixthSem = () => {
    return (
        <div>
            <MiniNavBar />
            <h1 className='SemHeading'>BCA SIXTH SEMESTER SUBJECTS</h1>
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
        </div>
    )
}

export default BcaSixthSem
