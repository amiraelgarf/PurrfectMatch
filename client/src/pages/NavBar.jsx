import {useMatch, useResolvedPath, NavLink} from "react-router-dom";

export default function NavBar({style}){
  
    return(
      <nav className="nav" style={style}>
    <ul>
      <CustomLink to="/home">Home</CustomLink> 
      <CustomLink to="/pets">Pets</CustomLink>
      <CustomLink to="/products">Products</CustomLink>
      <CustomLink to="/appointments">Appointments</CustomLink>
      <CustomLink to="/quiz" >Quiz</CustomLink>
      <CustomLink to="/profile">Profile</CustomLink>
    </ul>
    </nav>
    );
  
    function CustomLink({ to, children, active, ...props }){
      const resolvedpath = useResolvedPath(to)
      const isActive = useMatch({path: resolvedpath.pathname})
      //const isActive = active;
      return(
        <li className= {isActive ? "active" : ""}>
          <NavLink to={to} {...props}>
            {children}
            </NavLink>
        </li>
      )
    }
  }