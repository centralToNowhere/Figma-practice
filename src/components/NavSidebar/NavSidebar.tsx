import React, { useState } from "react";
import { Navigation } from "@/components/Navigation/Navigation";
import "./navSidebar.sass";

export const NavSidebar = () => {
  const [toggled, setToggled] = useState(false);

  const drawIcon = () => {
    const sidebarClosed = "M 4 4 h 22 M 4 15 h 22 M 4 26 h 22";
    const sidebarOpened = "M 4 4 L 26 26 M 4 26 L 26 4";

    return (
      <path
        className={`nav-sidebar__icon${toggled ? "_opened" : "_closed"}`}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        d={toggled ? sidebarOpened : sidebarClosed}
      />
    );
  };

  return (
    <div className="nav-sidebar">
      <button
        className="nav-sidebar__toggle"
        aria-label="Navigation bar toggle"
        type="button"
        tabIndex={0}
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
          {drawIcon()}
        </svg>
      </button>
      <div
        className={`nav-sidebar__menu${
          toggled ? " nav-sidebar__menu_toggled" : ""
        }`}
      >
        <Navigation type="sidebar" />
      </div>
    </div>
  );
};
