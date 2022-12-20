import React from 'react'
import Logo from './Images/adhyanlogo.png'

const AllPageFooter = () => {
  return (
    <div className='FooterPage'>
      
      <div class="container w-100 text-center justify-content-between ">
      <div class="row">
      <div class="col">
        <img src={Logo} alt="" className='w-100 h-100 '/>
      </div>
      <div class="col text-start text-decoration-none">
       <h2>Courses</h2>
      <ul> 
        <li>
        <a href="">BCA</a>
        </li>
        <li>
        <a href="">Btech</a>
        </li>
        <li>
        <a href="">MCA</a>
        </li>
       </ul>
      </div>
      <div class="col">
       <h2>About</h2> 
       <a href="">Privacy policy</a>
       <a href="">Terms and conditions</a>
      </div>
      <div class="col">Contact</div>
      </div>
      </div>

      {/* <a href="https://www.youtube.com/channel/UCGoQTxp8Vd17oxUM7iNJ8dA" target="_blank" rel="noopener noreferrer"><FaYoutube  color='red' background-color="white"/></a>
      <a href="https://www.facebook.com/asteptowardsunity/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  color='red'/></a>
      <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
      <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a> */}
  
  <h3 className='Footertext text-center h-100 fs-3 fw-bolder'>Copyright © 2022 Adhyan. All rights reserved.</h3>
    </div>
  )
}

export default AllPageFooter