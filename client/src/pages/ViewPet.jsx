import React from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBarCustomer';
import './ViewPet.css';
import Layout from "./Layout";


export default function ViewPet() {
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
            <button onClick={products} className='b1'>Products</button>
            <button onClick={goback} className='b2'>Go Back</button>
            <button className='b3'>Adopt</button>

            <div className='tSunshine2' id=''>Sunshine</div>
            <button onClick={handleClick} className="mycartpurple5">
                <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple5-icon" />
            </button>
            <NavBar />
            <Layout />
        </div>
    );

} 