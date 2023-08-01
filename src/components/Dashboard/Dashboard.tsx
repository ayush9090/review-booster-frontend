import React, { FormEvent, useContext, useEffect, useState } from "react";
import logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";
export interface Tabsprops {
  key: string;
  isSelected: boolean;
}
const Dashboard: React.FC<{ tabsProps: Tabsprops[] }> = (tabsProps) => {
  console.log(tabsProps);
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
