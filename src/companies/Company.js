import React from "react";
import { Link } from "react-router-dom";

const Company = ({ name, description, logoUrl, handle }) => {
  return (
    <Link className="Company-Link" to={`/companies/${handle}`}>
      <div>
        <h2 className="company-card">
          {name}
          {logoUrl && <img src={logoUrl} className="company-logo" />}
        </h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Company;
