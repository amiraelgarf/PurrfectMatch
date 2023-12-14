import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';

import Layout from "./Layout";
import NavBar from "./NavBarCustomer";
import './Profile.css';

export default function Profile(){
    const navigate = useNavigate();

    const handleCartClick = () => {
      navigate('/mycart');
    };

    const handleLogOutClick = () =>{
        navigate('/home');
    }

    return(
        <div className = "background6">
            <button onClick={handleCartClick} className="mycartpurple3">
        <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple3-icon" />
        </button>
        <img src="./Images/profilepagecontainer.png" alt="Description" className="pagecontainer" />
        <div className ="welcome">Welcome</div>
        <div className ="Name">Name:</div>
        <div className ="DOB">DOB:</div>
        <div className ="Gender">Gender:</div>
        <div className ="PersonalityType">Personality Type:</div>
        <div className ="EnterOldPassword">Enter old password:</div>
        <div className ="ChangePasswordTo">Change password to:</div>
        <div className ="Reminders">Reminders:</div>
        <div className ="RateLastVet">Rate last vet:</div>
        <button onClick={handleLogOutClick} className = "LogOut">Logout</button>
        <DropdownButton/>
        <Layout/>
        <NavBar/>
        </div>
    )

    }

   function DropdownButton() {
        const [selectedValue, setSelectedValue] = useState('Dropdown button');
      
        const handleDropdownItemClick = (value) => {
          setSelectedValue(value); 
        };
      
        return (
          <div className="dropdown">
            {/* <button className="custom-dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedValue} Rate</button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => handleDropdownItemClick('1')}>1</button></li>
              <li><button className="dropdown-item" onClick={() => handleDropdownItemClick('2')}>2</button></li>
              <li><button className="dropdown-item" onClick={() => handleDropdownItemClick('3')}>3</button></li>
              <li><button className="dropdown-item" onClick={() => handleDropdownItemClick('4')}>4</button></li>
              <li><button className="dropdown-item" onClick={() => handleDropdownItemClick('5')}>5</button></li>
            </ul> */}
          </div>
        );
    }


