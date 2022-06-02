import React from 'react'
import MiniNavBar from './MiniNavBar'
import AllPageFooter from './AllPageFooter'
import { NavLink } from 'react-router-dom'

const BcaAllPracticals = () => {
    return (
        <div>
            <MiniNavBar />
            <span className='SemHeading'><h2>BCA ALL SEMESTER PRACTICALS </h2></span>
            <div className="Practical_card">
               <NavLink to='/Contact/BcaAllPage/BcaPractical_1' ><button><h2>1<sup>st</sup>   Practical</h2>Introduction to Progrmming Language Usig 'C'</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_2"><button><h2>2<sup>nd</sup>    Practical</h2>Fundamentals Of Computer & IT</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_3"><button><h2>3<sup>rd</sup>    Practical</h2>Web Technologies</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_4"><button><h2>4<sup>th</sup>    Practical</h2>Web Based Programming</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_5"><button><h2>5<sup>th</sup>    Practical</h2>Data Structure Using 'C'</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_6"><button><h2>6<sup>th</sup>    Practical</h2>Front End Design Tool VB.net</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_7"><button><h2>7<sup>th</sup>    Practical</h2>C++ Programming </button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_8"><button><h2>8<sup>th</sup>    Practical</h2>Java Programming</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_11"><button><h2>9<sup>th</sup>   Practical</h2>Software Engineering</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_9"><button><h2>10<sup>th</sup>   Practical</h2>Linux Operating System</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_10"><button><h2>11<sup>th</sup>  Practical</h2>Computer Graphics</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_12"><button><h2>12<sup>th</sup>  Practical</h2>Internet Of Things</button></NavLink>
               
        </div>
        <AllPageFooter />
        </div>
    )
}

export default BcaAllPracticals
