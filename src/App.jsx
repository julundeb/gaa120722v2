import Home from "./pages/Home";
import Tur from "./pages/Tur";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import data from "./data";
import Nordmarka from "./pages/Nordmarka";
import Ostmarka from "./pages/Ostmarka";
import LengdeSide1 from "./pages/LengdeSide1";
import LengdeSide2 from "./pages/LengdeSide2";
import LengdeSide3 from "./pages/LengdeSide3";
import Lillomarka from "./pages/Lillomarka";
const App = () => {
  return (
    <BrowserRouter>
      <Routes className="body">
        <Route path="/" element={<Home />} />
        <Route path="Tur/:id" element={<Tur />} />
        <Route path="Nordmarka" element={<Nordmarka />} />
        <Route path="Ostmarka" element={<Ostmarka />} />
        <Route path="Lillomarka" element={<Lillomarka />} />
        <Route path="LengdeSide1" element={<LengdeSide1 />} />
        <Route path="LengdeSide2" element={<LengdeSide2 />} />
        <Route path="LengdeSide3" element={<LengdeSide3 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
