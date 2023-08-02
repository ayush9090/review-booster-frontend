import React, { useContext, useEffect, useState } from "react";
import { Nav, Ul, Img, Li } from "./Navbarstyle";
import Logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState<string>("/dashboard");
  const [shownavOption, setShownavOption] = React.useState("Dashboard");
  const { logout, user } = useContext(AuthContext);
  let navigate = useNavigate();

  const [tabs, setTabs] = useState([
    {
      key: "dashboard",
      isSelected: true,
    },
    {
      key: "review",
      isSelected: false,
    },
    {
      key: "setting",
      isSelected: false,
    },
    {
      key: "contactus",
      isSelected: false,
    },
    {
      key: "logout",
      isSelected: false,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
      } else {
        navigate("/login");
      }
    });
  }, [user]);

  const onClickLogout = async () => {
    setShownavOption("logout");

    const res = await logout();
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      isSelected: tab.key === "logout",
    }));
    setTabs(updatedTabs);
  };

  const onClickDashboard = () => {
    setShownavOption("dashboard");
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      isSelected: tab.key === "dashboard",
    }));
    setTabs(updatedTabs);
  };

  const onClickReview = () => {
    setShownavOption("review");
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      isSelected: tab.key === "review",
    }));
    setTabs(updatedTabs);
  };

  const onClickSetting = () => {
    setShownavOption("setting");
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      isSelected: tab.key === "setting",
    }));
    setTabs(updatedTabs);
  };

  const onClickContact = () => {
    setShownavOption("contactus");
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      isSelected: tab.key === "contactus",
    }));
    setTabs(updatedTabs);
  };

  return (
    <>
      <Nav>
        <Img>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "100%", marginRight: "50px" }}
          />
        </Img>
        <Ul>
          <Li
            onClick={onClickDashboard}
            style={{
              backgroundColor: shownavOption === "dashboard" ? "#796BCD" : "",
            }}
          >
            Dashboard
          </Li>
          <Li
            onClick={onClickReview}
            style={{
              backgroundColor: shownavOption === "review" ? "#796BCD" : "",
            }}
          >
            Send Review
          </Li>
          <Li
            onClick={onClickSetting}
            style={{
              backgroundColor: shownavOption === "setting" ? "#796BCD" : "",
            }}
          >
            Change Setting
          </Li>
          <Li
            onClick={onClickContact}
            style={{
              backgroundColor: shownavOption === "contactus" ? "#796BCD" : "",
            }}
          >
            Contact Us
          </Li>
          <Li
            style={{
              backgroundColor: shownavOption === "logout" ? "#796BCD" : "",
            }}
            onClick={onClickLogout}
          >
            Log out
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;
