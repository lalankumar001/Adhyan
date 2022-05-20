import React from 'react'
import { NavLink } from 'react-router-dom'
import BcaLogo from './Images/Bcapic/BCALOGO.png'
import BtechLogo from './Images/Bcapic/BTECHLOGO.png'
import SocialMediaIcons from '../SocialMediaIcons';

const Home = () => {
    return (
         <div> 
        <div className="Bca_BtechLogo">
          <div className='cardd'> 
         <NavLink className="btn"  to="/Contact/BcaAllPage"><img src ={BcaLogo} alt='BcaImg'></img></NavLink>
         </div>
        
         <div className='cardd'>
         <NavLink className="btn"  to="/Contact/BtechAllPage"><img src ={BtechLogo} alt='BtechImg'></img></NavLink>
         </div>
        </div>
        
      < SocialMediaIcons />
        </div>
        
    )
}

export default Home