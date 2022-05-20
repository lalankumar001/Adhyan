import React from 'react'
import MiniNavBar from './MiniNavBar'
import CN from './Images/Bcapic/CN.png'
import CA from './Images/Bcapic/CA.png'
import OOPImg from './Images/Bcapic/Oop.png'
import Pmanagement from './Images/Bcapic/PrincipleofManagement.png'
import { NavLink } from 'react-router-dom'


const BcaThirdSem = () => {
    return (
        <div>
            < MiniNavBar />
            <h1 className='SemHeading'>BCA THIRD SEMESTER SUBJECTS</h1>
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

        </div>
    )
}

export default BcaThirdSem
