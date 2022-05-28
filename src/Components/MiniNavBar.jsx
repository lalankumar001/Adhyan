import React from 'react'
import { NavLink } from 'react-router-dom'

const MiniNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-info bg-secondary">
               <div className="container">
                   <span className="">
            
                    <NavLink to="/Contact/BcaAllPage" className="btn btn-">Home</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaFirstSem" className="btn btn-">First Sem</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaSecondSem"className="btn btn-">Second Sem</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaThirdSem" className="btn btn-">Third Sem</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaFourthSem" className="btn btn-">Fourth Sem</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaFifthSem"  className="btn btn-">Fifth Sem</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaSixthSem"  className="btn btn-">Sixth Sem</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaAllPracticals" className="btn btn-">Practicals</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaPreviousYearQuesPaper" className="btn btn-">Question's paper</NavLink>
                    <NavLink to="/Contact/BcaAllPage/BcaAllMcq" className="btn btn-">MCQ'S</NavLink>
                
                    </span>
    </div>
</nav>
        </div>
    )
}

export default MiniNavBar
