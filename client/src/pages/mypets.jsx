import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import NavBar from "./NavBarCustomer";
import './mypets.css'



export default function MyPets(){
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/mycart');
    }

    return(
        <div className="background7">
        <div className= "container"></div>
        <button onClick={handleClick} className="mycartpurple4">
        <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple4-icon" />
        </button>
        <img src="./Images/MyPets underline.png" alt="Description" className="mypetspageselected" />
        <div className="MyPetsTitle">My Pets</div>
        <NavBar/>
        <Layout/>
        </div>
    )


}