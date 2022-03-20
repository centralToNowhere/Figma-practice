import React, { FC } from "react";
import { routeNames } from "@/routes/routeNames";
import { Navigation } from "@/components/Navigation/Navigation";
import { NavSidebar } from "@/components/NavSidebar/NavSidebar";
import { NavLink } from "@/components/NavLink/NavLink";
import "./header.sass";

interface HeaderProps {
  homepage?: boolean;
}

export const Header: FC<HeaderProps> = ({ homepage = false }) => {
  return (
    <div className={`container header-container${homepage ? " homepage" : ""}`}>
      <header className={`header`}>
        <div className="header__left-group">
          <NavSidebar />
          {homepage ? null : (
            <div className={"header__logo"}>
              <NavLink to={routeNames.homepage}>Logo Here</NavLink>
            </div>
          )}
        </div>
        <Navigation />
      </header>
    </div>
  );
};
