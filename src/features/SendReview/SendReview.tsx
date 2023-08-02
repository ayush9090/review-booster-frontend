import React, { FormEvent, useContext, useEffect, useState } from "react";
import logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  AddGuest,
  Container,
  Textspan,
  FlexboxColumn,
  Items,
  StyledIcon,
  Input,
  SendreviewButton,
  DropdownOption,
  DropdownSelect,
} from "./SendReviewStyles";
import { faUserPlus, faFileExcel } from "@fortawesome/free-solid-svg-icons";
const SendReview: React.FC<{}> = () => {
  const isSmallScreen = useMediaQuery({
    query: " (max-width: 721px)",
  });
  console.log(isSmallScreen);
  return (
    <Container>
      <Items smallscreen={isSmallScreen}>
        <DropdownSelect id="cars">
          <DropdownOption value="volvo">Motel Highlant Inn</DropdownOption>
          <DropdownOption value="saab">Holiday Inn</DropdownOption>
        </DropdownSelect>
        <FlexboxColumn>
          <AddGuest>
            <StyledIcon icon={faUserPlus} />
            <Textspan>ADD GUEST</Textspan>
          </AddGuest>
          <AddGuest>
            <StyledIcon icon={faFileExcel} />
            <Textspan>BULK IMPORT</Textspan>
          </AddGuest>
        </FlexboxColumn>
        <Input type="text" placeholder="Enter full name"></Input>
        <Input type="email" placeholder="Enter your email"></Input>
        <Textspan style={{ color: "black", marginBottom: "1rem" }}>
          AND/OR
        </Textspan>
        <Input type="number" placeholder="Enter your mobile number"></Input>

        <SendreviewButton>Send Review</SendreviewButton>
      </Items>
    </Container>
  );
};

export default SendReview;
