import React, { FC } from "react";
import "./workInvite.sass";
import { Button } from "@/components/Button/Button";

export const WorkInvite: FC = () => {
  return (
    <div className="invite-container">
      <div className="invite-text-container">
        <h2 className="invite-heading">Do you have a next level idea?</h2>
        <p className="invite-text">
          Reach out and we can create magic together
        </p>
      </div>
      <div className="invite-button-container">
        <Button content="WORK WITH US" />
      </div>
    </div>
  );
};
