import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import CompaniesList from "../companies/CompaniesList";
import Company from "../companies/Company";
import JobsList from "../jobs/JobsList";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
import ProfileForm from "../forms/ProfileForm";

const AppRoutes = () => {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/companies" element={<CompaniesList />}></Route>
        <Route path="/companies/apple" element={<Company />}></Route>
        <Route path="/jobs" element={<JobsList />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/profile" element={<ProfileForm />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
