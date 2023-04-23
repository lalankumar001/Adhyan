import React from 'react'
import pic01 from './PreviousYearPaper/POA2017.png'
import pic02 from './PreviousYearPaper/POA2017B.png'
import pic03 from './PreviousYearPaper/POA2016.png'
import pic04 from './PreviousYearPaper/POA2016B.png'
import pic05 from './PreviousYearPaper/POA2015.png'
import pic06 from './PreviousYearPaper/POA2015B.png'
import pic07 from './PreviousYearPaper/POA2013.png'
import pic08 from './PreviousYearPaper/POA2013B.png'
import pic09 from './PreviousYearPaper/POA2012.png'
import pic10 from './PreviousYearPaper/POA2012B.png'

const PyearQPa = () => {
  return (
    <div>
    <div className="card text-center">
    <div className="card-header"><b>Principles of Accounting 2017</b></div>
    <div className="card-body">
    <img src={pic01} alt='SubjectImg'></img>
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
    <div className="card-header"><b>Principles of Accounting 2016</b></div>
    <div className="card-body">
    <img src={pic03} alt='SubjectImg'></img>
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
    <div className="card-header"><b>Principles of Accounting 2015</b></div>
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

    <div className="card text-center">
    <div className="card-header"><b>Principles of Accounting 2013</b></div>
    <div className="card-body">
    <img src={pic07} alt='SubjectImg'></img>
    <img src={pic08} alt='SubjectImg'></img>
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
    <div className="card-header"><b>Principles of Accounting 2012</b></div>
    <div className="card-body">
    <img src={pic09} alt='SubjectImg'></img>
    <img src={pic10} alt='SubjectImg'></img>
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

export default PyearQPa