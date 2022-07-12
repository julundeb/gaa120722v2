import React from "react";

import { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import Search from "./Search";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
    
      <img src="./bilder/header3.jpg" className="Headerbilde"></img>
    </div>
  );
};
export default Header;
