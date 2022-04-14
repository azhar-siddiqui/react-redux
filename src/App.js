import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarContainer from "./container/NavbarContainer";
import Home from "./pages/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
