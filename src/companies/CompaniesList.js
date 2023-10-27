import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies(name) {
    try {
      let companies = await JoblyApi.getCompanies(name);
      setCompanies(companies);
      console.log(companies);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Companies-List">
      <h1>Companies List</h1>
      <ul>
        {companies.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesList;
