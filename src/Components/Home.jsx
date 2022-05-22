import React from 'react'
import { NavLink } from 'react-router-dom'
import BcaLogo from './Images/Bcapic/BCALOGO.png'
import BtechLogo from './Images/Bcapic/BTECHLOGO.png'
import McaLogo from './Images/Bcapic/McaLogo.png'
import MtechLogo from './Images/Bcapic/Mtech.png'

import SocialMediaIcons from '../SocialMediaIcons';

const Home = () => {
    return (
         <div> 
<div className="card-group">
  <div className="card">
    <div className="card-body">
    <NavLink className="btn btn-"  to="/Contact/BcaAllPage"><img src ={BcaLogo} alt='BcaImg'></img></NavLink>
     <div className='card-footer'>
      <h4>Bachelor Of Computer Applications</h4>
    </div>
    </div>
 </div>

  <div className="card">
    <div className="card-body">
    <NavLink className="btn btn-"  to="/Contact/BtechAllPage"><img src ={McaLogo} alt='McaImg'></img></NavLink>
<div className='card-footer'>
     <h4>Master of Computer Applications</h4>
    </div>
    </div>
  </div>
  </div>
  
<div className='BCA_BtechLogo'>
<div className="card-group">
  <div className="card">
    <div className="card-body">
    <NavLink className="btn btn-"  to="/Contact/BtechAllPage"><img src ={BtechLogo} alt='BtechImg'></img></NavLink>
     <div className='card-footer'>
      <h4>Bachelor of Technology</h4>
    </div>
    </div>
 </div>

  <div className="card">
    <div className="card-body">
    <NavLink className="btn btn-"  to="/Contact/BtechAllPage"><img src ={MtechLogo} alt='MtechImg'></img></NavLink>
<div className='card-footer'>
     <h4>Master of Technology</h4>
    </div>
    </div>
  </div>
  </div>



</div>
<SocialMediaIcons />
        </div>
      
        
    )
}

export default Home