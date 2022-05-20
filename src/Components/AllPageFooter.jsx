import React from 'react';
import '../Components/AllFooter.css'
import { FaTwitterSquare ,FaYoutube ,FaFacebook ,FaInstagramSquare ,FaLinkedin,FaRegCopyright} from "react-icons/fa";

const AllPageFooter = () => {
  return <div className='justcheck'>
      <h6>COPYRIGHT<FaRegCopyright />2022 |Adhyan| DESIGNED AND DEVELOPED BY : Adhyan Group |
      <a href="https://www.youtube.com/channel/UCGoQTxp8Vd17oxUM7iNJ8dA" target="_blank" rel="noopener noreferrer"><FaYoutube  color='red' background-color="white"/></a>
      <a href="https://www.facebook.com/asteptowardsunity/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  color='red'/></a>
      <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
      <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
     </h6>
  </div>;
};

export default AllPageFooter;
