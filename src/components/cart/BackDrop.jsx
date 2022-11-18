import React from "react";
import "../layout/navbar/navbar.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClick} />;
};

export default BackDrop;
