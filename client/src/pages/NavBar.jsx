import {useMatch, useResolvedPath, NavLink} from "react-router-dom";

export default function NavBar({homeactive, petsactive, productsactive,appactive,quizactive,profileactive}){
   
    return(
    <nav className="nav">
    <ul>
      <CustomLink to="/home" active = {homeactive}>Home</CustomLink> 
      <CustomLink to="/pets" active = {petsactive}>Pets</CustomLink>
      <CustomLink to="/products" active = {productsactive}>Products</CustomLink>
      <CustomLink to="/appointments" active = {appactive}>Appointments</CustomLink>
      <CustomLink to="/quiz" active = {quizactive}>Quiz</CustomLink>
      <CustomLink to="/profile" active = {profileactive}>Profile</CustomLink>
    </ul>
    </nav>
    );
  
    function CustomLink({ to, children, active, ...props }){
      const resolvedpath = useResolvedPath(to)
      //const isActive = useMatch({path: resolvedpath.pathname})
      const isActive = active;
      return(
        <li className= {isActive ? "active" : ""}>
          <NavLink to={to} {...props}>
            {children}
            </NavLink>
        </li>
      )
    }
  }
  
  