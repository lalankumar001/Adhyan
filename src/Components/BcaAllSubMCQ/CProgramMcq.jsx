import React from 'react';
import './AllMcqPage.css'
import AllPageFooter from '../AllPageFooter';

// CProgram questions pic imported here

import Pic01 from '../BcaAllSubMCQ/cprogrammingQpic/01.png'
import Pic02 from '../BcaAllSubMCQ/cprogrammingQpic/02.png'
import Pic03 from '../BcaAllSubMCQ/cprogrammingQpic/03.png'
import Pic04 from '../BcaAllSubMCQ/cprogrammingQpic/04.png'
import Pic05 from '../BcaAllSubMCQ/cprogrammingQpic/05.png'
import Pic06 from '../BcaAllSubMCQ/cprogrammingQpic/06.png'
import Pic07 from '../BcaAllSubMCQ/cprogrammingQpic/07.png'
import Pic08 from '../BcaAllSubMCQ/cprogrammingQpic/08.png'
import Pic09 from '../BcaAllSubMCQ/cprogrammingQpic/09.png'
import Pic10 from '../BcaAllSubMCQ/cprogrammingQpic/10.png'
import Pic11 from '../BcaAllSubMCQ/cprogrammingQpic/11.png'
import Pic12 from '../BcaAllSubMCQ/cprogrammingQpic/12.png'
import Pic13 from '../BcaAllSubMCQ/cprogrammingQpic/13.png'
import Pic14 from '../BcaAllSubMCQ/cprogrammingQpic/14.png'
import Pic15 from '../BcaAllSubMCQ/cprogrammingQpic/15.png'
import Pic16 from '../BcaAllSubMCQ/cprogrammingQpic/16.png'
import Pic17 from '../BcaAllSubMCQ/cprogrammingQpic/17.png'
import Pic18 from '../BcaAllSubMCQ/cprogrammingQpic/18.png'
import Pic19 from '../BcaAllSubMCQ/cprogrammingQpic/19.png'
import Pic20 from '../BcaAllSubMCQ/cprogrammingQpic/20.png'
import Pic21 from '../BcaAllSubMCQ/cprogrammingQpic/21.png'
import Pic22 from '../BcaAllSubMCQ/cprogrammingQpic/22.png'
import Pic23 from '../BcaAllSubMCQ/cprogrammingQpic/23.png'
import Pic24 from '../BcaAllSubMCQ/cprogrammingQpic/24.png'
import Pic25 from '../BcaAllSubMCQ/cprogrammingQpic/25.png'
import Pic26 from '../BcaAllSubMCQ/cprogrammingQpic/26.png'
import Pic27 from '../BcaAllSubMCQ/cprogrammingQpic/27.png'

const CProgramMcq = () => {
  return <div className='redred'>
  <h1>Programming Using C MCQ Questions</h1>
    <div>
  <ol>    
          {/* Question write below in h2 tage */}
      <div className="card">
    <li><h2> How is the 3rd element in an array accessed based on pointer notation? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) *a+3 </h4>
        <h3>B) *(a+3)</h3>
        <h4>C) &(a+3)</h4>
        <h4>D) *(*a+3)</h4>
      </div>
       <button>
        <details>
          <summary>Click to view Solution</summary>
          <h2>Correct Answer is <b>B) *(a+3)</b></h2>
          <p>Explanation : Comming Soon</p>
        </details>
      </button>
      </div>
  
      <div className="card">
    <li><h2>Which of the following is an exit control loop? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)while loop </h4>
        <h4>B)for loop </h4>
        <h3>C)do while loop </h3>
        <h4>D)None of the above </h4>
      </div>
       <button>
        <details>
          <summary>Click to view Solution</summary>
          <h2>Correct Answer is <b>C) do while loop</b></h2>
          <p>Explanation : Comming Soon</p>
        </details>
      </button>
      </div>

    <div className="card">
    <li><h2>Which data structure is used in handle recursion in C? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)Queue </h4>
        <h4>B)Deque </h4>
        <h3>C)Stack </h3>
        <h4>D)Trees </h4>
      </div>
       <button>
        <details>
          <summary>Click to view Solution</summary>
          <h2>Correct Answer is <b>C) Stack</b></h2>
          <p>Explanation : Comming Soon</p>
        </details>
      </button>
      </div>
    
      <div className="card">
    <li><h2> How is an array initialized in C language? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) <img src={Pic01} alt="question option pic" /> </h4>
        <h4>B) <img src={Pic02} alt="question option pic" /></h4>
        <h3>C) <img src={Pic03} alt="question option pic" /> </h3>
        <h4>D) <img src={Pic04} alt="question option pic" /></h4>
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
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic05} alt="program screenshoot" />     
        <h4>A) Yes</h4>
        <h4>B) No</h4>
        <h3>C) Compilation Error </h3>
        <h4>D) None of the above</h4>
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
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic06} alt="program screenshoot" />     
        <h4>A) 1 2 3 None</h4>
        <h4>B) 2 3 None</h4>
        <h3>C) 2 </h3>
        <h4>D) None </h4>
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
    <li><h2>How are string represented in memory in C? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)The object of some class </h4>
        <h4>B)Same as other primitive data types </h4>
        <h3>C)An array of characters </h3>
        <h4>D)None of the above </h4>
      </div>
       <button>
        <details>
          <summary>Click to view Solution</summary>
          <h2>Correct Answer is <b>C) An array of characters</b></h2>
          <p>Explanation : Comming Soon</p>
        </details>
      </button>
      </div>

      <div className="card">
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic07} alt="program screenshoot" />     
        <h4>A) 4 4.5000</h4>
        <h4>B) 4 4.000</h4>
        <h3>C) 4.5000 4.5000</h3>
        <h4>D) 4 4</h4>
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
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic08} alt="program screenshoot" />     
        <h4>A) 5</h4>
        <h4>B) 4</h4>
        <h3>C) 2</h3>
        <h4>D) 1</h4>
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
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic09} alt="program screenshoot" />     
        <h4>A) 8</h4>
        <h4>B) 648</h4>
        <h3>C) 72</h3>
        <h4>D) None</h4>
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
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic10} alt="program screenshoot" />     
        <h4>A) 19 82</h4>
        <h4>B) Compilation Error</h4>
        <h3>C) 82 19</h3>
        <h4>D) None</h4>
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
    <li><h2>What will be the result of num1 variable after execution of the following statements?</h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic11} alt="program screenshoot" />     
        <h4>A) 11</h4>
        <h4>B) 12</h4>
        <h3>C) 13</h3>
        <h4>D) 14</h4>
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
    <li><h2>What will be the output of the program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic12} alt="program screenshoot" />     
        <h4>A) z=0</h4>
        <h4>B) z=1</h4>
        <h3>C) z=2</h3>
        <h4>D) z=4</h4>
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
    <li><h2>What will be the output of the following code snippet? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic13} alt="program screenshoot" />     
        <h4>A) 11</h4>
        <h4>B) Compilation Error</h4>
        <h3>C) 10</h3>
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
    <li><h2>What is the output of the program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic14} alt="program screenshoot" />     
        <h4>A) 20 20 20 </h4>
        <h4>B) 20 21 21 </h4>
        <h3>C) 20 21 22</h3>
        <h4>D) Compiler error</h4>
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
    <li><h2>What is the output of the following program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic15} alt="program screenshoot" />     
        <h4>A) -1</h4>
        <h4>B) 0</h4>
        <h3>C) 90</h3>
        <h4>D) Compiler error</h4>
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
    <li><h2>What is the output of the program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic16} alt="program screenshoot" />     
        <h4>A) Prints of address of variable k.</h4>
        <h4>B) 25</h4>
        <h3>C) 0</h3>
        <h4>D) Compiler error</h4>
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
    <li><h2>Choose a correct statement about C file operation program?</h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic17} alt="program screenshoot" />     
        <h4>A) FOPEN opens a file named readme.txt in Read mode ("r")</h4>
        <h4>B) EOF is End of file ch==EOF check for end of file and while loop stops or exits</h4>
        <h3>C) FGETC(fp) is a function that returns one character and cursor goes to next character.</h3>
        <h4>D) All of the above</h4>
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
    <li><h2>What is the output of C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic18} alt="program screenshoot" />     
        <h4>A) 15 16 17 18 19 </h4>
        <h4>B) 15 18 19 </h4>
        <h3>C) 15 16 20 </h3>
        <h4>D) 15 19 20 </h4>
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
    <li><h2>What is the output of C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic19} alt="program screenshoot" />     
        <h4>A) 10 11 12 </h4>
        <h4>B) 12 10 12 </h4>
        <h3>C) 12 11 12 </h3>
        <h4>D) 12 12 12 </h4>
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
    <li><h2>What is the output of C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic20} alt="program screenshoot" />     
        <h4>A) Theatre</h4>
        <h4>B) Hurray Theatre</h4>
        <h3>C) No output </h3>
        <h4>D) Compiler error</h4>
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
    <li><h2>What is the output of C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic21} alt="program screenshoot" />     
        <h4>A) No output</h4>
        <h4>B) Eggs</h4>
        <h3>C) Kangaroo Eggs</h3>
        <h4>D) Compiler error</h4>
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
    <li><h2>What is the output of C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic22} alt="program screenshoot" />     
        <h4>A) 5 8 </h4>
        <h4>B) 5 9 </h4>
        <h3>C) Gorilla Glass=5 8 </h3>
        <h4>D) Gorilla Glass=5 9</h4>
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
    <li><h2>What is the output of C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic23} alt="program screenshoot" />     
        <h4>A) 3.33</h4>
        <h4>B) 3.3</h4>
        <h3>C) 3 </h3>
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
    <li><h2>What is storage class for variable A in below code? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic24} alt="program screenshoot" />     
        <h4>A) extern</h4>
        <h4>B) auto</h4>
        <h3>C) register </h3>
        <h4>D) static</h4>
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
    <li><h2>What will be the output of the program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic25} alt="program screenshoot" />     
        <h4>A) 10</h4>
        <h4>B) 20</h4>
        <h3>C) 30</h3>
        <h4>D) error</h4>
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
    <li><h2>How many times CppBuzz.com is printed? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic26} alt="program screenshoot" />     
        <h4>A) 1 time</h4>
        <h4>B) Infinite times(until stack is overflow)</h4>
        <h3>C) 2 times</h3>
        <h4>D) error</h4>
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
    <li><h2>Which of the following are not standard header files in C? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)stdio.h </h4>
        <h4>B)stdlib.h </h4>
        <h4>C)conio.h </h4>
        <h3>D)None of the above </h3>
      </div>
       <button>
        <details>
          <summary>Click to view Solution</summary>
          <h2>Correct Answer is <b>D) None of the above</b></h2>
          <p>Explanation : Comming Soon</p>
        </details>
      </button>
      </div>
  
      <div className="card">
    <li><h2>The C-preprocessor are specified with ___________symbol. </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)# </h4>
        <h4>B)$ </h4>
        <h3>C)"" </h3>
        <h4>D)& </h4>
      </div>
       <button>
        <details>
          <summary>Click to view Solution</summary>
          <h2>Correct Answer is <b>A)# </b></h2>
          <p>Explanation : Comming Soon</p>
        </details>
      </button>
      </div>
  
      <div className="card">
    <li><h2>A pointer is a memory address, suppose the pointer variable has p address 1000,and that p is declared to have type int”,and an int is 4 bytes long. What address is represented by expression p+2? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)1002 </h4>
        <h4>B)1004 </h4>
        <h3>C)1006 </h3>
        <h4>D)1008 </h4>
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
    <li><h2> Directives are translated by the </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)Pre-processor </h4>
        <h4>B)Compiler </h4>
        <h3>C)Linker </h3>
        <h4>D)Editor </h4>
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
    <li><h2>In which of the following modes, the user can read and write the file? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)r </h4>
        <h4>B)w </h4>
        <h3>C)r+ </h3>
        <h4>D)b+ </h4>
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
    <li><h2>Which of the following operator’s precedence order is correct(from highest to lowest)? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)o	%,*,/,+,- </h4>
        <h4>B)o	%,+,/,*,- </h4>
        <h3>C)o	+,-,%,*,/ </h3>
        <h4>D)o	%,+,-,*,/ </h4>
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
    <li><h2>Which of the following statement is correct about the ftell() function? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)It returns the current position. </h4>
        <h4>B)It sets the file pointer to the given position. </h4>
        <h3>C)It sets the file pointer at the beginning of the file. </h3>
        <h4>D)It reads a character from the file. </h4>
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
    <li><h2>Which header file supports the functions-malloc() and calloc()? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)Stdib.h </h4>
        <h4>B)memory.h </h4>
        <h3>C)math.h </h3>
        <h4>D)stdio.h </h4>
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
    <li><h2>In the given below statement, what does the “arr” indicate? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <b><h5>char*arr[30];</h5></b>
        <h4>A)arr is a array of function </h4>
        <h4>B)arr is a array of 30 characters </h4>
        <h3>C)arr is a pointer of an array </h3>
        <h4>D)arr is a array of 30 character pointers</h4>
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
    <li><h2>What is the operator used to make 1’s one’s compliment? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) & Bitwise AND Operator </h4>
        <h4>B) | Bitwise OR operator </h4>
        <h3>C) ~ Bitwise Negate Operator </h3>
        <h4>D) ^ Bitwise Exclusive OR </h4>
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
    <li><h2>The correct format of declaring a function is: </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)	type_of_return name_of_function(argument type); </h4>
        <h4>B)	type_of_return name_of_function(argument type){}; </h4>
        <h3>C)	type_of_return(argument type) name_of_function; </h3>
        <h4>D)	all of the above </h4>
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
    <li><h2>if one or more structure are other structures, then the structure is known as </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)	Nested structure </h4>
        <h4>B)	Structured structure </h4>
        <h3>C)	Invalid structure </h3>
        <h4>D)	Self referential structure </h4>
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
    <li><h2>We can determine the size of a union with the help of the size of_______ </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)	The sum of all the members’ sizes </h4>
        <h4>B)	The member whose size is the maximum </h4>
        <h3>C)	The last member of the union </h3>
        <h4>D)	The first member of the union </h4>
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
    <li><h2>Scope of the variable refers to </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A)	Duration for which the variable retains a given value during program execution. </h4>
        <h4>B) Part of a program in which the variable can be recognized </h4>
        <h3>C) Value of the variable</h3>
        <h4>D) Data type of the variable. </h4>
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
    <li><h2>Every string must be terminated by </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) Linefeed character </h4>
        <h4>B) Null character </h4>
        <h3>C) Newline character</h3>
        <h4>D) Carriage return character</h4>
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
    <li><h2>What is an identifier in C language? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) Name of a function or variable </h4>
        <h4>B) Name of a Macros </h4>
        <h3>C) Name of structure or union </h3>
        <h4>D) None of the above </h4>
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
    <li><h2>Choose a correct statement. </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) C compiler coverts your c program into machine readable language  </h4>
        <h4>B) C editor allows you to type C programs. It just like a Notepad with extra options. </h4>
        <h3>C) Console shows the output of a C program if it is text output </h3>
        <h4>D) All the above </h4>
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
    <li><h2>Choose a C formatted input output function below. </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) printf(),scanf() </h4>
        <h4>B) sprint(),sscanf() </h4>
        <h3>C) fprintf(),fscanf() </h3>
        <h4>D) All of the above </h4>
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
    <li><h2>Choose a correct C statement? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) SCANF can accept all types of data from keyboard including numbers and strings </h4>
        <h4>B) GETS can accept only one string of any length and any number of words. GETCHAR can accept only one character constant from keyboard.</h4>
        <h3>C) SCANF can accept only single word Strings </h3>
        <h4>D) All of the above </h4>
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
    <li><h2>What is the C preprocessor directive to be used to add a header file or any file to existing C program? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) #add </h4>
        <h4>B) #present </h4>
        <h3>C) #include </h3>
        <h4>D) $include </h4>
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
    <li><h2>What is the abbreviation of C STDIO in stdio.h? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) Standard input output </h4>
        <h4>B) String terminating operations input output </h4>
        <h3>C) Store input output </h3>
        <h4>D) None of the above </h4>
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
    <li><h2>What is the need for closing a file in C language.? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) Fclose(fp) close a file to release the memory used in opening a file. </h4>
        <h4>B) Closing a file clears Buffer contents from RAM or memory. </h4>
        <h3>C) Unclosed files occupy memory and PC hangs when on low memory </h3>
        <h4>D) All of the above</h4>
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
    <li><h2>Choose a correct statement about C string. </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) A string is a group of character enclosed by double quotes. </h4>
        <h4>B) If a string id defined with double quotes, NULL is automatically added at the end. </h4>
        <h3>C) Size of string is without counting NULL character at the end </h3>
        <h4>D) All of the above </h4>
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
    <li><h2>Choose a correct statement about C language break; statement. </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) A single break; statement can force execution control to come out of only one loop. </h4>
        <h4>B) A single break; statement can force execution control to come out of a maximum of two nested loops. </h4>
        <h3>C) A single breaks; statement can force execution control to come out of a maximum of three nested loops. </h3>
        <h4>D) None of the above </h4>
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
    <li><h2>Choose a correct C statement regarding for loop. </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
          <h5><b>for(;;);</b></h5>
        <h4>A) for loop works exactly first time </h4>
        <h4>B) for loop works infinite number of times </h4>
        <h3>C) compiler error </h3>
        <h4>D) None of the above </h4>
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
    <li><h2>A pointer pointing to a memory location of the variable even after deletion of the variable is known as__________ </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) Far pointer </h4>
        <h4>B) Dangling pointer </h4>
        <h3>C) Null pointer </h3>
        <h4>D) Void pointer </h4>
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
    <li><h2>What is C Tokens? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) The smallest individual units of C program </h4>
        <h4>B) The basic element recognized by the compiler </h4>
        <h3>C) The largest individual units of program </h3>
        <h4>D) a & b both </h4>
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
    <li><h2>Which is the right way to declare constant in C? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) Int constant var=10; </h4>
        <h4>B) Int const var=10; </h4>
        <h3>C) Const int var=10; </h3>
        <h4>D) b & c both </h4>
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
    <li><h2>Which operations are known as Ternary Operator? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) : : , ? </h4>
        <h4>B) ?, : </h4>
        <h3>C) ? , ; ; </h3>
        <h4>D) None of the above </h4>
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
    <li><h2>In switch statement, each case instance value must be______? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) constant </h4>
        <h4>B) variable </h4>
        <h3>C) special symbol </h3>
        <h4>D) none of the above </h4>
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
    <li><h2>Recursive functions are executed in a?  </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) First in first out order </h4>
        <h4>B) Load balancing </h4>
        <h3>C) Parallel fashion </h3>
        <h4>D) Last in first out order</h4>
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
    <li><h2>Continue statement is used </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
        <h4>A) to go to the next iteration in a loop </h4>
        <h4>B) come out of a loop </h4>
        <h3>C) exit and return to the main function </h3>
        <h4>D) restart iterations from the beginning of the loop </h4>
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
    <li><h2>How many times will the following loop execute ? </h2></li>
      <div className='AnswerMCQ'>
              {/* correct ans write in h3 tag and change option according like a b c d */}
         <img src={Pic27} alt="program screenshoot" />     
        <h4>A) forever</h4>
        <h4>B) never</h4>
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
  
       
  
      
  </ol>
  
  </div>
  
  
  <AllPageFooter />
  
  </div>
  };


export default CProgramMcq;
