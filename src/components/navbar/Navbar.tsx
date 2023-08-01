import React, { useState } from "react";
import ChangeSettings from "../../features/ChangeSettings/ChangeSettings";
import ContactUs from "../../features/ContactUs/ContactUs";
import Dashboard from "../../features/Dashboard/Dashboard";
import SendReview from "../../features/SendReview/SendReview";
import ProfileIcon from "../assets/logos/ProfileIcon";
import ReviewBoosterIcon from "../assets/logos/ReviewBoosterIcon";
import {
  NavContainer,
  TabsOptionsContainer,
  Option,
  Tabs,
  Profile,
  ProfileIconBg,
} from "./NavbarStyles";

const Navbar: React.FC = () => {
  const NavOptions = [
    {
      key: "Dashboard",
      value: "Dashboard",
      isSelected: true,
    },
    {
      key: "Send Review",
      value: "Send Review",
      isSelected: false,
    },
    {
      key: "Change settings",
      value: "Change settings",
      isSelected: false,
    },
    {
      key: "Contact us",
      value: "Contact us",
      isSelected: false,
    },
  ];

  const [currentSelected, setCurrentSelected] = useState("Dashboard");

  const onClickOption = (key: string) => {
    setCurrentSelected(key);
  };

  return (
    <>
      <NavContainer>
        <ReviewBoosterIcon height={"125"} width={"74"} />
        <TabsOptionsContainer>
          <Tabs>
            {NavOptions.map((option) => {
              return (
                <Option
                  style={{ color: "#ffffff" }}
                  currentSelectd={currentSelected === option.key}
                  onClick={() => onClickOption(option.key)}
                >
                  {option.value}
                </Option>
              );
            })}
          </Tabs>
          <Profile>
            <ProfileIconBg>
              <ProfileIcon />
            </ProfileIconBg>
          </Profile>
        </TabsOptionsContainer>
      </NavContainer>
      <ProfileIconBg />
      {currentSelected === "Dashboard" && <Dashboard />}
      {currentSelected === "Send Review" && <SendReview />}
      {currentSelected === "Change settings" && <ChangeSettings />}
      {currentSelected === "Contact us" && <ContactUs />}
    </>
  );
};

export default Navbar;
