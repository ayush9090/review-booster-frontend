import React, { FormEvent, useContext, useEffect, useState } from "react";
import logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  Items,
  Input,
  SendreviewButton
} from "./ContactUsStyles";
const ContactUs: React.FC<{}> = () => {
  const isSmallScreen = useMediaQuery({
    query: " (max-width: 721px)",
  });
  console.log(isSmallScreen);
  return (
    <Container>
      <Items smallscreen={isSmallScreen}>
         <h2>contact Us</h2>
        <Input type="text" placeholder="Enter full name"></Input>
        <Input type="email" placeholder="Enter your email"></Input>
        <Input type="text" style={{height:"10rem"}} placeholder="Message"></Input>

        <SendreviewButton>Send</SendreviewButton>
      </Items>
    </Container>
  );
};

export default ContactUs;
