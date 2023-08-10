import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Firebase";
import { AuthContext } from "../../context/AuthWrapper";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import logo from "../assets/logos/Logo.png";
import { useMediaQuery } from "react-responsive";
import {
  Inlinebtn,
  Container,
  Textspan,
  FlexboxColumn,
  Items,
  Input,
  Img,
} from "./ProfileStyles";
import { faUserPlus, faFileExcel } from "@fortawesome/free-solid-svg-icons";
const Profile: React.FC = () => {
  const { logout, user } = useContext(AuthContext);
  let navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("user", user);
  //     } else {
  //       navigate("/login");
  //     }
  //   });
  // }, [user]);

  // const onClickLogout = async () => {
  //   const res = await logout();
  //   navigate("/login");
  //   console.log("logout", res);
  // };
  const isSmallScreen = useMediaQuery({
    query: " (max-width: 721px)",
  });
  console.log(isSmallScreen);
  return (
    <Container>
      <Items smallscreen={isSmallScreen}>
        <span>
          <h1>Profile</h1>
        </span>
        <Img />
        <Input
          type="text"
          placeholder="Enter full name"
          value="variyava ayushkumar"
        ></Input>
        <Input
          type="email"
          placeholder="Enter your email"
          value="avariyava@gmail.com"
        ></Input>
        <Input
          type="number"
          placeholder="Enter your mobile number"
          value="9099472460"
        ></Input>
        <Input
          type="text"
          placeholder="property name"
          value="Highland Inn"
        ></Input>

        <FlexboxColumn>
          <Inlinebtn>
            <Textspan>Update Profile</Textspan>
          </Inlinebtn>
          <Inlinebtn>
            <Textspan>change password</Textspan>
          </Inlinebtn>
        </FlexboxColumn>
      </Items>
    </Container>
  );
};

export default Profile;
