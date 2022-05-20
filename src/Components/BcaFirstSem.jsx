import React from 'react'
import MiniNavBar from './MiniNavBar'
import MathImg from './Images/Bcapic/Mathematic-1.png'
import TcImg from './Images/Bcapic/Technical communication.png'
import CprogrammingImg from './Images/Bcapic/Programing using c.png'
import ComputerandItImg from './Images/Bcapic/Intro to computer and it.png'
import Wtech from './Images/Bcapic/WebTech.png'
import { NavLink } from 'react-router-dom'


const BcaFirstSem = () => {
    return (
        <div>
            <MiniNavBar />
            <h1 className='SemHeading'>BCA FIRST SEMESTER SUBJECTS</h1>
            <div className="card text-center">
            <div className="card-header"><h2>Discrete Mathematics</h2></div>
  <div className="card-body">
    <NavLink to="/Contact/BcaAllPage/BcaMath_1" className='btn btn-'><img src={MathImg} alt='SubjectImg'></img></NavLink>
  </div>
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











        </div>
    )
}

export default BcaFirstSem
