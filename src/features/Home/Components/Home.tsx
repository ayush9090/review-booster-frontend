import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/Firebase";
import Header from "../../../components/Navbar/Navbar";
import Dashboard from "../../../components/Dashboard/Dashboard";
import Sendreview from "../../../components/Sendreview/Sendreview";

const Home: React.FC = () => {
  const { logout, user } = useContext(AuthContext);
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

  const onClickLogout = async () => {
    const res = await logout();
    console.log("logout", res);
  };
  return (
    <>
      <Header />
      <Sendreview/>
    </>
  );
};

export default Home;
