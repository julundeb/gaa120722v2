import React, { useState } from "react";
import { OmradeDropdown } from "./NavItems";
import { Link } from "react-router-dom";


function DropdownO() {
  const [dropdown1, setDropdown1] = useState(false);

  return (
    <>
      <ul
        className={dropdown1 ? "submenu clicked" : "submenu"}
        onClick={() => setDropdown1(!dropdown1)}
      >
        {OmradeDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown1(false)}
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

export default DropdownO;