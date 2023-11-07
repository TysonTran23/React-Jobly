import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import CompaniesList from "../companies/CompaniesList";
import Company from "../companies/Company";
import JobsList from "../jobs/JobsList";
import AllJobsList from "../jobs/AllJobsList";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
import ProfileForm from "../forms/ProfileForm";
import CompanyDetails from "../companies/CompanyDetails";
import UserContext from "../auth/UserContext";

const AppRoutes = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>

        <Route
          path="/companies"
          element={
            currentUser ? <CompaniesList /> : <Navigate replace to="/login" />
          }
        ></Route>
        <Route
          path="/companies/:handle"
          element={
            currentUser ? <CompanyDetails /> : <Navigate replace to="/login" />
          }
        ></Route>
        <Route
          path="/jobs"
          element={
            currentUser ? <AllJobsList /> : <Navigate replace to="/login" />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            currentUser ? <ProfileForm /> : <Navigate replace to="/login" />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
