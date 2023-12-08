import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css'; // Create a new CSS file for styling the registration page

function Register() {
  const [registerData, setRegisterData] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Password: "",
    Gender: "",
    DateOfBirth: ""
  });

  const navigate = useNavigate();

  function handleInputChange(e) {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(registerData);

    axios.post("http://localhost:3000/user/register", {
      ...registerData
    })
      .then(function (response) {
        console.log(response);
        navigate("/login"); // Redirect to the login page after successful registration
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="register-container">
      <div className="hamtaro-1-parent">
      <img className="hamtaro-1-icon" alt="" src="/hamtaro-1@2x.png" />
      <div className="purrfectmatchcom">PurrfectMatch.com</div>
      </div>
      <div className="authentication-child" /> 
      {/* //outer oval */}
      <div className="authentication-item" />
      {/* //middle oval */}
      <div className="authentication-inner" />
      {/* //inner oval */}
          <button className="sign-up"> <span>Sign Up</span></button>
          <button className="login" > <span> Login </span> </button>

          <img className="screenshot-579-1" alt="" src="/screenshot-579-1@2x.png" />
      {/* <div className="line-div" /> */}
      <img className="line-icon" alt="" src="/line-5.svg" />

        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" className="first-name" value={registerData.FirstName} onChange={handleInputChange} name="first-name" />
          <input type="text"  placeholder="Last Name" className="last-name" value={registerData.LastName} onChange={handleInputChange} name="last-name" />




          
          <input type="text" placeholder="Username" className="username" value={registerData.Username} onChange={handleInputChange} name="username" />
       
          
          
          <input type="text" placeholder="Password" className="password1" value={registerData.Password} onChange={handleInputChange} name="password" />
          




          <input type="text"  placeholder="Gender" className="gender" value={registerData.Gender} onChange={handleInputChange} name="gender" />
       


          <input type="text" placeholder="Date of Birth" className="date-of-birth" value={registerData.DateOfBirth} onChange={handleInputChange} name="dateOfBirth" />
          <button className="register">SignUp</button>
        </form>
    </div>

  );
}

export default Register;
