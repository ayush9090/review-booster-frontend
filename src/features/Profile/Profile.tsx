import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Firebase";
import { AuthContext } from "../../context/AuthWrapper";

const Profile: React.FC = () => {
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
    navigate("/login");
    console.log("logout", res);
  };
  return (
    <h1>
      <button onClick={() => onClickLogout()}>Log out</button>
    </h1>
  );
};

export default Profile;
