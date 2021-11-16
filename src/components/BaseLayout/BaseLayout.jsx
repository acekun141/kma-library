import React from "react";
import SideBar from "../SideBar";
import "./style.scss";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <SideBar />
      </div>
      <div className="layout__content">
        {children}
      </div>
    </div>
  );
}

export default BaseLayout;