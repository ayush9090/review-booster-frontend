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
import { sendSmsandEmailRepo } from "../../repo/sendSmsandEmailRepo";
const SendReview: React.FC<{}> = () => {
  const isSmallScreen = useMediaQuery({
    query: " (max-width: 721px)",
  });
  const SendSmsandEmailRepo = new sendSmsandEmailRepo();

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [functionForReview, setfunctionForReview] =
    useState("handleReviewSend");

  const [MessageType, setMessageType] = useState("");
  const [showSingleReviewContainer, setShowSingleReviewContainer] =
    useState(true);
  const [showbulkReviewContainer, setShowbulkReviewContainer] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

  const handleSingleReviewSend = async () => {
    const link =
      "https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSTc1KDNNMmC0UjWosDAzSTUzNjI0Nkg0sExKNrcyqEgzMzExT01KNks2MDEzMTLy4snITM_IScxLUcjMywMATo8SmQ&q=highland+inn&rlz=1C1ONGR_enUS1024US1024&oq=&aqs=chrome.3.35i39i362l3j46i39i175i199i362j35i39i362l4.5202712j0j7&sourceid=chrome&ie=UTF-8#lrd=0x864e632130a09bc7:0xf6447ebc6c046422,3,,,,";
    const res = await SendSmsandEmailRepo.sendEmail(name, email, link);
    if (res !== "error") {
      setMessageType("Success");
      setErrorMessage("review succesfully sent.....");
      setErrorDialogOpen(true);
    } else {
      setMessageType("error");
      setErrorMessage("error parsing data....");
      setErrorDialogOpen(true);
    }
  };
  const handleBulkReviewSend = async () => {};
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
            <Input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Input>
            <Textspan style={{ color: "black", marginBottom: "1rem" }}>
              AND/OR
            </Textspan>
            <Input
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            ></Input>
          </div>
        )}
        {showbulkReviewContainer && (
          <div id="Containerforbulkreview">
            <Textspan style={{ color: "black", marginBottom: "1rem" }}>
              {selectedFilename} file succesfully uploded
            </Textspan>
          </div>
        )}

        <SendreviewButton onClick={handleSingleReviewSend}>
          Send Review
        </SendreviewButton>

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
