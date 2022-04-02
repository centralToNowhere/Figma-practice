import React, { FC } from "react";
import "./footer.sass";
import { routeNames } from "@/routes/routeNames";
import { NavLink } from "@/components/NavLink/NavLink";
import InstagramIcon from "@/assets/images/instagram-icon.svg";
import FacebookIcon from "@/assets/images/facebook-icon.svg";
import LinkedIn from "@/assets/images/linkedin-icon.svg";
import Logo from "@/assets/images/petrong-logo.svg";
import { ChatIcon } from "@/components/Chat/ChatIcon";

export const Footer: FC = () => {
  const navQuickLinkCls = "nav-quick-links__link";
  const navLinkCls = "footer__link";

  return (
    <div className="footer">
      <div className="footer__table">
        <div className="footer__table-col">
          <p className="footer__table-col-heading">QUICK LINKS</p>
          <nav className="footer__links nav-quick-links">
            <NavLink
              to={routeNames.homepage}
              cls={navQuickLinkCls}
            >
              Home
            </NavLink>
            <NavLink
              to={routeNames.about}
              cls={navQuickLinkCls}
            >
              About
            </NavLink>
            <NavLink to={"/#projects"} highlight={false} cls={navQuickLinkCls}>
              Projects
            </NavLink>
            <NavLink
              to={routeNames.contact}
              cls={navQuickLinkCls}
            >
              Contact
            </NavLink>
            <NavLink
              to={routeNames.blog}
              cls={navQuickLinkCls}
            >
              Blog
            </NavLink>
            <NavLink
              to={"/#our-policy"}
              cls={navQuickLinkCls}
            >
              Our Policy
            </NavLink>
            <NavLink to={"/#career"} highlight={false} cls={navQuickLinkCls}>
              Career
            </NavLink>
          </nav>
        </div>
        <div className="footer__table-col">
          <p className="footer__table-col-heading">OUR SERVICES</p>
          <nav className="footer__links">
            <NavLink
              to={"/#web-development"}
              cls={navLinkCls}
            >
              Web Development
            </NavLink>
            <NavLink
              to={"/#digital-product-design"}
              cls={navLinkCls}
            >
              Digital Product Design
            </NavLink>
            <NavLink to={"/#cloud-devops"} highlight={false} cls={navLinkCls}>
              Cloud/DevOps
            </NavLink>
            <NavLink
              to={"/#mobile-applications"}
              cls={navLinkCls}
            >
              Mobile Applications
            </NavLink>
            <NavLink
              to={"/dedicated-development"}
              cls={navLinkCls}
            >
              Dedicated Development
            </NavLink>
            <NavLink to={"/#team"} highlight={false} cls={navLinkCls}>
              Team
            </NavLink>
          </nav>
        </div>
        <div className="footer__table-col">
          <p className="footer__table-col-heading">OUR TECHNOLOGIES</p>
          <nav className="footer__links">
            <NavLink
              to={"/#laravel-development"}
              cls={navLinkCls}
            >
              Laravel Development
            </NavLink>
            <NavLink
              to={"/#react-js-app-development"}
              highlight={false}
              cls={navLinkCls}
            >
              React JS App Development
            </NavLink>
            <NavLink
              to={"/#vue-js-app-development"}
              cls={navLinkCls}
            >
              Vue JS App Development
            </NavLink>
          </nav>
        </div>
        <div className="footer__table-col">
          <p className="footer__table-col-heading">CONTACT & FOLLOW US</p>
          <div className="social-media">
            <NavLink to={"/#linkedin.com"}>
              <div className="social-media__container">
                <img
                  alt="linkedIn icon"
                  src={LinkedIn}
                  className="social-media__icon"
                />
              </div>
            </NavLink>
            <NavLink to={"/#instagram"}>
              <div className="social-media__container">
                <img
                  alt="instagram icon"
                  src={InstagramIcon}
                  className="social-media__icon"
                />
              </div>
            </NavLink>
            <NavLink to={"/#facebook"}>
              <div className="social-media__container">
                <img
                  alt="Facebook icon"
                  src={FacebookIcon}
                  className="social-media__icon"
                />
              </div>
            </NavLink>
            <div className="social-media__container" />
          </div>
          <p className="footer__email">
            E-mail:{" "}
            <span className="footer__email_color_accent">
              info@petrongsolutuonscom
            </span>
          </p>
          <p className="footer__phone">Phone: (234) 0800-000-0000</p>
          <div className="footer__logo">
            <img src={Logo} alt="Petrong logo" />
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        Petrong Software Solution Copyright 2022 - All Right Reserved
      </p>
      <div className="footer__chat-icon-container">
        <ChatIcon type="secondary" />
      </div>
    </div>
  );
};
