import React from 'react'

const BcaPractical_1 = () => {
    return (
        <div className='FirstPractical'>
            <span className='BcaHeading'><h2>BACHELOR OF COMPUTER APPLICATIONS (BCA) DETAILED SYLLABUS</h2></span>
            <hr />
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
                        {/* <th>01</th> */}
                        <td>01. Write a program to convert temperature from Celsius to Fahrenheit by taking input from the user.</td>
                    </tr>
                    <div className='Practical_Code'>
                        <div>
    {/* code write here in code tag */}
<h5>
<code>{`#include <stdio.h>`}</code>
<br />
<code>{`#include <conio.h>`}</code>
<br />
<code>float convertCelFahrenheit(float c)</code>
<br />
        <code>{`{`}</code> <br/>
        <code>  return ((c * 9.0 / 5.0) + 32.0);</code> <br/>
        <code>{`}`}</code> <br/>
        <code>int main()</code> <br/>
        <code>{`{`}</code> <br/> 
        <code>clrscr(); <br />
    float celsius, fahrenheit;<br /> 
    printf("Enter temperature in Celsius: ");<br />
    scanf("%f", &celsius);<br />
    {/* called function to convert celsius to fahrenheit */}
    fahrenheit = convertCelFahrenheit(celsius);<br />
    printf("%.2f Celsius = %.2f Fahrenheit", celsius, fahrenheit);<br />
    getch();<br />
    return 0;<br />
    <code>{`}`}</code> <br/>
    </code>
         </h5>
             </div>
             </div>
             <div className='Code_Compiler'>
            <button className='btn btn-'> <a href="https://onlinegdb.com/L0upfXURp" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                    </div>
{/* button for compile code online */}
                    {/* <a href="https://onlinegdb.com/L0upfXURp" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a> */}
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped' >
                    <tbody>
                    <tr>
                        <th>02</th>
                        <td>Write a program to find the greatest number among 3 numbers given by the user.</td>
                    </tr>
                    </tbody>
                    </table>
                    <div className='Practical_Code'>
                     {/* <a href="https://onlinegdb.com/6SpbRaFs1" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a> */}
                     </div>
                    
                     <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>03</th>
                        <td>Write a program to check if a given number is a prime number or not.</td>
                    </tr>
                    </tbody>
                    </table>

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
                    
                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>05</th>
                        <td>Write a program to input marks of 50 students using an array and display the average marks of the class.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>06</th>
                        <td>Write a program to search for a number entered by the user in a given array and  display the array in ascending order.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>07</th>
                        <td>Write a program to check if a CO2 string is palindrome or not.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>08</th>
                        <td>Write a program to add, subtract, multiply and divide two numbers using pointers.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>09</th>
                        <td>Write a program to create a structure for employees containing the following data members: Employee ID, Employee Name, Age, Address, Department and Salary.Input data for 10 emnployees and display the details of the employee from the employee ID given by the user.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>10</th>
                        <td>Write a program to create two files with names EvenFile and OddFile. Input 20 numbers from the user and save even numbers in EvenFile and odd numbers in OddFile.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>11</th>
                        <td>Write a menu driven program to construct a calculator for following arithmetic operations: addition, subtraction, mulliplication, division, average and percentage.</td>
                    </tr>
                    </tbody>
                    </table>

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

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>13</th>
                        <td>Write  a program to convert a hexadecimal number into a binary number.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>14</th>
                        <td>Write a program to calculate factorial of a number and display fibonacci series upto N terms using recursive functions.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>15</th>
                        <td>Write a program to perform <br />(i)matrix addition, <br /> (ii) matrix multiplication, and (iii) Matrix transpose) on 2D arrays.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>16</th>
                        <td>Write a program to make use of arrays with stuctures in the following ways <br /> (i).Use array as a structure data member <br /> (ii) create array of structure variables
                     </td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>17</th>
                        <td>Write a program to compare the contents of two files by taking names of the files  through command line arguments.</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>18</th>
                        <td>WAP to perform I/O and make use of file positioning functions on Binary files. (using fseek, ftell, rewind functipns)</td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>19</th>
                        <td>Write a menu driven program to implement the following string operations: <br />(1)	Calculate length of a string <br /> (ii) Concatenate at the end of a given  <br />  (iii) Copy one string to another <br /> (iv) Compare contents of two strings  <br />(v) Copy nth character string to another
                            </td>
                    </tr>
                    </tbody>
                    </table>

                    <table className='table table-dark table-striped'>
                    <tbody>
                    <tr>
                        <th>20</th>
                        <td>Write a program to read time in string format and extract hours, minutes and second also check time validity</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default BcaPractical_1
