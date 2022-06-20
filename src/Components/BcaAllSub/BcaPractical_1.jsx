import React from 'react'
import MovingNotics from '../MovingNotics'

const BcaPractical_1 = () => {
    return (
        <div className='FirstPractical' id='PracticalQuestiona'>
            <MovingNotics />
            <h3>Practical Paper: Programming Using C</h3>
            <hr />
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>S.No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
{/* 01 */}
                        <td>01. Write a program to convert temperature from Celsius to Fahrenheit by taking input from the user.</td>
                    </tr>
                    <div className='Practical_Code'>
                        <div>
                      <h5>
                          {/* please write code here in code tag */}

                          <code>{`#include <stdio.h>`}</code>
                          <br />
                          <code>{`#include <conio.h>`}</code>
                          <br />
                          <code>
                              float convertCelFahrenheit(float c)
                        <br />
                        <code>{`{`} </code>
                        <br />    
                        <code>return ((c * 9.0 / 5.0) + 32.0);</code>
                            <br />
                            <code>{`}`} </code>
                          <br />
                            int main()
                            <br />
                            {
                                       <code>{`clrscr();`}</code>
                            }

                              float celsius, fahrenheit;
                              <br />
                            printf("Enter temperature in Celsius: ");
                            <br />
                            scanf("%f", &celsius);
                            {/* //called function to convert celsius to fahrenheit */}
                                <br />
                                fahrenheit = convertCelFahrenheit(celsius);
                                 <br />
                                 printf("%.2f Celsius = %.2f Fahrenheit", celsius, fahrenheit);
                                 <br />
                                 getch();
                                 <br />    
                                 return 0;
                                 <br />
                                  }

                          </code>

                      </h5>
                      
                      </div>
                  </div>
 {/* button for compile code online */}
             <div className='Code_Compiler'>
            <button className='btn btn-'> <a href="https://onlinegdb.com/L0upfXURp" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                    </div>
                    </tbody>
                    </table>
                    <br />
{/* 02 */}
                    <table className='table table-dark table-striped' >
                    <tbody>
                    <tr>
                        <th>02</th>
                        <td>Write a program to find the greatest number among 3 numbers given by the user.</td>
                    </tr>
                    </tbody>
                    </table>
                    <div className='Practical_Code'>
                    <div>
                    <h5>
                        <code>{`#include <stdio.h>`}</code>
                          <br />
                          <code>{`#include <conio.h>`}</code>
                          <br />
                          <code>
                              void main()
                        <br />
                        <code>{`{`} </code>
                        <br />    
                        <code>clrscr();</code>
                            <br />
                            <code>int a, b, c, d;</code>
                            <br />
                            printf("ENTER 3 NUMBERS\N");
                            <br />
                            scanf("%d%d%d",&a,&b,&c);
                            <br />
                            <code>{`if (a>b)`} </code>
                            <br />
                            <code>{`{`} </code>
                            <br />
                            <code>{`if(a<c)`} </code>
                            <code>{`{`} </code>
                            <br />
                            printf('THE MAXIMUM IS %d',a);
                            <code>{`}`} </code>
                            <br />
                            else
                            <br />
                            <code>{`{`} </code>
                            <br />
                            printf('THE MAZIMUM IS %d',c);
                          <br />
                          <code>{`} }`} </code>
                          <br />
                           elseif(b>c)
                           <br />
                           <code>{`{`} </code>
                           <br />
                           printf('THE MAXIMUM IS %d',b); <br />
                           <code>{`}`} </code> <br />
                           else 
                           <br />
                           <code>{`{`} </code>
                           printf('THE MAXIMUM IS %d',c);
                           <br />
                           <code>{`}`} </code> <br />
                           getct(); <br />
                           }
                          </code>

</h5>





                    </div>
                    
                    
                    
                    
                    
 {/* button for compile code online */}
                       <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/RrIoLJCa-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                     </div>
                     <br />
  {/*03 */}
                     <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>03</th>
                        <td>Write a program to check if a given number is a prime number or not.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21631&authkey=AA0NyzkKW-33Lhc&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
 {/* button for compile code online */}
                    <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
 {/* 04 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>04</th>
                        <td>Write a program to display the following pattern upto N rows, taking the value of N from the user
                            <br />
                            1 <br />
                            2  3
                            <br />
                            4  5  6
                            <br />
                            7  8   9  10
                            <br />
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21632&authkey=APrIwKNm_FQFP5k&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
{/* button for compile code online */}
                      <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/KxiDdtKxU" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />

 {/* 05 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>05</th>
                        <td>Write a program to input marks of 50 students using an array and display the average marks of the class.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21633&authkey=AHRV7C497LHiU7I&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
                     {/* button for compile code online */}
                     <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/xjZoQuTDm" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
{/* 06 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>06</th>
                        <td>Write a program to search for a number entered by the user in a given array and  display the array in ascending order.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21634&authkey=ALZ-3PwSJd6hNOk&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
 {/* button for compile code online */}
                    <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/b8vQDd1EC" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
{/* 07 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>07</th>
                        <td>Write a program to check a string is palindrome or not.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21635&authkey=AMYUoMput7blmnI&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
 {/* button for compile code online */}
                    <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/MO4dGMF_u" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
{/* 08 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>08</th>
                        <td>Write a program to add, subtract, multiply and divide two numbers using pointers.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21636&authkey=AN_-n4Vz3ueOaM0&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/rfpgJBsuh" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
{/* 09 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>09</th>
                        <td>Write a program to create a structure for employees containing the following data members: Employee ID, Employee Name, Age, Address, Department and Salary.Input data for 10 emnployees and display the details of the employee from the employee ID given by the user.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21637&authkey=AHl1I0bjdCQNiLU&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/QXjZ3BEodW" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
{/* 10 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>10</th>
                        <td>Write a program to create two files with names EvenFile and OddFile. Input 20 numbers from the user and save even numbers in EvenFile and odd numbers in OddFile.</td>
                    </tr>
                    </tbody>
                    </table>
                    {/* <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21638&authkey=ALDzyhuzqfVNaA0&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe> */}
 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
  {/* 11 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>11</th>
                        <td>Write a menu driven program to construct a calculator for following arithmetic operations: addition, subtraction, mulliplication, division, average and percentage.</td>
                    </tr>
                    </tbody>
                    </table>


                     {/* button for compile code online */}
                     <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
{/* 12 */}
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>12</th>
                        <td>Write a menu driven program to perform the following operations: <br />
                             (1) Print amstrong numbers upto N,<br />
                             (2)Display prime numbers between I to N, <br />
                             (3) Reverse of an integer
                        </td>
                    </tr>
                    </tbody>
                    </table>


 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>13</th>
                        <td>Write  a program to convert a hexadecimal number into a binary number.</td>
                    </tr>
                    </tbody>
                    </table>


 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>14</th>
                        <td>Write a program to calculate factorial of a number and display fibonacci series upto N terms using recursive functions.</td>
                    </tr>
                    </tbody>
                    </table>


 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>15</th>
                        <td>Write a program to perform <br />(i)matrix addition, <br /> (ii) matrix multiplication, and (iii) Matrix transpose) on 2D arrays.</td>
                    </tr>
                    </tbody>
                    </table>


                     {/* button for compile code online */}
                     <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>16</th>
                        <td>Write a program to make use of arrays with stuctures in the following ways <br /> (i).Use array as a structure data member <br /> (ii) create array of structure variables
                     </td>
                    </tr>
                    </tbody>
                    </table>


                     {/* button for compile code online */}
                     <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>17</th>
                        <td>Write a program to compare the contents of two files by taking names of the files  through command line arguments.</td>
                    </tr>
                    </tbody>
                    </table>


 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>18</th>
                        <td>WAP to perform I/O and make use of file positioning functions on Binary files. (using fseek, ftell, rewind functipns)</td>
                    </tr>
                    </tbody>
                    </table>


 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>19</th>
                        <td>Write a menu driven program to implement the following string operations: <br />(1)	Calculate length of a string <br /> (ii) Concatenate at the end of a given  <br />  (iii) Copy one string to another <br /> (iv) Compare contents of two strings  <br />(v) Copy nth character string to another
                            </td>
                    </tr>
                    </tbody>
                    </table>


                     {/* button for compile code online */}
                     <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                         <br />


                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>20</th>
                        <td>Write a program to read time in string format and extract hours, minutes and second also check time validity</td>
                    </tr>
                </tbody>
            </table>


 {/* button for compile code online */}
 <div className='Code_Compiler'>
                         <button className='btn btn-'><a href="https://onlinegdb.com/5Uxnre2_-" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                         </div>
                        <div id='forDownloadingFile'>
                            <hr />
                         <h3> Complet file for downloading</h3>
                         <hr />
                         <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21657&authkey=AGpNcLbYjdtxbMs&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe>
                         </div>



        
            
        </div>
    )
}

export default BcaPractical_1
