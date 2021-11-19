import React from "react";
import "./style.scss";

const Message = ({ message, time, owner }) => {
  return (
    <div className={`message message--${owner ? "my" : "your"}`}>
      <div className="message__content">
        <p>{message}</p>
      </div>
      <div className="message__time">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Message;