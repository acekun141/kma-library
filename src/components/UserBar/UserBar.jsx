import React from "react";
import UserCard from "./components/UserCard/UserCard";
import "./style.scss";

const UserBar = () => {
  return (
    <div className="user-bar">
      <UserCard />
      <UserCard active />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}

export default UserBar;