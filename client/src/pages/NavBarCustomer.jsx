import { useMatch, useResolvedPath, NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';

export default function NavBar({ style }) {

  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();


  const getNavbarStyleBorder = (path) => {
    let dynamicStyle = {};
    switch (path) {
      case '/home':
        dynamicStyle = { borderColor: '#38BFB6', borderStyle: 'solid', borderWidth: '5px' };
        break;
      case '/pets':
        dynamicStyle = { borderColor: '#6F3EB3', borderStyle: 'solid', borderWidth: '5px' };
        break;
      case '/products':
        dynamicStyle = { borderColor: '#38BFB6', borderStyle: 'solid', borderWidth: '5px' };
        break;
      case '/appointments':
        dynamicStyle = { borderColor: '#6F3EB3', borderStyle: 'solid', borderWidth: '5px' };
        break;
      case '/quiz':
        dynamicStyle = { borderColor: '#38BFB6', borderStyle: 'solid', borderWidth: '5px' };
        break;
      case '/viewpet':
        dynamicStyle = { borderColor: '#6F3EB3', borderStyle: 'solid', borderWidth: '5px' };
        break;
      case '/profile':
        dynamicStyle = { borderColor: '#6F3EB3', borderStyle: 'solid', borderWidth: '5px' };
        break;
      default:
        dynamicStyle = { borderColor: '#38BFB6', borderStyle: 'solid', borderWidth: '5px' };
        break;
    }
    return { ...dynamicStyle, ...style };
  };



  const getNavbarStyleHover = (path) => {
    let dynamicStyle = {};
    switch (path) {
      case '/home':
        dynamicStyle = { backgroundColor: '#38BFB6', color: '#FFF6EF' };
        break;
      case '/pets':
        dynamicStyle = { backgroundColor: '#6F3EB3', color: '#FFF6EF' };
        break;
      case '/products':
        dynamicStyle = { backgroundColor: '#38BFB6', color: '#FFF6EF' };
        break;
      case '/appointments':
        dynamicStyle = { backgroundColor: '#6F3EB3', color: '#FFF6EF' };
        break;
      case '/quiz':
        dynamicStyle = { backgroundColor: '#38BFB6', color: '#FFF6EF' };
        break;
      case '/profile':
        dynamicStyle = { backgroundColor: '#6F3EB3', color: '#FFF6EF' };
        break;
    }
    return { ...dynamicStyle, ...style };
  };


  return (
    <nav className="nav" style={getNavbarStyleBorder(location.pathname)}>
      <ul>
        <CustomLink to="/home" path="/home" setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}>Home</CustomLink>
        <CustomLink to="/pets" path="/pets" setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}>Pets</CustomLink>
        <CustomLink to="/products" path="/products" setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}>Products</CustomLink>
        <CustomLink to="/appointments" path="/appointments" setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}>Appointments</CustomLink>
        <CustomLink to="/quiz" path="/quiz" setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}>Quiz</CustomLink>
        <CustomLink to="/profile" path="/profile" setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}>Profile</CustomLink>
      </ul>
    </nav>
  );

  function CustomLink({ to, path, children, setHoveredItem, hoveredItem, ...props }) {
    const resolvedpath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedpath.pathname })
    const [active, setActive] = useState(isActive);

    const handleMouseEnter = () => {
      setHoveredItem(path);
    };

    const handleMouseLeave = () => {
      setHoveredItem(null);
    };

    const handleClick = () => {
      setActive(!active);
    };

    return (
      <li className={isActive ? "active" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={active || hoveredItem === path ? getNavbarStyleHover(location.pathname) : {}}>
        <NavLink to={to} {...props}>
          {children}
        </NavLink>
      </li>
    )
  }
}






