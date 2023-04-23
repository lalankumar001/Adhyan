import React from 'react'
import pic01 from './PreviousYearPaper/C++15A.png'
import pic02 from './PreviousYearPaper/C++15B.png'
import pic03 from './PreviousYearPaper/C++14.png'
import pic04 from './PreviousYearPaper/C++13.jpg'
const PyearQOOP = () => {
  return (
    <div>
    <div className="card text-center">
    <div className="card-header"><b>Object Oriented Programming Using C++ 2015</b></div>
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
    <div className="card-header"><b>Object Oriented Programming Using C++ 2014</b></div>
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
    <div className="card-header"><b>Object Oriented Programming Using C++ 2013</b></div>
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
    </div>
  )
}

export default PyearQOOP