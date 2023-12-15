import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import "./Pets.css";

function ImageBackground(style) {
  fstyle = { cStandard, style };
  return <div style={fstyle}></div>;
}

export default function Pets() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pets");
        console.log(response);
        setData(response.data);
      } catch (error) {
        // Step 6: Handle errors and update the error state
        console.log(error);
      }
    };
    const fetchBreed = async () => {
      try {
        //todo get breed by the id
        const response = await axios.get("http://localhost:3000/pets");
        console.log(response);
        setData(response.data);
      } catch (error) {
        // Step 6: Handle errors and update the error state
        console.log(error);
      }
    };

    fetchData();
  }, []);


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mycart");
  };


  const gotoPet = (PetID) => {
    navigate("/viewpet", {state: {petid:PetID}});
  };
  function PetsImages() {
    return (
      <div>
        <img
          src="./Images/search.png"
          alt="Description"
          className="searchicon"
        />
        <img src="./Images/search.png" alt="Description" className="arrow" />
      </div>
    );
  }
  return (
    <div className="background2-pet-page-container">
      <div className="background2-pet-page">
        <div className="side-bar-container">
          <div className="search-bar-side">
            <img
              src="./Images/search.png"
              alt="Description"
              className="searchIconforSideBar"
            />
            <div className="searchbar-side-bar3">Search</div>
          </div>
          <ul className="filter-list-side">
            <li>
              <img src="./Images/arrow.png" alt="Description" />
              Types
            </li>
            <li>
              <img src="./Images/arrow.png" alt="Description" />
              Brand
            </li>
            <li>
              <img src="./Images/arrow.png" alt="Description" />
              Weight
            </li>
            <li>
              <img src="./Images/arrow.png" alt="Description" />
              Availablity
            </li>
            <li>
              <img src="./Images/arrow.png" alt="Description" />
              Category
            </li>
          </ul>
        </div>
        <div className="items-container">
          {data?.map((pet) => (
            <div className="item-item" key= {pet.PetID} >
              <div className="item-inside-image">
                <img src="./Images/Sunshine.png" alt="Description" />
              </div>
              <div className="item-label-name">{pet.Name}</div>
              {/* <div> {pet.Breed} {types[pet.typeID]}</div> */}
              <div> {pet.Breed} </div>
              <button onClick={()=>gotoPet(pet.PetID)} className="more-info-btn">
                More Info
              </button>
            </div>
          ))}
        </div>

        {/*<div className="search">Search</div>
      <div className="searchbar"></div>
      <div className="filter"></div>

      {/**/}

        {/* <img src="./Images/Sunshine.png" alt="Description" className="Sunshine" />
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
      <button onClick={gotoPet} className='bPeanut'>More Info</button> */}

        {/*<div className="c1"></div>
      <div className="c2"></div>
      <div className="c3"></div>*/}

        {/*<img src="./Images/search.png" alt="Description" className="searchicon" />

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
      
    */}
        <NavBar />
        <Layout />
      </div>
    </div>
  );
}
