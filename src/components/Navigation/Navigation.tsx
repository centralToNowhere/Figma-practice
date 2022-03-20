import React, { FC } from "react";
import { routeNames } from "@/routes/routeNames";
import { NavLink } from "@/components/NavLink/NavLink";
import "./navigation.sass";

interface NavigationProps {
  homepage?: boolean;
  sidebar?: boolean;
}

export const Navigation: FC<NavigationProps> = ({
  homepage = false,
  sidebar = false,
}) => {
  const className = `main-nav
    ${homepage ? " main-nav_homepage" : ""}
    ${sidebar ? " sidebar" : ""}`;

  return (
    <nav className={className}>
      <NavLink to={routeNames.about}>ABOUT</NavLink>
      <NavLink to={routeNames.portfolio}>PORTFOLIO</NavLink>
      <NavLink to={routeNames.product}>PRODUCT</NavLink>
      <NavLink to={routeNames.expertise}>EXPERTISE</NavLink>
      <NavLink to={routeNames.contact}>CONTACT</NavLink>
      <NavLink to={routeNames.blog}>BLOG</NavLink>
    </nav>
  );
};
