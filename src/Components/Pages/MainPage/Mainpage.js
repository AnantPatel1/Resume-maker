import React from "react";
import Navbar from "../../Layout/Navbar.js";
import { BrowserRouter } from "react-router-dom";
export default function mainpage() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
