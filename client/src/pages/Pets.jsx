import React from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import './Pets.css'

export default function Pets() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mycart');
  };
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
      <img src="./Images/Nala.png" alt="Description" className="Nala" />
      <div className='cNala'></div>
      <img src="./Images/Peanut.png" alt="Description" className="Peanut" />
      <div className='cPeanut'></div>
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