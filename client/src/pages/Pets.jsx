import React from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import './Pets.css'


function ImageBackground(style) {
  fstyle = { cStandard, style }
  return (
    < div style={fstyle} ></div >
  );
}

export default function Pets() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mycart');
  };

  const gotoPet = () => {
    navigate('/viewpet');
  }
  function PetsImages() {

    return (
      <div>
        <img src="./Images/search.png" alt="Description" className="searchicon" />
        <img src="./Images/search.png" alt="Description" className="arrow" />
      </div>
    );
  }
  return (
    <div className="background2">
      <div className="search">Search</div>
      <div className="searchbar"></div>
      <div className="filter" ></div>

      <img src="./Images/Sunshine.png" alt="Description" className="Sunshine" />
      <div className='cSunshine'></div>
      <div className='tSunshine'>Sunshine</div>
      <div className='dSunshine'>Cat, Persion</div>
      <button onClick={gotoPet} className='bSunshine'>More Info</button>

      <img src="./Images/Nala.png" alt="Description" className="Nala" />
      <div className='cNala'></div>
      <div className='tNala'>Nala</div>
      <div className='dNala'>Cat, Tuxedo</div>
      <button onClick={gotoPet} className='bNala'>More Info</button>

      <img src="./Images/Peanut.png" alt="Description" className="Peanut" />
      <div className='cPeanut'></div>
      <div className='tPeanut'>Peanut</div>
      <div className='dPeanut'>Dog, German Pinscher</div>
      <button onClick={gotoPet} className='bPeanut'>More Info</button>

      <div className='c1'></div>
      <div className='c2'></div>
      <div className='c3'></div>

      <img src="./Images/search.png" alt="Description" className="searchicon" />

      <button onClick={handleClick} className="mycartpurple2">
        <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple2-icon" />
      </button>

      <img src="./Images/arrow.png" alt="Description" className="atypes" />
      <button className="stypes">Types</button>

      <img src="./Images/arrow.png" alt="Description" className="abreeds" />
      <button className="sbreeds">Breeds</button>

      <img src="./Images/arrow.png" alt="Description" className="agender" />
      <button className="sgender">Genders</button>

      <img src="./Images/arrow.png" alt="Description" className="amatches" />
      <button className="smatches">Personality Matches</button>
      <NavBar />
      <Layout />

    </div>
  );
}