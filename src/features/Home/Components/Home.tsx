import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/Firebase";
import Navbar from "../../../components/navbar/Navbar";
import Profile from "../../Profile/Profile";
import Profilepopup from "../../Profilepopup/Profilepopup";

const Home: React.FC = () => {
  const { logout, user } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
      } else {
        console.log("in else home");
        navigate("/login");
      }
    });
  }, [user]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
