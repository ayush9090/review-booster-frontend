import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/signin/Signin";
import AuthWrapper from "./context/AuthWrapper";
function App() {
  return (
    <AuthWrapper>
      <Signin />
    </AuthWrapper>
  );
}

export default App;
