import { Outlet, useNavigate } from "react-router-dom";
import './Layout.css'

export default function Layout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mypets');
  };

  return (
    <div>
      <img src="./Images/logo noname.png" alt="Description" className="logo" />
      <button onClick={handleClick} className="mypets">
        <img src="./Images/Paw.png" alt="Description" className="mypets-icon" />
      </button>
      <div className="PurrfectMatchLogo">PurrfectMatch.com</div>
      <Outlet/> 
    </div>
  );
}


