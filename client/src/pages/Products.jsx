import { useNavigate } from "react-router-dom";
import NavBar from './NavBarCustomer';
import './Products.css';
import Layout from "./Layout";

let x = 0;
export default function Products() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mycart');
  };

  function ProductsImages() {

    return (
      <div>
        <img src="./Images/search.png" alt="Description" className="searchicon3" />
        <img src="./Images/search.png" alt="Description" className="arrow3" />
      </div>
    );
  }
  const Add = () => {
    x++;
  }
  return (
    <div className="background3">
      <div className="search3">Search</div>
      <div className="searchbar3"></div>
      <div className="filter3" ></div>

      <img src="./Images/Pro1.png" alt="Description" className="Pro1" />
      <div className='rwPro1'></div>
      <div className='rPro1'></div>
      <div className='namePro1'>Cat Food</div>
      <div className='pPro1'>$49.99</div>
      <button onClick={Add} className='addPro1'>Add to Cart</button>

      <img src="./Images/Pro2.png" alt="Description" className="Pro2" />
      <div className='rwPro2'></div>
      <div className='rPro2'></div>
      <div className='namePro2'>Cat Litter</div>
      <div className='pPro2'>$29.99</div>
      <button onClick={Add} className='addPro2'>Add to Cart</button>

      <img src="./Images/Pro3.png" alt="Description" className="Pro3" />
      <div className='rwPro3'></div>
      <div className='rPro3'></div>
      <div className='namePro3'>Cat Litter</div>
      <div className='pPro3'>$24.99</div>
      <button onClick={Add} className='addPro3'>Add to Cart</button>

      <div className='r1'></div>
      <div className='r2'></div>
      <div className='r3'></div>

      <img src="./Images/search.png" alt="Description" className="searchicon3" />

      <button onClick={handleClick} className="mycartteal">
        <img src="./Images/cart TEAL.png" alt="Description" className="mycartteal-icon" />
      </button>

      <img src="./Images/arrow.png" alt="Description" className="aType" />
      <button className="sType">Types</button>

      <img src="./Images/arrow.png" alt="Description" className="aBrand" />
      <button className="sBrand">Brand</button>

      <img src="./Images/arrow.png" alt="Description" className="aWeight" />
      <button className="sWeight">Weight</button>

      <img src="./Images/arrow.png" alt="Description" className="aAvailability" />
      <button className="sAvailability">Availability</button>

      <img src="./Images/arrow.png" alt="Description" className="aCategory" />
      <button className="sCategory">Category</button>
      <NavBar />
      <Layout />

    </div>
  );
}