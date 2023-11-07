import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobsList from "../jobs/JobsList";

const CompanyDetails = () => {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany();
  }, [handle]);

  async function getCompany() {
    try {
      let company = await JoblyApi.getCompany(handle);
      setCompany(company);
      console.log(company);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>{company ? company.name : "Loading..."}</h1>
      <h2>{company ? company.description : "Loading..."}</h2>
      <div>{company ? <JobsList jobs={company.jobs} /> : "Loading..."}</div>
    </div>
  );
};

export default CompanyDetails;
