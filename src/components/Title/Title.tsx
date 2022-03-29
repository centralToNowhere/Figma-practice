import React, { FC } from "react";
import "./title.sass";

export const Title: FC = (props) => {
  return (
    <div className="title-container">
      <div className="title-line" />
      {props.children}
    </div>
  );
};
