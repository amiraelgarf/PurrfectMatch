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
      <div
      style={{ position: 'relative', height: '100vh', boxSizing: 'border-box' }}
    >
      <div className="login-container">
          <button className="sign-up"> <span>Sign Up</span></button>
          <button className="login" > <span> Login </span> </button>

          <div className="oval-shape"></div>
  
          <form onSubmit={handleSubmit}>
            
              <input type="text" placeholder="Username" value= {logindata.Username} onChange={handleInputChange} name="Username"/>

              
              <input type="text" placeholder="Password" value={logindata.Password} onChange={handleInputChange} name="Password" />
              <button className="login-to-profile"> LogIn</button>
          </form>
      </div>
      </div>
    );
  }
  
  export default Login;