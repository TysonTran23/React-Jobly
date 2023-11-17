import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";

const Company = ({ name, description, logoUrl, handle }) => {
  return (
    <Link className="Company-Link" to={`/companies/${handle}`}>
      <div className="company-card">
        <div className="company-details">
          <h2 className="company-name">{name}</h2>
          <p>{description}</p>
        </div>
        {logoUrl && (
          <img src={logoUrl} alt={`${name} logo`} className="company-logo" />
        )}
      </div>
    </Link>
  );
};

export default Company;
