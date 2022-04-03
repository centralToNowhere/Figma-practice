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
      <NavLink to={routeNames.about} highlight={true}>
        ABOUT
      </NavLink>
      <NavLink to={routeNames.portfolio} highlight={true}>
        PORTFOLIO
      </NavLink>
      <NavLink to={routeNames.product} highlight={true}>
        PRODUCT
      </NavLink>
      <NavLink to={routeNames.expertise} highlight={true}>
        EXPERTISE
      </NavLink>
      <NavLink to={routeNames.contact} highlight={true}>
        CONTACT
      </NavLink>
      <NavLink to={routeNames.blog} highlight={true}>
        BLOG
      </NavLink>
    </nav>
  );
};
