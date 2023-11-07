import React from "react";
import Job from "./Job";

const JobsList = ({ jobs, companyName }) => {
  return (
    <div>
      <div>
        {jobs.map((j) => (
          <Job
            key={j.id}
            title={j.title}
            salary={j.salary}
            equity={j.equity}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
