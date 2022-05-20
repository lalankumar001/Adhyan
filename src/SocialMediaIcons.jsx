import React from 'react'
// SocialMedia icons from react-icons 
import { FaTwitterSquare ,FaYoutube ,FaFacebook ,FaInstagramSquare ,FaLinkedin} from "react-icons/fa";

const SocialMediaIcons = () => {
    return (
        <div className='container'>
            <div className='buttons'>
                <ul className='navbar-nav'>
                          <li className="btn btn-">
                              <a href="https://www.youtube.com/channel/UCGoQTxp8Vd17oxUM7iNJ8dA" target="_blank" rel="noopener noreferrer"><FaYoutube  color='red' background-color="white"/></a>
                              </li> 
                              <li className="btn btn-">
                              <a href="https://www.facebook.com/asteptowardsunity/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                              </li> 
                              <li className="btn btn-">
                              <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  color='red'/></a>
                              </li> 
                              <li className="btn btn-">
                              <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                              </li> 
                              <li className="btn btn-">
                              <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                              </li> 
                </ul>

            </div>

        </div>
    )
}

export default SocialMediaIcons
