import React from "react";
import Icon from "@/assets/images/chat.png";
import "./chatIcon.sass";

export const ChatIcon = () => {
  return (
    <div className="chat-icon-container">
      <img src={Icon} className="chat-icon" alt="chat-icon" />
    </div>
  );
};
