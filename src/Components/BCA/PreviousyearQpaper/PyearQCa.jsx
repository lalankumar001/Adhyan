import React from 'react'
import pic01 from './PreviousYearPaper/CA18.png'
import pic02 from './PreviousYearPaper/CA17A.png'
import pic03 from './PreviousYearPaper/CA17B.png'
import pic04 from './PreviousYearPaper/CA14.png'
import pic05 from './PreviousYearPaper/CA13.png'
import pic06 from './PreviousYearPaper/CA12.png'

const PyearQCa = () => {
  return (
    <div>
    <div className="card text-center">
    <div className="card-header"><b>Computer Architecture 2018</b></div>
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
    <div className="card-header"><b>Computer Architecture 2017</b></div>
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
    <div className="card-header"><b>Computer Architecture 2014</b></div>
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
    <div className="card-header"><b>Computer Architecture 2013</b></div>
    <div className="card-body">
    <img src={pic05} alt='SubjectImg'></img>
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
    <div className="card-header"><b>Computer Architecture 2012</b></div>
    <div className="card-body">
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

export default PyearQCa