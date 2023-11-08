import React, { useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";

const Job = ({ id, title, salary, equity }) => {
  const { applyingToJob, hasAppliedToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply() {
    if (hasAppliedToJob(id)) return;
    applyingToJob(id);
    setApplied(true);
  }

  return (
    <div>
      <h3>{title}</h3>

      <ul>
        <li>Salary: {salary}</li>
        <li>Equity: {equity}</li>
      </ul>
      <button onClick={handleApply} disabled={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
};

export default Job;
