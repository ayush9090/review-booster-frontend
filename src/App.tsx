import React from "react";
import "./App.css";
import Signin from "./components/signin/Signin";
import AuthWrapper from "./context/AuthWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/Home/Components/Home";
import Profile from "./features/Profile/Profile";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
