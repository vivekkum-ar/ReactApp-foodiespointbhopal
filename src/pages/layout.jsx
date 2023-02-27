import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Navbarbottom from "../Navbarbottom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Navbarbottom/>
    </>
  );
};

export default Layout;
