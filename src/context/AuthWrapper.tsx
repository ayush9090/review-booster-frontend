import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import React, { FC, useEffect, useState } from "react";
import { auth } from "../config/Firebase";

export interface TypeAuthContext {
  login: any;
  user: any;
  logout: any;
}`  `

export interface props {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<Partial<TypeAuthContext>>({});

const AuthWrapper: FC<props> = ({ children }) => {
  const [user, setUser] = useState(null as unknown as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        setUser(user as User);
      }else{
        console.log("else user",user)
      }
    });
    setLoading(false);
  }, []);

  function login(email: string, password: string) {
    console.log("in login");
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    console.log("in logout");
    return signOut(auth);
  }

  const store = {
    login,
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={store}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthWrapper;
