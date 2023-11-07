import React from "react";

const Job = ({ title, salary, equity, }) => {
  return (
    <div>
      <h3>{title}</h3>

      <ul>
        <li>Salary: {salary}</li>
        <li>Equity: {equity}</li>
      </ul>
    </div>
  );
};

export default Job;
