import {useNavigate} from "react-router-dom";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import './Appointments.css'

export default function Appointments(){
    
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/mycart');

    };
    return(
        <div className="background4">
        <button onClick={handleClick} className="mycartpurple">
        <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple-icon" />
        </button>
        <NavBar/>
        <Layout/>
        </div>
    )
}

