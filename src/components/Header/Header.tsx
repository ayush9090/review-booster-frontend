import React, { useContext, useEffect, useState } from "react";
import { Nav, Ul, NavLink } from "./Headerstyle";
import Logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/Firebase";

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState<string>("/dashboard");
  const { user } = useContext(AuthContext);

  const handleNavLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <>
      <Nav>
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "50px", marginRight: "50px" }}
        />
        <Ul>
          <li>
            <NavLink
              to="/dashboard"
              isSelected={activeLink === "/dashboard"}
              onClick={() => handleNavLinkClick("/dashboard")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/send-review"
              isSelected={activeLink === "/send-review"}
              onClick={() => handleNavLinkClick("/send-review")}
            >
              Send Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/change-setting"
              isSelected={activeLink === "/change-setting"}
              onClick={() => handleNavLinkClick("/change-setting")}
            >
              Change Setting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              isSelected={activeLink === "/contact-us"}
              onClick={() => handleNavLinkClick("/contact-us")}
            >
              Contact Us
            </NavLink>
          </li>
        </Ul>
      </Nav>
    </>
  );
};
export default Navbar;
