import React from 'react'
import { NavLink } from 'react-router-dom'
import MiniNavBar from './MiniNavBar'
import OS from './Images/Bcapic/OS.png'
import Linux from './Images/Bcapic/linux.png'
import CG from './Images/Bcapic/CG.png'

const BcaFifthSem = () => {
    return (
        <div>
            <MiniNavBar />
            <h1 className='SemHeading'>BCA FIFTH SEMESTER SUBJECTS</h1>
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
        </div>
    )
}

export default BcaFifthSem
