import React, { FC } from "react";
import IconChat from "@/assets/images/chat/chat-icon.svg";
import IconArrow from "@/assets/images/chat/arrow-icon.svg";
import "./chatIcon.sass";

interface ChatIconProps {
  type?: "primary" | "secondary";
}

export const ChatIcon: FC<ChatIconProps> = ({ type = "primary" }) => {
  return (
    <div className={`chat-icon-container chat-icon-container_${type}`}>
      <img
        src={type === "primary" ? IconChat : IconArrow}
        alt={"chat icon"}
        className="chat-icon"
      />
    </div>
  );
};
