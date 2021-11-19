import React from "react";
import UserAvatar from "../../../UserAvatar";
import "./style.scss";

const UserCard = ({ data, active=false }) => {
  const name = "Le Viet Hung"
  const lastActivity = "Liked your message"
  const time = "3h ago"
  return (
    <div className={`user-card user-card--${active ? "active" : ""}`}>
      <UserAvatar />
      <div className="user-card__noti">
        <p className="user-card__name">{name}</p>
        <p className="user-card__last-activity">{lastActivity} - {time}</p>
      </div>
    </div>
  );
}

export default UserCard;