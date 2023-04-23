import React from 'react'
import pic01 from './PreviousYearPaper/CN18.png'
import pic02 from './PreviousYearPaper/CN17.jpg'
import pic03 from './PreviousYearPaper/CN16.png'
import pic04 from './PreviousYearPaper/CN15A.png'
import pic05 from './PreviousYearPaper/CN15B.jpg'
import pic06 from './PreviousYearPaper/CN14.png'
import pic07 from './PreviousYearPaper/CN13.png'

const PyearQCN = () => {
  return (
    <div>
    <div className="card text-center">
    <div className="card-header"><b>Computer Network 2018</b></div>
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
    <div className="card-header"><b>Computer Network 2017</b></div>
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
    <div className="card-header"><b>Computer Network 2016</b></div>
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
    <div className="card-header"><b>Computer Network 2015</b></div>
    <div className="card-body">
    <img src={pic04} alt='SubjectImg'></img>
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
    <div className="card-header"><b>Computer Network 2014</b></div>
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
    <div className="card-header"><b>Computer Network 2013</b></div>
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

export default PyearQCN