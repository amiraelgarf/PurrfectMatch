import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';



function Login() {
    const [logindata, setlogindata]= useState ({Username: "", Password: ""})
    const navigate= useNavigate()

    function handleInputChange(e)
    {
        setlogindata({
            ...logindata,[e.target.name]:e.target.value
        })
        
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(logindata)

         

        axios.post("http://localhost:3000/user/login", {
            ...logindata
          })
          .then(function (response) {
            console.log(response);
            navigate("/home")
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
      
      <div className="login-container">
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
      <button className="sign-up" onClick= { ( )=> navigate("/register")}> <span>Sign Up</span></button>
          <button className="login" onClick= { ( )=> navigate("/login")} > <span> Login </span> </button>

          <img className="screenshot-579-1" alt="" src="/screenshot-579-1@2x.png" />
      {/* <div className="line-div" /> */}
      <img className="line-icon" alt="" src="/line-5.svg" />

      {/* <div className="group-div">
        <div className="group-child" />
      </div> */}
      {/* <div className="authentication-inner1">
        <div className="group-child" />
      </div> */}

  
          <form onSubmit={handleSubmit}>
            
              <input type="text" placeholder="Username" value= {logindata.Username} onChange={handleInputChange} name="Username"/>

              
              <input type="text" placeholder="Password"  className="password" value={logindata.Password} onChange={handleInputChange} name="Password"  />
              <button className="login1"> LogIn</button>
          </form>
          <img className="image-24-icon" alt="" src="/image-24@2x.png" />
      <img className="image-25-icon" alt="" src="/image-25@2x.png" />

      </div>
    );
  }
  
  export default Login;