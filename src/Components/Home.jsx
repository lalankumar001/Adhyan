import React from 'react'
import { NavLink } from 'react-router-dom'
import pic02 from './Images/Bcapic/BCALOGO.png'

// import BtechLogo from './Images/Bcapic/BTECHLOGO.png'
// import McaLogo from './Images/Bcapic/McaLogo.png'
// import MtechLogo from './Images/Bcapic/Mtech.png'

import SocialMediaIcons from '../SocialMediaIcons';

const Home = () => {
    return (
         <div id='main'> 
           {/* below code for 4 card in one page */}
{/* <div className="card-group">
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

</div> */}

<header class="site-header clearfix">
 <section>
  <div class="leftside"> 
   <img src={pic02} className="img-thumbnail " alt='ProfilePic'></img>
  </div>
  <div class="rightside"> 
    <h1>Hey Folks.. </h1>
   <h1>Welcome To The Adhyan</h1>
   <p>The Website For Complete Study Material and many more </p>
   {/* <span className=''>
 <button className='first_btn'> <NavLink  activeClassName="menu_active" className="nav-link"  to="/About">About Me</NavLink></button>
 <button className='second_btn'> <NavLink activeClassName="menu_active" className="nav-link" to="/Projects">Projects</NavLink> </button>
 </span> */}
  </div>
  
 </section>

</header>
<span className='rightside_btn'>
 <button className='first_btn'> <NavLink  activeClassName="menu_active" className="nav-link"  to="/Contact/BcaAllPage">BCA</NavLink></button>
 <button className='second_btn'> <NavLink activeClassName="menu_active" className="nav-link" to="/Contact/BtechAllPage">MCA</NavLink> </button>
 <button className='second_btn'> <NavLink activeClassName="menu_active" className="nav-link" to="/Contact/BtechAllPage">BTECH</NavLink> </button>
 <button className='second_btn'> <NavLink activeClassName="menu_active" className="nav-link" to="/Contact/BtechAllPage">MTECH</NavLink> </button>
 </span>
<SocialMediaIcons />
        </div>
      
        
    )
}

export default Home