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
               <NavLink to='/Contact/BcaAllPage/BcaPractical_1' ><button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_2"><button><h2>2<sup>nd</sup>  Practical</h2>Fundamentals Of Computer & IT</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_8"><button><h2>3<sup>rd</sup>  Practical</h2>Web Technologies</button></NavLink>
                <button><h2>4<sup>th</sup>  Practical</h2>Web Based Programming</button>
                <button><h2>5<sup>th</sup>  Practical</h2>Data Structure Using 'C'</button>
                <button><h2>6<sup>th</sup>  Practical</h2>Front End Design Tool VB.net</button>
                <button><h2>7<sup>th</sup>  Practical</h2>C++ Programming </button>
                <button><h2>8<sup>th</sup>  Practical</h2>Java Programming</button>
                <button><h2>9<sup>th</sup>  Practical</h2>Software Engineering</button>
                <button><h2>10<sup>th</sup>  Practical</h2>Linux Operating System</button>
                <button><h2>11<sup>th</sup>  Practical</h2>Computer Graphics</button>
                <button><h2>12<sup>th</sup>  Practical</h2>Internet Of Things</button>
               
        </div>
        <AllPageFooter />
        </div>
    )
}

export default BcaAllPracticals
