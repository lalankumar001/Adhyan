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
               <NavLink to="/Contact/BcaAllPage/BcaPractical_2"><button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button></NavLink>
               <NavLink to="/Contact/BcaAllPage/BcaPractical_8"><button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button></NavLink>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
                <button><h2>1<sup>st</sup>  Practical</h2>Introduction to Progrmming Language Usig 'C'</button>
               
        </div>
        <AllPageFooter />
        </div>
    )
}

export default BcaAllPracticals
