import React from 'react'
import pic08 from './PreviousYearPaper/CG2013.png'
import pic07 from './PreviousYearPaper/CG2013B.png'
import pic06 from './PreviousYearPaper/CG2014.png'
import pic05 from './PreviousYearPaper/CG2015.png'
import pic04 from './PreviousYearPaper/CG2016.png'
import pic03 from './PreviousYearPaper/CG2017.png'
import pic02 from './PreviousYearPaper/CG2017B.png'
import pic01 from './PreviousYearPaper/CG2018.png'

const PyearQCG = () => {
  return (
    <div>
      <div className="card text-center">
    <div className="card-header"><b>Computer Graphics 2018</b></div>
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
    <div className="card-header"><b>Computer Graphics 2017</b></div>
    <div className="card-body">
    <img src={pic03} alt='SubjectImg'></img>
    <img src={pic02} alt='SubjectImg'></img>
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
    <div className="card-header"><b>Computer Graphics 2016</b></div>
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
    <div className="card-header"><b>Computer Graphics 2015</b></div>
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
    <div className="card-header"><b>Computer Graphics 2014</b></div>
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

    <div className="card text-center">
    <div className="card-header"><b>Computer Graphics 2013</b></div>
    <div className="card-body">
    <img src={pic08} alt='SubjectImg'></img>
    <img src={pic07} alt='SubjectImg'></img>
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

export default PyearQCG