import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { navItems } from "./NavItems";
import DropdownO from "./DropdownO";
import DropdownL from "./DropdownL";
import Search from "./Search";

function Navbar() {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          
          {navItems.map((item) => {
            if (item.title === "Område") {
              
              return (
                
                <li 
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown1(true)}
                  onMouseLeave={() => setDropdown1(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown1 && <DropdownO />}
                </li>
              );
            } else if (item.title === "Lengde") {
              return (
                <li 
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown2 && <DropdownL />}
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
