import React, { FC } from "react";
import { routeNames } from "@/routes/routeNames";
import "./navigation.sass";
import { NavLink } from "@/components/NavLink/NavLink";

export const Navigation: FC = () => {
  return (
    <nav>
      <NavLink to={routeNames.about}>About</NavLink>
      <NavLink to={routeNames.contact}>Contact</NavLink>
      <NavLink to={routeNames.expertise}>Expertise</NavLink>
    </nav>
  );
};
