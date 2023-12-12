import React from 'react';
import './Home.css';
import Pets from './Pets';
import Products from './Products';
import Appointments from './Appointments';
import Quiz from './Quiz';
import Profile from './Profile';
import NavBar from './NavBar';
import {Route, Routes, useNavigate} from "react-router-dom";

export default function Home() {

  const navStyle = {
    borderColor: '#38BFB6',
    borderStyle: 'solid',
    borderWidth: '5px'
};

const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

function HomeImages() {
  
  return (
    <div>
      <img src="./Images/pawsgroup homepage.png" alt="Description" className="pawsbackgroundimage" />
      <img src="./Images/cat update.png" alt="Description" className="catimage" />
      <img src="./Images/hand higher quality.png" alt="Description" className="handimage" />
      <img src="./Images/logo noname.png" alt="Description" className="hamtaroimage" />
    </div>
  );
}


  return (
    <div className="background">
      <div className="findyour">Find Your</div>
      <div className="purrfectmatch">PurrfectMatch</div>
      <button className="startnowbutton" onClick={handleClick}>Start Now</button>
      <HomeImages />
      <NavBar style={navStyle}/>
        <Routes>
          <Route path="/home" element = {<Home  />} />
          <Route path="/pets" element = {<Pets/>} />
          <Route path="/products" element = {<Products/>} />
          <Route path="/appointments" element = {<Appointments/>} />
          <Route path="/quiz" element = {<Quiz/>} />
          <Route path="/profile" element = {<Profile/>} />
        </Routes>
    </div>
  );
  

}




