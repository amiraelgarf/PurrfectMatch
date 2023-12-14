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
      
      <div className="backgroundauthentication">
      <div className="login-container"> </div>
      <button className="sign-up" onClick= { ( )=> navigate("/register")}> <span>Sign Up</span></button>
      <button className="login" onClick= { ( )=> navigate("/login")} > <span> Login </span> </button>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" value= {logindata.Username} onChange={handleInputChange} name="Username"/>
              <input type="text" placeholder="Password"  className="password" value={logindata.Password} onChange={handleInputChange} name="Password"  />
              <button className="login1"> LogIn</button>
          </form>
      <img src="./Images/authentication dog.png" alt="Description" className="dog" />
      <img src="./Images/authentication circles.png" alt="Description" className="circles" />
      <img src="./Images/logo noname.png" alt="Description" className="logo" />
      <div className="PurrfectMatchLogo">PurrfectMatch.com</div>
      </div>
    );
  }
  
  export default Login;