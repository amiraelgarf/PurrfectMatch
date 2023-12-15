import {useNavigate} from "react-router-dom";
import NavBar from './NavBarCustomer';
import './Products.css';
import Layout from "./Layout";

export default function Products(){
    const navigate = useNavigate();
   
    const handleCartClick = () => {
      navigate('/mycart');
    };

    return(
        <div className = "background3">
        <button onClick={handleCartClick} className="mycartteal">
        <img src="./Images/cart TEAL.png" alt="Description" className="mycartteal-icon" />
        </button>
       <NavBar/>
       <Layout/>
        </div>
    )
}