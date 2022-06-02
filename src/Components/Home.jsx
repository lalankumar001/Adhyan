import React from 'react'
import { NavLink } from 'react-router-dom'
import pic02 from './Images/Bcapic/BCALOGO.png'
import SocialMediaIcons from '../SocialMediaIcons';

const Home = () => {
    return (
         <div id='main'>
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
{/* <SocialMediaIcons /> */}
        </div>
      
        
    )
}

export default Home