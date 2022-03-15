import React, { FC } from "react";
import { Navigation } from "@/components/Navigation/Navigation";
import "./header.sass";

interface HeaderProps {
  noLogo?: boolean;
}

export const Header: FC<HeaderProps> = ({ noLogo = false }) => {
  return (
    <header>
      {noLogo ? null : <div className={"logo"}>Logo Here</div>}
      <Navigation />
    </header>
  );
};
