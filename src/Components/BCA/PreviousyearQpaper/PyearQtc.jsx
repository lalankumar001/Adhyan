import React from 'react'
import pic01 from './PreviousYearPaper/tcc2018.png'
import pic02 from './PreviousYearPaper/tc2017.png'
import pic03 from './PreviousYearPaper/tc2016.png'
import pic04 from './PreviousYearPaper/tc2015.png'
import pic05 from './PreviousYearPaper/tc2014.png'
import pic06 from './PreviousYearPaper/tc2012.png'

const PyearQtc = () => {
  return (
    <div>
      <div className="card text-center">
    <div className="card-header"><b>Technical Communication 2018</b></div>
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
    <div className="card-header"><b>Technical Communication 2017</b></div>
    <div className="card-body">
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
    <div className="card-header"><b>Technical Communication 2016</b></div>
    <div className="card-body">
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
    <div className="card-header"><b>Technical Communication 2015</b></div>
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
    <div className="card-header"><b>Technical Communication 2014</b></div>
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
    <div className="card-header"><b>Technical Communication 2012</b></div>
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

export default PyearQtc