import React, { FormEvent, useContext, useEffect, useState } from "react";
import logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { AddGuest, Container,Textspan, FlexboxColumn, Items, StyledIcon, Input, SendreviewButton, DropdownOption, DropdownSelect } from "./Sendreviewstyle";
import { faUserPlus, faFileExcel } from "@fortawesome/free-solid-svg-icons";
const Sendreview: React.FC<{  }> = () => {
  return (
    <Container>
      <Items>
        <DropdownSelect id="cars">
          <DropdownOption value="volvo">Motel Highlant Inn</DropdownOption>
          <DropdownOption value="saab">Holiday Inn</DropdownOption>
          {/* Add more options as needed */}
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
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <SendreviewButton></SendreviewButton>
      </Items>
    </Container>
  );
};

export default Sendreview;
