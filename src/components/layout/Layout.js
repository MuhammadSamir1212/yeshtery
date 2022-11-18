import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div className="container">
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
