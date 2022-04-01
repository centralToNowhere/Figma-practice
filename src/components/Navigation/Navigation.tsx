import React, { FC } from "react";
import { routeNames } from "@/routes/routeNames";
import { NavLink } from "@/components/NavLink/NavLink";
import "./navigation.sass";

interface NavigationProps {
  homepage?: boolean;
  type?: "header" | "sidebar" | "footer";
}

export const Navigation: FC<NavigationProps> = ({
  homepage = false,
  type = "header",
}) => {
  const className = `main-nav main-nav__type_${type}
    ${homepage ? " main-nav_homepage" : ""}`;

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
