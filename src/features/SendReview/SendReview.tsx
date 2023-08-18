import React, { FormEvent, useContext, useEffect, useState } from "react";
import logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import * as XLSX from "xlsx";

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
import Dialogbox from "../Dialogbox/Dialogbox";
const SendReview: React.FC<{}> = () => {
  const isSmallScreen = useMediaQuery({
    query: " (max-width: 721px)",
  });
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [MessageType, setMessageType] = useState("");
  const [showSingleReviewContainer, setShowSingleReviewContainer] =
    useState(true);
  const [showbulkReviewContainer, setShowbulkReviewContainer] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    console.log(file);
    if (file) {
      const filename = file.name;
      setSelectedFilename(filename);
      setSelectedFile(file);
      parseExcel(file);
    }
  };
  const parseExcel = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result;
      console.log(data);

      if (data) {
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const cellA1Value = worksheet["A1"]?.v;
        const cellB1Value = worksheet["B1"]?.v;
        const cellC1Value = worksheet["C1"]?.v;
        console.log(cellA1Value);

        if (
          cellA1Value !== "name" ||
          cellB1Value !== "number" ||
          cellC1Value !== "emailid"
        ) {
          setMessageType("Error");
          setErrorMessage("columns are missing");
          setErrorDialogOpen(true);
          return;
        } else {
          const rowDataStart = 2; // Assuming data starts from row 2
          let validData = true;
          for (let row = rowDataStart; worksheet["A" + row]; row++) {
            const nameValue = worksheet["A" + row]?.v;
            const numberValue = worksheet["B" + row]?.v;
            const emailValue = worksheet["C" + row]?.v;
            console.log(nameValue);
            console.log(numberValue);
            console.log(emailValue);

            if (nameValue === "undefined") {
              console.log("hoooo");
              validData = false;
              break;
            }
            if (numberValue === "undefined" && emailValue === "undefined") {
              console.log("hoooo");
              validData = false;
              break;
            }
          }
          if (!validData) {
            setMessageType("Error");
            setErrorMessage("columns are missing");
            setErrorDialogOpen(true);
            return;
          } else {
            setMessageType("Success");
            setErrorMessage("data succesfully added");
            setErrorDialogOpen(true);
            setShowSingleReviewContainer(false);
            setShowbulkReviewContainer(true);
            return;
          }
        }
      }
    };

    reader.readAsBinaryString(file);
  };
  const openAddguest = () => {
    setShowSingleReviewContainer(true);
    setShowbulkReviewContainer(false);
  };
  const openFileInput = () => {
    const fileInput = document.getElementById("visible-file-input");
    console.log(fileInput);
    if (fileInput) {
      fileInput.click();
    }
    if (selectedFile != null) {
      setShowSingleReviewContainer(false);
      setShowbulkReviewContainer(true);
    }
  };
  const closeErrorDialog = () => {
    setErrorDialogOpen(false);
  };
  return (
    <Container>
      <Items smallscreen={isSmallScreen}>
        <DropdownSelect>
          <DropdownOption>Motel Highlant Inn</DropdownOption>
          <DropdownOption>Holiday Inn</DropdownOption>
        </DropdownSelect>
        <FlexboxColumn>
          <AddGuest onClick={openAddguest}>
            <StyledIcon icon={faUserPlus} />
            <Textspan>ADD GUEST</Textspan>
          </AddGuest>
          <AddGuest onClick={openFileInput}>
            <StyledIcon icon={faFileExcel} />
            <Textspan>BULK IMPORT</Textspan>
            <input
              id="visible-file-input"
              type="file"
              accept=".xls,.xlsx"
              onChange={handleFileUpload}
              style={{ display: "none", height: "100%", width: "100%" }}
            />
          </AddGuest>
        </FlexboxColumn>
        {showSingleReviewContainer && (
          <div id="Containerforsinglereview">
            <Input type="text" placeholder="Enter full name"></Input>
            <Input type="email" placeholder="Enter your email"></Input>
            <Textspan style={{ color: "black", marginBottom: "1rem" }}>
              AND/OR
            </Textspan>
            <Input type="number" placeholder="Enter your mobile number"></Input>
          </div>
        )}
        {showbulkReviewContainer && (
          <div id="Containerforbulkreview">
            <Textspan style={{ color: "black", marginBottom: "1rem" }}>
              {selectedFilename} file succesfully uploded
            </Textspan>
          </div>
        )}

        <SendreviewButton>Send Review</SendreviewButton>

        <Dialogbox
          isOpen={errorDialogOpen}
          errorMessage={errorMessage}
          MessageType={MessageType}
          onClose={closeErrorDialog}
        />
      </Items>
    </Container>
  );
};

export default SendReview;
