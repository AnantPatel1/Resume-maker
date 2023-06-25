import React from "react";
import { Outlet } from "react-router-dom";
import InnerNavbar from "../Nav-Navbar/InnerNavbar";
const RootLayout = () => {
  return (
    <>
      <InnerNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
