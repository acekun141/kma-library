import React from "react";
import { adminItems, userItems } from "./config";
import { Link } from "react-router-dom";
import "./style.scss";

const SideBar = () => {
  const items = true ? adminItems : userItems;
  return (
    <div className="side-bar">
      <div className="side-bar__user">
        <div className="side-bar__avatar-wrapper" />
        <p>Lê Viết Hưng</p>
      </div>
      <div className="side-bar__top">
        {items.filter(item => !item.bottom).map(({icon: Icon, ...item}) => (
          <Link className={`side-bar__item ${item.active ? "active" : ""}`} key={item.path} to={item.path}>
            <Icon />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <div className="side-bar__bottom">
        {items.filter(item => !!item.bottom).map(({icon: Icon, ...item}) => (
          <Link className="side-bar__item" key={item.name} to="#" onClick={item.action}>
            <Icon />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;