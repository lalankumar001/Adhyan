import React from 'react'
import pic01 from './PreviousYearPaper/dbms2018.png'
import pic02 from './PreviousYearPaper/dbms2017.png'
import pic03 from './PreviousYearPaper/dbms2017B.png'
import pic04 from './PreviousYearPaper/dbms2016.png'
import pic05 from './PreviousYearPaper/dbms2013.png'
import pic06 from './PreviousYearPaper/dbms2013B.png'

const PyearQDbms = () => {
  return (
    <div>      
    <div className="card text-center">
    <div className="card-header"><b>Database Management System 2018</b></div>
    <div className="card-body">
    <img src={pic01} alt='SubjectImg'></img>
    </div>
    <button>
        <details>
          <summary><b>Click to view Solution</b></summary>
             <h3>Solution Comming soon</h3> 
        </details>
      </button>
      <hr />
    </div>

    <div className="card text-center">
    <div className="card-header"><b>Database Management System 2017</b></div>
    <div className="card-body">
    <img src={pic02} alt='SubjectImg'></img>
    <img src={pic03} alt='SubjectImg'></img>
    </div>
    <button>
        <details>
          <summary><b>Click to view Solution</b></summary>
             <h3>Solution Comming soon</h3> 
        </details>
      </button>
      <hr />
    </div>

    <div className="card text-center">
    <div className="card-header"><b>Database Management System 2016</b></div>
    <div className="card-body">
    <img src={pic04} alt='SubjectImg'></img>
    </div>
    <button>
        <details>
          <summary><b>Click to view Solution</b></summary>
             <h3>Solution Comming soon</h3> 
        </details>
      </button>
      <hr />
    </div>

    <div className="card text-center">
    <div className="card-header"><b>Database Management System 2013</b></div>
    <div className="card-body">
    <img src={pic05} alt='SubjectImg'></img>
    <img src={pic06} alt='SubjectImg'></img>
    </div>
    <button>
        <details>
          <summary><b>Click to view Solution</b></summary>
             <h3>Solution Comming soon</h3> 
        </details>
      </button>
      <hr />
    </div>
    </div>
  )
}

export default PyearQDbms