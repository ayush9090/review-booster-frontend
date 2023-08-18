import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthWrapper";
import React, { useContext, useEffect, useState } from "react";
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
import { MotelRepo } from "../../repo/motelRepo";
import { MotelDetails } from "../../constants/constants";
import Dialogbox from "../Dialogbox/Dialogbox";
import { auth } from "../../config/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Profile: React.FC = () => {
  const location = useLocation();

  const [motelDetails, setMotelDetails] = useState([] as MotelDetails[]);
  const motelRepo = new MotelRepo();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [motelName, setMotelName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);
  const [errorInChangePassword, setErrorInChangePassword] = useState(false);
  const [changePasswordLoader, setChangePasswordLoader] = useState(false);

  useEffect(() => {
    (async function () {
      const motelDetails = await motelRepo.getMotelsByEmail(
        location.state.email
      );
      setUserName(userName);
      setEmail(motelDetails[0].motelEmail);
      setPhoneNumber(motelDetails[0].motelPhoneNumber);
      setMotelName(motelDetails[0].motelName);
      setMotelDetails(motelDetails);
    })();
  }, []);

  const isSmallScreen = useMediaQuery({
    query: " (max-width: 721px)",
  });

  const onUpdateClick = async () => {
    setIsLoading(true);
    const updatedFields = {
      motelName: motelName,
      motelPhoneNumber: phoneNumber,
      userName: userName,
    };
    const res = await motelRepo.updateProfile(updatedFields, email);
    if (res !== "error") {
      setIsLoading(false);
      setSuccess(true);
    } else {
      setIsLoading(false);
      setError(true);
    }
  };

  const onClickChangePassword = async () => {
    setChangePasswordLoader(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setChangePasswordSuccess(true);
      setChangePasswordLoader(false);
    } catch (error) {
      setChangePasswordSuccess(false);
      setChangePasswordLoader(false);
      setErrorInChangePassword(true);
    }
  };

  return (
    <Container>
      {motelDetails.length === 0 ? (
        "Loading..."
      ) : (
        <Items smallscreen={isSmallScreen}>
          <span>
            <h1>Profile</h1>
          </span>
          <Img />
          <Input
            type="text"
            placeholder="Enter full name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></Input>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={true}
          ></Input>
          <Input
            placeholder="Enter your mobile number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></Input>
          <Input
            type="text"
            placeholder="property name"
            value={motelName}
            onChange={(e) => {
              setMotelName(e.target.value);
            }}
          ></Input>

          <FlexboxColumn>
            <Inlinebtn onClick={() => onUpdateClick()}>
              <Textspan>
                {isLoading ? "updating..." : "Update Profile"}
              </Textspan>
            </Inlinebtn>
            <Inlinebtn onClick={() => onClickChangePassword()}>
              <Textspan>
                {changePasswordLoader ? "Loading" : "change password"}
              </Textspan>
            </Inlinebtn>
          </FlexboxColumn>
        </Items>
      )}
      {error && (
        <Dialogbox
          isOpen={error}
          errorMessage={"Error in updating profile, please try again!"}
          MessageType={""}
          onClose={() => setError(false)}
        />
      )}
      {success && (
        <Dialogbox
          isOpen={success}
          successMessage={"Profile updated successfully!"}
          MessageType={""}
          onClose={() => setSuccess(false)}
        />
      )}
      {errorInChangePassword && (
        <Dialogbox
          isOpen={errorInChangePassword}
          errorMessage={"Error in changing password please try again"}
          MessageType={""}
          onClose={() => setErrorInChangePassword(false)}
        />
      )}
      {changePasswordSuccess && (
        <Dialogbox
          isOpen={changePasswordSuccess}
          successMessage={`Reset password link sent on${email}`}
          MessageType={""}
          onClose={() => setChangePasswordSuccess(false)}
        />
      )}
    </Container>
  );
};

export default Profile;
