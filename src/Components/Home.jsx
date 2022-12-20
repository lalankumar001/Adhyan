import React from 'react'
import { NavLink } from 'react-router-dom'
import Hero from './Images/HomeHero.svg'
import Instagram from './Images/instagra.png'
import Linkdin from './Images/linkdin.png'
import Twitter from './Images/twitter.png'
import Youtube from './Images/youtube.png'
import Footer from '../Components/AllPageFooter'
const Home = () => {
    return (
          <div>
        <div className='mt-5 p-5'>

            <div class="container text-center">
                <div class="row row-cols-2" id='HeroSection'>
                    {/* Home hero text section */}
                    <div class="col mt-5 p-5" id='HeroTextSection'>
                        <h1 id='HeroText' className='mt-3 p-2 text-start sm:text-start'>Welcome to Adhyan</h1>
                        <h3 className='text-start fw-bold sm: mt-1 p-1 text-start'>Unlock Your Learning Potential with <b className='text-info'>us!</b></h3>
                        {/* Home hero button section */}
                        <div className="col text-start mt-5 ">
                            <button className='btn btn-dark'> <NavLink activeClassName="menu_active" className="nav-link" to="/Contact/BcaAllPage">View Courses</NavLink></button>
                            <button className='btn btn-light border '> <NavLink activeClassName="menu_active" className="nav-link" to="/Contact/BcaAllPage">Explore</NavLink></button>
                        </div>
                    </div>
                    {/* Home hero img section */}
                    <div class="col">
                        <img src={Hero} alt="" className='mt-2 w-100 h-100 p-3 ' id='HeroImgSection' />
                    </div>
                </div>
            </div>
        </div>

             <div class="container w-100 text-center ">
  <div class="row">
    <h1 className='fs-1 fw-bolder mb-5'>Follow us</h1>
    <div class="col">
      <a href="https://www.instagram.com/lalan_kumar001/" target="_blank"><img src={Instagram} alt="" className='w-75 h-75' /></a>
    </div>
    <div class="col">
     <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank"> <img src={Linkdin} alt="linkedinImg"className='w-75 h-75' /></a>
    </div>
    <div class="col">
     <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08" target="_blank"> <img src={Twitter} alt="" className='w-75 h-75'/></a>
    </div>
    <div class="col">
     <a href="https://www.youtube.com/channel/UCGoQTxp8Vd17oxUM7iNJ8dA" target="_blank"> <img src={Youtube} alt="YoutubeImg" className='w-75 h-75'/></a>
    </div>
  </div>
</div>
        <Footer />
        </div>

    )
}

export default Home