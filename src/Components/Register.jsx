import React from 'react'
import "./Register.css"
// import image from './Images/Homepageimage.png'
import { FaUserTie,FaPhoneAlt,FaRegEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Register = () => {
    return (
      <div>

      <form>
      <h5 className="col-sm-6 offset-sm-3">REGISTER NEW ACCOUNT</h5>
      <div className="row mb-4">
      <label for="inputName" className="col-sm-1 col-from-lavel"><FaUserTie/> FullName</label>
      <div className="col-sm-9">
        <input type="text" className="form-control" id="inputName" placeholder="FullName" required /></div>
    </div>
    <div className="row mb-4">
      <label for="inputEmail" className="col-sm-1 col-from-lavel"><FaPhoneAlt/> MobileNo</label>
      <div className="col-sm-9">
        <input type="Number" className="form-control" id="inputMobile" placeholder="Mobile NO"required /></div>
    </div>
    <div className="row mb-4">
      <label for="inputEmail" className="col-sm-1 col-from-lavel"><FaRegEnvelope/> Email</label>
      <div className="col-sm-9">
        <input type="email" className="form-control" id="inputEmail" placeholder="Email"required /></div>
    </div>
    <div className="row mb-4">
      <label for="inputPassword" className="col-sm-1 col-from-lavel"><MdLock/> Password</label>
      <div className="col-sm-9">
        <input type="Password" className="form-control" id="inputPassword" placeholder="Password"  required/></div>
    </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <button type="submit" className="btn btn-primary">Register</button>
          <div className="col-sm-10 offset-sm-2">
          </div>
          </div>
      </div>
    </form>
    </div>
  )
}
export default Register
