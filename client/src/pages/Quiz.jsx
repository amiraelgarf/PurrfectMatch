import {useNavigate} from "react-router-dom";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import './Quiz.css'

export default function Quiz(){
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/mycart');
    };
    return(
        <div className="background5">
        <button onClick={handleClick} className="mycartteal2">
        <img src="./Images/cart TEAL.png" alt="Description" className="mycartteal2-icon" />
        </button>
        <Layout/>
        <NavBar/>
        </div>
    )
}