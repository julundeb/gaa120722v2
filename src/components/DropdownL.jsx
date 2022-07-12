import React, { useState } from "react";
import { LengdeDropdown } from "./NavItems";
import { Link } from "react-router-dom";


function DropdownL() {
  const [dropdown2, setDropdown2] = useState(false);

  return (
    <>
      <ul
        className={dropdown2 ? "submenu clicked" : "submenu"}
        onClick={() => setDropdown2(!dropdown2)}
      >
        {LengdeDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown2(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownL;