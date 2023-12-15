import { useNavigate } from "react-router-dom";
import NavBar from "./NavBarCustomer";
import Layout from "./Layout";
import './Appointments.css'

export default function Appointments() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mycart');
  };

  const gotoDoctor = () => {
    navigate('/viewdoctor');
  }
  function PetsImages() {

    return (
      <div>
        <img src="./Images/search.png" alt="Description" className="searchicon2" />
        <img src="./Images/search.png" alt="Description" className="arrow2" />
      </div>
    );
  }
  return (
    <div className="background4">
      <div className="search2">Search</div>
      <div className="searchbar2"></div>
      <div className="filter2" ></div>

      <img src="./Images/Dr1.png" alt="Description" className="Dr1" />
      <div className='cDr1'></div>
      <div className='tDr1'>Dr. Eman</div>
      <div className='dDr1'>Dogs</div>
      <button onClick={gotoDoctor} className='bDr1'>Set Appointment</button>

      <img src="./Images/Dr2.png" alt="Description" className="Dr2" />
      <div className='cDr2'></div>
      <div className='tDr2'>Dr. Sarah</div>
      <div className='dDr2'>Cats</div>
      <button onClick={gotoDoctor} className='bDr2'>Set Appointment</button>

      <img src="./Images/Dr3.png" alt="Description" className="Dr3" />
      <div className='cDr3'></div>
      <div className='tDr3'>Dr. Jana</div>
      <div className='dDr3'>Birds</div>
      <button onClick={gotoDoctor} className='bDr3'>Set Appointment</button>

      <div className='c1'></div>
      <div className='c2'></div>
      <div className='c3'></div>

      <img src="./Images/search.png" alt="Description" className="searchicon2" />

      <button onClick={handleClick} className="mycartpurple">
        <img src="./Images/cart PURPLE.png" alt="Description" className="mycartpurple-icon" />
      </button>

      <img src="./Images/arrow.png" alt="Description" className="aspeciality" />
      <button className="sspeciality">Speciality</button>

      <img src="./Images/arrow.png" alt="Description" className="alocation" />
      <button className="slocation">Location</button>

      <img src="./Images/arrow.png" alt="Description" className="arating" />
      <button className="srating">Rating</button>

      <NavBar />
      <Layout />

    </div>
  );
}

