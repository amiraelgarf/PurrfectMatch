import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



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
      <div>
          <button> Sign Up</button>
          <button> Login </button>
  
          <form onSubmit={handleSubmit}>
            <label htmlFor="Username"> Username</label>
              <input type="text" value= {logindata.Username} onChange={handleInputChange} name="Username"/>

              <label htmlFor="Password"> Password</label>
              <input type="text" value={logindata.Password} onChange={handleInputChange} name="Password" />
              <button> Sign Up</button>
          </form>
      </div>
    );
  }
  
  export default Login;