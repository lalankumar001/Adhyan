import React from 'react'
import pic01 from './PreviousYearPaper/AI2019.png'
import pic02 from './PreviousYearPaper/AI2018.png'
import pic03 from './PreviousYearPaper/AI2017.png'
import pic04 from './PreviousYearPaper/AI2015.png'
import pic05 from './PreviousYearPaper/AI2014.png'



const PyearQAI = () => {
  return (
    <div>
      <div className="card text-center">
    <div className="card-header"><b>Artifical Intelligence 2019</b></div>
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
    <div className="card-header"><b>Artifical Intelligence 2018</b></div>
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
    <div className="card-header"><b>Artifical Intelligence 2017</b></div>
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
    <div className="card-header"><b>Artifical Intelligence 2015</b></div>
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
    <div className="card-header"><b>Artifical Intelligence 2014</b></div>
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

    </div>
  )
}

export default PyearQAI