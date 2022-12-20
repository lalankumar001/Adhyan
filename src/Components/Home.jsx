import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowDown } from "react-icons/ai";
import pic03 from './Images/HomepagePIc.png'
const Home = () => {
    return (
         <div id='main'>
<header class="site-header clearfix">
 <section>
  <div class="leftside"> 
   <img src={pic03} className="img-thumbnail " alt='ProfilePic'></img>
  </div>
  <div class="rightside"> 
    <h1>Hey Folks.. </h1>
   <h1>Welcome To The Adhyan</h1>
   <p>The Website For Complete Study Material and many more </p>
   <h2>Courses  <AiOutlineArrowDown /> </h2>
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