import React from "react";
import BaseLayout from "../../components/BaseLayout";
import MessageBoard from "../../components/MessageBoard/MessageBoard";
import UserBar from "../../components/UserBar";
import "./style.scss";

const Message = () => {
  return (
    <BaseLayout>
      <div className="screen screen--message">
        <div className="message-container">
          <UserBar />
          <MessageBoard />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Message;