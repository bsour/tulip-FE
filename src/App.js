import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { RegistrationPage } from "./components/pages/RegistrationPage/RegistrationPage";
import { MatchPage } from "./components/pages/MatchPage/MatchPage";
import { SignUp } from "./components/pages/SignUpPage/SignUp";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
