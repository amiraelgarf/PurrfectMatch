import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from './NavBarCustomer';
import './ViewPet.css';
import Layout from "./Layout";


export default function ViewPet() {
    const location = useLocation();
    const [PetID, setPetID] = useState(null);
    const [Petdata, setPetdata] = useState(null);

    useEffect(() => {
    setPetID(location?.state.petid);
    console.log(location?.state);
  }, [location.state]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/mycart');
    };
    const products = () => {
        navigate('/products');
    }
    const goback = () => {
        navigate('/pets');
    }
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/pets/${PetID}`);
            console.log(response);
            setPetdata(response.data);
          } catch (error) {
            // Step 6: Handle errors and update the error state
            console.log(error);
          }
        };
        if(PetID!=null)
        {
            fetchData();
        }
        
        },[PetID])

        console.log(PetID);


    return (
        <div className="background5">
            <div className='rectangle'></div>
            <img src="./Images/Sunshine2.png" alt="Description" className="vSunshine" />
            <p className="desSunshine">
                Type: Cat
                <br />
                Breed: Persian
                <br />
                Age: 4 months
                <br />
                Gender: Male
                <br />
                Best Recommended for: ENFP-T
                <br />
                Center: PetKeeper
                <br />
                History:
                <br />
                Sunshine was bred in one of our adoption centers personally and has been super playful with our staff.
            </p>
            <button onClick={products} className='button1'>Products</button>
            <button onClick={goback} className='button2'>Go Back</button>
            <button className='button3'>Adopt</button>

            <div className='tSunshine2' id=''>Sunshine</div>
            <button onClick={handleClick} className="mycartpurple5">
                <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple5-icon" />
            </button>
            <NavBar />
            <Layout />
        </div>
    );

} 