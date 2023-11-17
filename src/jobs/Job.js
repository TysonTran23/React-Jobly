import React, { useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";
import "./Jobs.css";

const Job = ({ id, title, salary, equity }) => {
  const { applyingToJob, hasAppliedToJob } = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply() {
    if (applied) return;
    try {
      await applyingToJob(id);
      setApplied(true);
    } catch (e) {
      console.log("Failed to apply to job", e);
    }
  }

  return (
    <div className="job-card">
      <div className="job-details">
        <h3>{title}</h3>
        <ul>
          <li>Salary: {salary}</li>
          <li>Equity: {equity}</li>
        </ul>
      </div>
      <button onClick={handleApply} disabled={applied} className="job-apply-button">
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
};

export default Job;
