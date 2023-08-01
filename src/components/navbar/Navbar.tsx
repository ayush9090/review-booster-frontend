import React, { useState } from "react";
import ReviewBoosterIcon from "../assets/logos/ReviewBoosterIcon";
import { NavContainer, TabsOptions, Option } from "./NavbarStyles";

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
        <TabsOptions>
          {NavOptions.map((option) => {
            return (
              <Option
                currentSelectd={currentSelected === option.key}
                onClick={() => onClickOption(option.key)}
              >
                {option.value}
              </Option>
            );
          })}
        </TabsOptions>
      </NavContainer>
    </>
  );
};

export default Navbar;
