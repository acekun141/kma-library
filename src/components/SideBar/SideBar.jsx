import React from "react";
import { useLocation } from "react-router-dom";
import { adminItems, userItems } from "./config";
import { Link } from "react-router-dom";
import { BiPaint } from "react-icons/bi";
import ThemeToggle from "../ThemeToggle";
import UserAvatar from "../UserAvatar";
import "./style.scss";

const SideBar = () => {
  const items = true ? adminItems : userItems;
  const { pathname } = useLocation();
  return (
    <div className="side-bar">
      <div className="side-bar__user">
        {/* <div className="side-bar__avatar-wrapper" /> */}
        <UserAvatar />
        <p>Lê Viết Hưng</p>
      </div>
      <div className="side-bar__top">
        {items.filter(item => !item.bottom).map(({icon: Icon, ...item}) => (
          <Link className={`side-bar__item ${pathname.startsWith(item.path) ? "active" : ""}`} key={item.path} to={item.path}>
            <Icon />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <div className="side-bar__bottom">
        <div className="side-bar__item side-bar__item--theme">
          <BiPaint />
          <p>Theme</p>
          <ThemeToggle />
        </div>
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