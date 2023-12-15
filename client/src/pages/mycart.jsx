import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import NavBar from "./NavBarCustomer";
import './mycart.css'

export default function MyCart(){
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/mycart');
      };
  
      const handleConfirmationClick = () =>{
          navigate('/products');
      }

    return(
        <div className="background8">
        <div className= "container"></div>
        <button onClick={handleCartClick} className="mycartteal3">
        <img src="./Images/cart TEAL.png" alt="Description" className="mycartteal3-icon" />
        </button>
        <img src="./Images/MyCart underline.png" alt="Description" className="mycartpageselected" />
        <div className="MyCartTitle">My Cart</div>
        <div className="Total">Total:</div>
        <button onClick={handleConfirmationClick} className = "confirmbutton">Confirm</button>
        <NavBar/>
        <Layout/>
        </div>
    )


}