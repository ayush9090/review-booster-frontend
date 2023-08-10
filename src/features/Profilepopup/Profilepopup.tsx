import React, { useContext, useEffect, useState } from "react";
import { Container, Menuoption } from "./Profilepopupstyle";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthWrapper";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/Firebase";

const Profilepopup: React.FC = () => {
  const { logout, user } = useContext(AuthContext);

  const onClickLogout = async () => {
    const res = await logout();
    navigate("/login");
    console.log("logout", res);
  };
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
      } else {
        navigate("/login");
      }
    });
  }, [user]);
  return (
    <>
      <Container>
        <Menuoption onClick={() => navigate("/profile")}>Profile</Menuoption>
        <Menuoption onClick={() => onClickLogout()}>Log Out</Menuoption>
      </Container>
    </>
  );
};

export default Profilepopup;
