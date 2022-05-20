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
                        <th>List of Practicals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>01</th>
                        <td>Write a program to convert temperature from Celsius to Fahrenheit by taking input from the user.</td>
                    </tr>
                    <h4>
                    <code>{ `#include < stdio.h> ;`}</code>
                      <code>  { `#include <conio.h>;`} </code>
                        <code>
                        void main()
                        {`
                            clrscr()
                            int a,b,c,d;
                        `
                        }
                        </code>
                    </h4>
                
                    <a href="https://onlinegdb.com/L0upfXURp" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a>
                    {/* <script src="//onlinegdb.com/embed/js/L0upfXURp?theme=dark">solve</script> */}

                    <tr>
                        <th>02</th>
                        <td>Write a program to find the greatest number among 3 numbers given by the user.</td>
                    </tr>
                     <a href="https://onlinegdb.com/6SpbRaFs1" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a>
                    <tr>
                        <th>03</th>
                        <td>Write a program to check if a given number is a prime number or not.</td>
                    </tr>

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

                    <tr>
                        <th>05</th>
                        <td>Write a program to input marks of 50 students using an array and display the average marks of the class.</td>
                    </tr>

                    <tr>
                        <th>06</th>
                        <td>Write a program to search for a number entered by the user in a given array and  display the array in ascending order.</td>
                    </tr>

                    <tr>
                        <th>07</th>
                        <td>Write a program to check if a CO2 string is palindrome or not.</td>
                    </tr>

                    <tr>
                        <th>08</th>
                        <td>Write a program to add, subtract, multiply and divide two numbers using pointers.</td>
                    </tr>

                    <tr>
                        <th>09</th>
                        <td>Write a program to create a structure for employees containing the following data members: Employee ID, Employee Name, Age, Address, Department and Salary.Input data for 10 emnployees and display the details of the employee from the employee ID given by the user.</td>
                    </tr>

                    <tr>
                        <th>10</th>
                        <td>Write a program to create two files with names EvenFile and OddFile. Input 20 numbers from the user and save even numbers in EvenFile and odd numbers in OddFile.</td>
                    </tr>

                    <tr>
                        <th>11</th>
                        <td>Write a menu driven program to construct a calculator for following arithmetic operations: addition, subtraction, mulliplication, division, average and percentage.</td>
                    </tr>

                    <tr>
                        <th>12</th>
                        <td>Write a menu driven program to perform the following operations: <br />
                             (1) Print amstrong numbers upto N,<br />
                             (2)Display prime numbers between I to N, <br />
                             (3) Reverse of an integer
                        </td>
                    </tr>

                    <tr>
                        <th>13</th>
                        <td>Write  a program to convert a hexadecimal number into a binary number.</td>
                    </tr>

                    <tr>
                        <th>14</th>
                        <td>Write a program to calculate factorial of a number and display fibonacci series upto N terms using recursive functions.</td>
                    </tr>

                    <tr>
                        <th>15</th>
                        <td>Write a program to perform <br />(i)matrix addition, <br /> (ii) matrix multiplication, and (iii) Matrix transpose) on 2D arrays.</td>
                    </tr>

                    <tr>
                        <th>16</th>
                        <td>Write a program to make use of arrays with stuctures in the following ways <br /> (i).Use array as a structure data member <br /> (ii) create array of structure variables
</td>
                    </tr>

                    <tr>
                        <th>17</th>
                        <td>Write a program to compare the contents of two files by taking names of the files  through command line arguments.</td>
                    </tr>

                    <tr>
                        <th>18</th>
                        <td>WAP to perform I/O and make use of file positioning functions on Binary files. (using fseek, ftell, rewind functipns)</td>
                    </tr>

                    <tr>
                        <th>19</th>
                        <td>Write a menu driven program to implement the following string operations: <br />(1)	Calculate length of a string <br /> (ii) Concatenate at the end of a given  <br />  (iii) Copy one string to another <br /> (iv) Compare contents of two strings  <br />(v) Copy nth character string to another
                            </td>
                    </tr>

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
