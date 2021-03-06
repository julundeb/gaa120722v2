import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
   
      <App />
  
  </React.StrictMode>,
  root
);

reportWebVitals();
