import React, { FC } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import "./navLink.sass";

interface NavLinkProps extends LinkProps {
  highlight?: boolean;
  cls?: string;
  activeCls?: string;
}

export const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  highlight = false,
  cls,
  activeCls,
}) => {
  const isActiveLink = (props: { isActive: boolean }): string => {
    return highlight && props.isActive
      ? activeCls || "nav-link_active"
      : cls || "nav-link";
  };

  return (
    <RouterNavLink to={to} className={isActiveLink}>
      {children}
    </RouterNavLink>
  );
};
