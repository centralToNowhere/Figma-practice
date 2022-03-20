import React, { FC } from "react";
import "./button.sass";

interface ButtonProps {
  content: string;
  type?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({ content, type = "primary" }) => {
  return (
    <button className={`button${type ? ` button_${type}` : ""}`}>
      {content}
    </button>
  );
};
