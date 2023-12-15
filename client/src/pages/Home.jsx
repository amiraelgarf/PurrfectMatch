import React from 'react';
import './Home.css';
import NavBar from './NavBarCustomer';
import {useNavigate} from "react-router-dom";

export default function Home() {

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
      <NavBar/>
    </div>
  );
  

}




