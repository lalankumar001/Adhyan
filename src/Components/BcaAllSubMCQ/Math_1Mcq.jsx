import React from 'react';
import './AllMcqPage.css'
import AllPageFooter from '../AllPageFooter';
// all question or options screenshoot here 
import pic01 from '../BcaAllSubMCQ/math1Qpic/01.png'
import pic02 from '../BcaAllSubMCQ/math1Qpic/02.png'
import pic03 from '../BcaAllSubMCQ/math1Qpic/03.png'
import pic04 from '../BcaAllSubMCQ/math1Qpic/04.png'
import pic05 from '../BcaAllSubMCQ/math1Qpic/05.png'
import pic06 from '../BcaAllSubMCQ/math1Qpic/06.png'
import pic07 from '../BcaAllSubMCQ/math1Qpic/07.png'
import pic08 from '../BcaAllSubMCQ/math1Qpic/08.png'
import pic09 from '../BcaAllSubMCQ/math1Qpic/09.png'
import pic10 from '../BcaAllSubMCQ/math1Qpic/10.png'
import pic11 from '../BcaAllSubMCQ/math1Qpic/11.png'
import pic12 from '../BcaAllSubMCQ/math1Qpic/12.png'
import pic13 from '../BcaAllSubMCQ/math1Qpic/13.png'
import pic14 from '../BcaAllSubMCQ/math1Qpic/14.png'
import pic15 from '../BcaAllSubMCQ/math1Qpic/15.png'
import pic16 from '../BcaAllSubMCQ/math1Qpic/16.png'
import pic17 from '../BcaAllSubMCQ/math1Qpic/17.png'
import pic18 from '../BcaAllSubMCQ/math1Qpic/18.png'
import pic19 from '../BcaAllSubMCQ/math1Qpic/19.png'
import pic20 from '../BcaAllSubMCQ/math1Qpic/20.png'
import pic21 from '../BcaAllSubMCQ/math1Qpic/21.png'
import pic22 from '../BcaAllSubMCQ/math1Qpic/22.png'
import pic23 from '../BcaAllSubMCQ/math1Qpic/23.png'
import pic24 from '../BcaAllSubMCQ/math1Qpic/24.png'
import pic25 from '../BcaAllSubMCQ/math1Qpic/25.png'
import pic26 from '../BcaAllSubMCQ/math1Qpic/26.png'
import pic27 from '../BcaAllSubMCQ/math1Qpic/27.png'
import pic28 from '../BcaAllSubMCQ/math1Qpic/28.png'
import pic29 from '../BcaAllSubMCQ/math1Qpic/29.png'
import pic30 from '../BcaAllSubMCQ/math1Qpic/30.png'
import pic31 from '../BcaAllSubMCQ/math1Qpic/31.png'
import pic32 from '../BcaAllSubMCQ/math1Qpic/32.png'
import pic33 from '../BcaAllSubMCQ/math1Qpic/33.png'
import pic34 from '../BcaAllSubMCQ/math1Qpic/34.png'
import pic35 from '../BcaAllSubMCQ/math1Qpic/35.png'
import pic36 from '../BcaAllSubMCQ/math1Qpic/36.png'
import pic37 from '../BcaAllSubMCQ/math1Qpic/37.png'
import pic38 from '../BcaAllSubMCQ/math1Qpic/38.png'
import pic39 from '../BcaAllSubMCQ/math1Qpic/39.png'
import pic40 from '../BcaAllSubMCQ/math1Qpic/40.png'

const Math_1Mcq = () => {
 return <div className='redred'>
<h1>Mathematics -1 MCQ Questions</h1>
  <div>
<ol>    
        {/* Question write below in h2 tage */}
    <div className="card">
  <li><h2>A__________is an ordered collection of objects.</h2></li>
    <div className='AnswerMCQ'>
            {/* correct ans write in h3 tag and change option according like a b c d */}
      <h4>A) Relation </h4>
      <h4>B) Functions </h4>
      <h3>C) Set </h3>
      <h4>D) Proposition </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    <div className="card">
      {/* question type below */}
  <li><h2>Which of the following statement is a proposition?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Get me a glass of milkshake </h4>
      <h4>B) God bless you! </h4>
      <h3>C) What is the time now? </h3>
      <h4>D) The only odd prime number is 2 </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic01} alt="question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) If  I  love cricket then I am in Bangalore</h4>
      <h4>B) If  I  am in Bangalore then I love cricket</h4>
      <h3>C) I am not in Bangalore </h3>
      <h4>D) I love cricket</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>


    <div className="card">
      {/* question type below */}
  <li><h2>Let P: This is a great website, Q : You should not come back here. Then This is a great website and you should come back here. Is best represented by? </h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) ~P V ~ Q</h4>
      <h4>B) P ^ ~ Q</h4>
      <h3>C) P V Q</h3>
      <h4>D) P ^ Q</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic02} alt="question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A)<img src={pic03} alt="option screenshoot" /> </h4>
      <h4>B)<img src={pic04} alt="option screenshoot" /> </h4>
      <h3>C)<img src={pic05} alt="option screenshoot" /> </h3>
      <h4>D)<img src={pic06} alt="option screenshoot" /> </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>What is an ordered collection of objects called?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Relation</h4>
      <h4>B) Function</h4>
      <h3>C) Set</h3>
      <h4>D) Proposition</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>Two sets are called disjoint if there ____________ is the empty set.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Union</h4>
      <h4>B) Difference</h4>
      <h3>C) Intersection</h3>
      <h4>D) Complement</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2> <img src={pic07} alt="question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A)<img src={pic08} alt="screenshoot" /> </h4>
      <h4>B)<img src={pic09} alt="screenshoot" /> </h4>
      <h3>C)<img src={pic10} alt="screenshoot" /> </h3>
      <h4>D)<img src={pic11} alt="screenshoot" /> </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic12} alt="question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A)<img src={pic13} alt="screenshoot" /> </h4>
      <h4>B)<img src={pic14} alt="screenshoot" /> </h4>
      <h3>C)<img src={pic15} alt="screenshoot" /> </h3>
      <h4>D)<img src={pic16} alt="screenshoot" /> </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>If G is the forest with 54 vertices and 17 connected components , G has ______ total number of edges.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 38</h4>
      <h4>B) 37</h4>
      <h3>C) 17/54</h3>
      <h4>D) 17/53</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>What is the value of x after this statement, assuming the initial value of x is 5? ‘if x equals to one then x=x+2 else x=0’ </h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 1</h4>
      <h4>B) 3</h4>
      <h3>C) 0</h3>
      <h4>D) 5</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic17} alt="question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A)<img src={pic18} alt="screenshoot" /> </h4>
      <h4>B)<img src={pic19} alt="screenshoot" /> </h4>
      <h3>C)<img src={pic20} alt="screenshoot" /> </h3>
      <h4>D)<img src={pic21} alt="screenshoot" /> </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>First Order Logic is also Known as ______________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) First Order Predicate Calculus </h4>
      <h4>B) Quantification Theory</h4>
      <h3>C) Lower Order Calculus</h3>
      <h4>D) All of the mentioned</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Which primitive tests two arguments to see if their values are the same expression?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Equal</h4>
      <h4>B) Eql</h4>
      <h3>C) Eq</h3>
      <h4>D) Equ</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Everyone wants to leam cosmology. “ This argument may be true for which domains?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) All students in your cosmology class</h4>
      <h4>B) All the cosmology learning students in the world</h4>
      <h3>C) Both of the mentioned</h3>
      <h4>D) None of the mentioned</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>An undirected graph has 8 vertices labelled 1 , 2 , …..8 and 31 edges. Vertices 1 , 3 , 5 , 7 have degree 8 and vertices 2 , 4 , 6 , 8 have degree 7. What is the degree of vertex 8?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 15</h4>
      <h4>B) 8</h4>
      <h3>C) 5</h3>
      <h4>D) 23</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>The less-than relation on a set of real number is _____________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Not a partial ordering because it is not asymmetric and irreflexive equals in antisymmetric</h4>
      <h4>B) a partial ordering since it is asymmetric and reflexive</h4>
      <h3>C) a partial ordering since it is antisymmetric and reflexive</h3>
      <h4>D) not a partial ordering because it is not antisymmetric and reflexive</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>In a 7 node directed cyclic graph, the number of Hamiltonian cycle is to be________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 728</h4>
      <h4>B) 450</h4>
      <h3>C) 360</h3>
      <h4>D) 260</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Which of the following is not a possible ordered pair for a matrix with 6 elements.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) (2 ,3)</h4>
      <h4>B) (3 ,2)</h4>
      <h3>C) (1 ,6)</h3>
      <h4>D) (3 ,1)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>A free semilattice has the _______ property.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Intersection</h4>
      <h4>B) Commutative and associative</h4>
      <h3>C) Identity</h3>
      <h4>D) Universal</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>DeMorgan’s theorem states that__________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) (AB)` = A`+ B` </h4>
      <h4>B) (A + B)` = A`*B</h4>
      <h3>C)  A` + B` = A`B`</h3>
      <h4>D) (AB)`=A`+B</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Determine the number of derangements of (2 , 4 , 6 , 1 , 3 , 5) that end with integer 2 , 4 and 6 in some order?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 128</h4>
      <h4>B) 29</h4>
      <h3>C) 54</h3>
      <h4>D) 36</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Berge graph is similar to ______ due to strong perfect graph theorem.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Line graph</h4>
      <h4>B) Perfect graph</h4>
      <h3>C) Bar graph </h3>
      <h4>D) Triangle free graph</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>How many 4 digits number can be formed by using 2 , 4 , 6, 8 , 10 , 12 without repetition of digits?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 15</h4>
      <h4>B) 42</h4>
      <h3>C) 70</h3>
      <h4>D) 127</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>In a colony , there are 55 members, Every member posts a greeting card to all the members . How many greeting cards were posted by them?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 990</h4>
      <h4>B) 890</h4>
      <h3>C) 2970</h3>
      <h4>D) 1980</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>The involution of A is Equal to ________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) A</h4>
      <h4>B) A`</h4>
      <h3>C) 1</h3>
      <h4>D) 0</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>A sublattice (say, S) of a lattice (say, L) is a convex sublattice of L if______</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) <img src={pic22} alt="option screenshoot" /></h4>
      <h4>B) <img src={pic23} alt="option screenshoot" /></h4>
      <h3>C) <img src={pic24} alt="option screenshoot" /></h3>
      <h4>D) <img src={pic25} alt="option screenshoot" /></h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic26} alt=" question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) <img src={pic27} alt="option screenshoot" /></h4>
      <h4>B) <img src={pic28} alt="option screenshoot" /></h4>
      <h3>C) <img src={pic29} alt="option screenshoot" /></h3>
      <h4>D) <img src={pic30} alt="option screenshoot" /></h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>A directed graph or digraph can have directed cycle in which___________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Starting node and ending node are different</h4>
      <h4>B) Starting node and ending node are same</h4>
      <h3>C) Minimum four vertices can be there</h3>
      <h4>D) Ending node does not exist</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic31} alt=" question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 6</h4>
      <h4>B) 5</h4>
      <h3>C) 9</h3>
      <h4>D) 4</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic32} alt=" question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) <img src={pic33} alt=" option screenshoot" /></h4>
      <h4>B) <img src={pic34} alt=" option screenshoot" /></h4>
      <h3>C) <img src={pic35} alt=" option screenshoot" /></h3>
      <h4>D) <img src={pic36} alt=" option screenshoot" /></h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic37} alt=" question screenshoot" /> </h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Semilattice</h4>
      <h4>B) Join semilattice</h4>
      <h3>C) Inter join semilattice</h3>
      <h4>D) Bounded lattice</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>A Poset in which every pair of elements has both a least upper bound and a greatest lower bound is termed as ________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) sublattice</h4>
      <h4>B) Lattice</h4>
      <h3>C) Trail</h3>
      <h4>D) Walk</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic38} alt=" question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) P(0)</h4>
      <h4>B) P(4)</h4>
      <h3>C) P(9)</h3>
      <h4>D) P(6)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>what is a procedure that returns a value that signals true or false?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) List</h4>
      <h4>B) Predicates</h4>
      <h3>C) Data</h3>
      <h4>D) None of the mentioned</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic39} alt=" question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) (101 , 22)</h4>
      <h4>B) (22 , 101)</h4>
      <h3>C) (145 , 265)</h3>
      <h4>D) (0 , 153)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>The ordered pairs of natural numbers are contained in P are ______ and ________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) ( 145 , 265) and ( 0 , 153)</h4>
      <h4>B) ( 22 , 101) and ( 0 , 153)</h4>
      <h3>C) ( 101 , 22) and (145 , 265)</h3>
      <h4>D) ( 101 , 22) and ( 0 , 153)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Simplify Y = AB` + ( A` + B )C.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) AB` + C</h4>
      <h4>B) AB + AC</h4>
      <h3>C) A`B + AC`</h3>
      <h4>D) AB + A</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Computational complexity of derangements is of_____________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) NP – complete</h4>
      <h4>B) NP – hard</h4>
      <h3>C) NP</h3>
      <h4>D) P</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Degree of a graph with 12 vertices is ________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 25</h4>
      <h4>B) 56</h4>
      <h3>C) 24</h3>
      <h4>D) 212</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>What is the value of x after this statement, assuming the initial value of x is 5? ‘if  x equals to one then x = x+2 else x=0’</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 1</h4>
      <h4>B) 3</h4>
      <h3>C) 0</h3>
      <h4>D) 5</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2><img src={pic40} alt=" question screenshoot" /></h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Union</h4>
      <h4>B) Intersection</h4>
      <h3>C) Set Difference</h3>
      <h4>D) Disjoint</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Let P : we should be honest. , Q : we should be dedicated. , R: we should be overconfident. Then ‘we should be honest or dedicated but not overconfident.’ Is best represented by?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) ~ P V ~ Q V R</h4>
      <h4>B) P ^ ~ Q ^ R</h4>
      <h3>C) P V Q ^ R</h3>
      <h4>D) P V Q ^ ~R</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>Which of the following two sets are disjoint?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) ( 1 , 3 , 5) and ( 1 , 3 , 6)</h4>
      <h4>B) ( 1 , 2 , 3) and ( 1 , 2 , 3)</h4>
      <h3>C) ( 1 , 3 , 5) and ( 2 , 3 , 4)</h3>
      <h4>D) ( 1 , 3 , 5) and ( 2 , 4 , 6)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    <div className="card">
      {/* question type below */}
  <li><h2>The set of positive integers is __________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Infinite</h4>
      <h4>B) Finite</h4>
      <h3>C) Subset</h3>
      <h4>D) Empty</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
    
    <div className="card">
      {/* question type below */}
  <li><h2>The intersection of the sets ( 1 , 2 , 5) and ( 1 , 2 , 6) is the set_______</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) (1 ,2)</h4>
      <h4>B) (5 ,6)</h4>
      <h3>C) (2 ,5)</h3>
      <h4>D) (1 ,6)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>What is the cardinality of the set of odd positive integers less than 10?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 10</h4>
      <h4>B) 5</h4>
      <h3>C) 3</h3>
      <h4>D) 20</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>How power set an empty set exactly has?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 1</h4>
      <h4>B) 2</h4>
      <h3>C) 3</h3>
      <h4>D) 0</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>Which of the following two sets are equal?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) A = ( 1 , 2 ) and B =(1)</h4>
      <h4>B) A = ( 1 , 2 ) and B =( 1 , 2 ,3)</h4>
      <h3>C) A = ( 1 , 2 ,3) and B =( 2 ,1 ,3)</h3>
      <h4>D) A = ( 1 , 2 ,4) and B =( 1 , 2 ,3)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>Find the number of ways of arranging the letters of the words DANGER , so that no vowel occupies odd place.</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) 36</h4>
      <h4>B) 48</h4>
      <h3>C) 144</h3>
      <h4>D) 96</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>Which of these is not a type of relation?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Reflexive</h4>
      <h4>B) Symmetric </h4>
      <h3>C) Surjective </h3>
      <h4>D) Transitive </h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>In the Poset (Z+, | ) ( where Z+ is the set of all positive integers and | is the divides relation) are the integers 9 and 351 comparable?</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Comparable</h4>
      <h4>B) Not comparable</h4>
      <h3>C) Comparable not determined</h3>
      <h4>D) Determined but not comparable</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>The expression for Absorption law is given by _________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) A + AB = A</h4>
      <h4>B) A + AB = B</h4>
      <h3>C) AB + AA` = A</h3>
      <h4>D) A + B = B +A</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>If every two elements of a poset are comparable then the poset is called_____</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Sub ordered poset</h4>
      <h4>B) Totally ordered poset</h4>
      <h3>C) Sub lattice</h3>
      <h4>D) Semigroup</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>Triangle free graphs have the property of clique number is ________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) Less than 2</h4>
      <h4>B) Equal to 2</h4>
      <h3>C) Greater than 3</h3>
      <h4>D) More than 10</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>The union of the sets ( 1 , 2 , 5) and ( 1 , 2 , 6) is the set__________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) ( 1 , 2 , 6 , 1)</h4>
      <h4>B) ( 1 , 2 , 5 , 6)</h4>
      <h3>C) ( 1 , 2 , 1 , 2)</h3>
      <h4>D) ( 1 , 5 , 6 , 3)</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>

    
    <div className="card">
      {/* question type below */}
  <li><h2>A complement of the set A is __________</h2></li>
    <div className='AnswerMCQ'>
      {/* andswer type here */}
      <h4>A) A – B</h4>
      <h4>B) U – A</h4>
      <h3>C) A – U</h3>
      <h4>D) B - A</h4>
    </div>
     <button>
      <details>
        <summary>Click to view Solution</summary>
        <h2>Correct Answer is <b>C) Vector and Raster</b></h2>
        <p>Explanation : Comming Soon</p>
      </details>
    </button>
    </div>
    
</ol>

</div>


<AllPageFooter />

</div>
};
export default Math_1Mcq;

