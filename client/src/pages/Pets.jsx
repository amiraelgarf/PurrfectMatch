import {useNavigate} from "react-router-dom";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import './Pets.css'

export default function Pets(){
    const navigate = useNavigate();
    const handleCartClick = () => {
      navigate('/mycart');
    };
    return (
        <div className="background2">
        <button onClick={handleCartClick} className="mycartpurple2">
        <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple2-icon" />
        </button>
        <NavBar/>
        <Layout/>
        </div>
    );
}