import React, { FC } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import "./navLink.sass";

export const NavLink: FC<LinkProps> = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={`nav-link${match ? " active" : ""}`}>
      <Link to={to}>{children}</Link>
    </div>
  );
};
