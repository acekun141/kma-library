import React from "react";
import { BiSend } from "react-icons/bi";
import Message from "./components/Message";
import "./style.scss";

const fakeMessage = [
  { content: "Hello", time: "16:23", owner: true },
  { content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", time: "16:23", owner: false },
  { content: "Right ?", time: "16:23", owner: false },
  { content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", time: "16:23", owner: true },
  { content: "One minute", time: "16:23", owner: true },
  { content: "Ok", time: "16:23", owner: false },
  { content: "I'm back", time: "16:23", owner: true },
  { content: "Sample content of message", time: "16:23", owner: false },
]

const MessageBoard = () => {
  return (
    <div className="message-board">
      <div className="message-board__header">
        <h3>Le Viet Hung</h3>
      </div>
      <div className="message-board__content">
        {fakeMessage.map((item, index) => (
          <Message key={index} message={item.content} time={item.time} owner={item.owner} />
        ))}
      </div>
      <div className="message-board__input">
        <input placeholder="Typing here..." />
        <button>
          <BiSend />
        </button>
      </div>
    </div>
  );
}

export default MessageBoard;