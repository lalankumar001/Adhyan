import React from 'react'
import MiniNavBar from './MiniNavBar'
import AllPageFooter from './AllPageFooter'
import { NavLink } from 'react-router-dom'

const BcaAllMcq = () => {
    return (
        <div>
            < MiniNavBar />
            <div className="card">
                <span className="MCQ_card">
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/Math_1Mcq"><button> Mathematics-1</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/CProgramMcq"><button>Programming Using C</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/Computer_ItMcq"><button>Computer and IT</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/WebTech_mcq"><button>Web Technology</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/TC_mcq"><button>Technical Communication</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/Math_2Mcq"><button>Mathematics-2</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/WBProgramMcq"><button>Web Based Programming</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/DSMcq"><button>Data structure using C</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/DBMSMcq"><button>Database Management System</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/FEDTMcq"><button>Front End Design Tool</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/CNMcq"><button>Computer Networks</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/CAMcq"><button>Computer Architecture</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/CPlusPlusMcq"><button>OOP Using C++</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/PomMcq"><button>Principles of Management</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/JavaMcq"><button>Java Programming</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/STMcq"><button>Software Engineering</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/AIMcq"><button>Artificial Intelligence</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/NetworkSmcq"><button>Network Security</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/POAMcq"><button>Principles of Accounting</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/OSMcq"><button>Operating System</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/LinuxMcq"><button>Linux Environment</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/CGMcq"><button>Computer Graphics</button></NavLink>
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/DWDMMcq"><button>Data Ware Housing and mining</button></NavLink >
            <NavLink to="/Contact/BcaAllPage/BcaAllMcq/EComMcq"><button>E-Commerce</button></NavLink>
             {/* <img src={Math} className="card-img-top" alt="SubjectImage"></img>
                 <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" className="btn btn-primary">Go somewhere</a> 
                        </div> */}
                        </span>
                        </div>
                        

 <br />                
<hr />
             <AllPageFooter />
<hr />
        </div>
    )
}

export default BcaAllMcq
