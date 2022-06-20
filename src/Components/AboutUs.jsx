import React from 'react'
import './About.css'
import LalanPic from './Images/LalanProfilePic01.jpg'
import TusharPic from './Images/TusharProfilePic01.jpg'
import { IoLogoGithub,IoLogoLinkedin,IoLogoInstagram,IoLogoFacebook,IoLogoTwitter } from "react-icons/io5";

const AboutUs = () => {
  return (
<div id='AboutpageFirstDiv'>
<h1>About webpage</h1>
<p className='AboutPagePeragraph'>As we all known that Being the college student , We all needs class notes and study materials like Previous year question papers , Programming questions , MCQ's and proper idea of course syllabus for this most of the students faces very much problem to collect their study matrials from different different resources it's also time consuming. To solve these issues and help students to overcome these problems we have developed this webpage which is currently a particular professionla courses l.e. Bachelors of Computer Applications (BCA) , but in future we are tend to cover more courses like B.Tech, MCA , M.Tech and many more...
<br />
<br />
The webpage helps students as here they can find updated curriculum of GGSIPU Courses. Here they can get complete notes according to syllabus ,ppts , previous years questions paper of theory exams both subjective and mcq form and also get practical questions like coding problems with their solutions and also they can compile code with the help of external compiler which is attached in below the code.
<b>
    All the resources available on the website are currently freely downloadable.</b> </p>
<br />
       <h3>Founder</h3>
 <header className="site-headerAbout clearfix">
 <section>
  <div className="leftsidepartOne">
         <img src={LalanPic} alt='ProfilePic'></img>  <br />
<h1 id='Pname'>Lalan Kumar</h1>
<h6>Student of Maharaja Surajmal Institute  | BCA 2022 |</h6>
<h5>Upcomming Graduate Trainee @ Tata Consultancy Services</h5>
<span className='FounderSocialMediaOne'>
<a href="https://github.com/lalankumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel" id="git"><IoLogoGithub/></label></a> &nbsp;
 <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel"  id='lndin'><IoLogoLinkedin/></label></a>&nbsp;
 <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel" id="insta"><IoLogoInstagram/></label></a>&nbsp;
 <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08"target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel" id='twter'><IoLogoTwitter/></label></a>
 </span>
  </div>
  {/* <div className="rightsidepartTwo"> 
         <img src={TusharPic}  alt='ProfilePic'></img>
         <p id='pnametushar'>Tushar Aggarwal</p>
         <p>Student of Maharaja Surajmal Institue | BCA 2022 |</p>
         <h5>Upcomming Associate Analyst @ Deloitte </h5>
         <span className='FounderSocialMediaTwo'>
         <a href="https://github.com/lalankumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel" id="gitone"><IoLogoGithub/></label></a>&nbsp;
 <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel"  id='lndinone'><IoLogoLinkedin/></label></a>&nbsp;
 <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel" id="instaone"><IoLogoInstagram/></label></a>&nbsp;
 <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08"target="_blank" rel="noopener noreferrer" alt="Social Icon">
 <label for="inputGithub" className="col-sm-1 col-from-lavel" id='twterone'><IoLogoTwitter/></label></a>
 </span>
  </div> */}

{/* <div className="card">
<img src={LalanPic} alt='ProfilePic'></img>
    <li><h2>What is Data Mining? </h2></li>
      
      </div> */}


 </section>
 <hr />
</header>

    </div>
  )
}

export default AboutUs