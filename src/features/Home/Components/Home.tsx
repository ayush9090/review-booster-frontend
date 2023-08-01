import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/Firebase";
import Navbar from "../../../components/navbar/Navbar";

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
      <Navbar />
      <button onClick={() => onClickLogout()}>Log out</button>
    </>
  );
};

export default Home;
