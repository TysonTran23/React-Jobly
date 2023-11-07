import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../forms/SearchForm";
import Company from "./Company";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    try {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
      console.log(companies);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Companies-List">
      <h1>Companies List</h1>
      <SearchForm />
      <div className="CompaniesList-List">
        {companies.map((c) => (
          <Company
            key={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl}
            handle={c.handle}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;
