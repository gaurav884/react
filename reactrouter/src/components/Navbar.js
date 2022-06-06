import React,{useState} from 'react';
import {NavLink } from "react-router-dom"

const Navbar = () => {
  const isEntering = useState(true);
 
  return <div>

      <h1>Navbar</h1>
      <ul>
          <li><NavLink className={navdata=>navdata.isActive ? "active":" "} to="/">about</NavLink></li>
          <li><NavLink className={navdata=>navdata.isActive ? "active":" "} to="/contact">contact</NavLink></li>
          <li><NavLink className={navdata=>navdata.isActive ? "active":" "} to="/products">products</NavLink></li>
      </ul>
  </div>;
};

export default Navbar;
