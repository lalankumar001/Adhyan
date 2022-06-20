import React, {useState} from 'react'
import './Contactus.css'
import { IoLogoGithub,IoLogoLinkedin,IoLogoInstagram,IoLogoFacebook,IoLogoTwitter } from "react-icons/io5";

const Contactus = () => {

const [userData , setUserData] =  useState({
    name: "",
    email: "",
    phone: "",
    student: "",
    message: "",
});

let name, value;
const postUserdata =(event) => {
name = event.target.name;
value = event.target.value;

setUserData({...userData, [name]: value });
};
// connect with firebase
const submitdata = (event) => {
event.preventDefault();
const {name, email, phone, student, message } = userData;
if(name && email && phone && student && message ){
const res = fetch(
    "https://adhyandb-default-rtdb.firebaseio.com/userDataRecords.json",
    {
        method: "POST",
        Headers: {
    "Content-Type" : "application/json",
},
body: JSON.stringify({
name,
email,
phone,
student,
message,
}),
}
);
if (res) {
    alert ("Message has been sent")
    setUserData({
    name: "",
    email: "",
    phone: "",
    student: "",
    message: "",
    });
}else{
    alert ("Please fill the data")
}
}else{
    alert ("Please fill the data")
}
};

    return (
        < >     
             {/* contact us form */}
                  <div className='contact_form' method ="POST">
                      <div className="container">
                          <div className="row">
                              <div className='col-lg-10 offset-lg-1'>
                                  <div className='contact_form_container py-5'>
                                     <div className='contact_form_title'>
                                           <h1> Get In Touch</h1>
                                            <form id="contact_form">
                                                <div className='contact_form_name d-flex justify-content-between align-items-between'>
                                                <input type="text" 
                                                    id="contact_form_name"
                                                    name='name' 
                                                    className='contact_form_name input_field'
                                                    placeholder='Your Name'required='true'
                                                    value={userData.name}
                                                    onChange={postUserdata}
                                                    
                                                    />
                                                    
                                                    <input type="email"
                                                     id="contact_form_Email" 
                                                     name='email'
                                                    className='contact_form_email input_field'
                                                    placeholder='Your Email' required='true'
                                                    value={userData.email}
                                                    onChange={postUserdata}
                                                    
                                                    />

                                                    <input type="Number"
                                                     id="contact_form_Number" 
                                                     name='phone'
                                                    className='contact_form_Number input_field'
                                                    placeholder='Your Number' required='true'
                                                    value={userData.phone}
                                                    onChange={postUserdata}
                                                    
                                                    />
                       
                                                    <input type="text"
                                                     id="contact_form_student"
                                                     name='student' 
                                                    className='contact_form_text input_field'
                                                    placeholder='Are You Student?' required='true'
                                                    value={userData.student}
                                                    onChange={postUserdata}
                                                    
                                                    /> 
                                                    {/* know about who are the sender */}
                                                    {/* <select name="Sender" id="whoAreThesender">
                                                    <option value="">Who Are You?</option>
                                                    <option value="Student">Student</option>
                                                    <option value="Teacher">Teacher</option>
                                                   <option value="Others">Others</option>
                                                   </select> */}

                                                </div>
                                                <div className='contact_form_text mt-4'>
                                                    <textarea className='text_field contact_from_message'
                                                    name='message'
                                                     placeholder='Message' cols="144" rows="10" id='MessageBox'
                                                    value={userData.message}
                                                    onChange={postUserdata}
                                                    />
                                
                                                </div>
                                                <dir className='contact_form_button'>
                                                    <button type='submit' className='btn btn-success'
                                                    onClick={submitdata}
                                                    >Send Message</button>
                                                </dir>
                                            </form>
                                     </div>
                                  </div>
                              </div>
                          </div>
                          <span className='ContactUs'>
                                  <a href="https://github.com/lalankumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                                  <label for="inputGithub" className="col-sm-1 col-from-lavel" id='gitIcon'><IoLogoGithub/>
                                  </label>
                                  </a>

                                  <a href="https://www.linkedin.com/in/lalan-kumar52526/" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                                  <label for="inputLinkedin" className="col-sm-1 col-from-lavel"id='LinkedinIcon'><IoLogoLinkedin/></label>
                                  </a>

                                  <a href="https://www.instagram.com/lalan_kumar001" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                                  <label for="inputInstagram" className="col-sm-1 col-from-lavel"id='InstaIcon'><IoLogoInstagram/></label>
                                  </a>

                                  <a href="https://www.facebook.com/asteptowardsunity/" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                                  <label for="inputMail" className="col-sm-1 col-from-lavel"id='MailIcon'><IoLogoFacebook/></label>
                                 </a>
                                 
                                 <a href="https://twitter.com/Lalan_kumar001?t=YztJYDa2hfvp60Bz0DrRmg&s=08" target="_blank" rel="noopener noreferrer" alt="Social Icon">
                                  <label for="inputTwitter" className="col-sm-1 col-from-lavel"id='TwitterIcon'><IoLogoTwitter/></label>
                                  </a>
                                  </span>                                   
                      </div>
                  </div>


        </>
    )
}

export default Contactus
