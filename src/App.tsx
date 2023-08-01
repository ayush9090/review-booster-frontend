import React from "react";
import "./App.css";
import Signin from "./components/signin/Signin";
import AuthWrapper from "./context/AuthWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/Home/Components/Home";
import Header from "./components/Navbar/Navbar";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
