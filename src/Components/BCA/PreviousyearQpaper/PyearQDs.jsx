import React from 'react'
import pic01 from './PreviousYearPaper/ds2018.png'
import pic02 from './PreviousYearPaper/ds2018B.png'
import pic03 from './PreviousYearPaper/ds2017.png'
import pic04 from './PreviousYearPaper/ds2017B.png'
import pic05 from './PreviousYearPaper/ds2016.png'
import pic06 from './PreviousYearPaper/ds2015.png'
import pic07 from './PreviousYearPaper/ds2014.png'

const PyearQDs = () => {
  return (
    <div>
    <div className="card text-center">
    <div className="card-header"><b>Data Structure Using C 2018</b></div>
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
    <div className="card-header"><b>Data Structure Using C 2017</b></div>
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
    <div className="card-header"><b>Data Structure Using C 2016</b></div>
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
    <div className="card-header"><b>Data Structure Using C 2015</b></div>
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
    <div className="card-header"><b>Data Structure Using C 2014</b></div>
    <div className="card-body">
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

export default PyearQDs