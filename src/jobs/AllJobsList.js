import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../forms/SearchForm";
import JobsList from "./JobsList";

const AllJobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    try {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
      console.log(jobs);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <SearchForm />
      <div>
        <JobsList jobs={jobs} />
      </div>
    </div>
  );
};

export default AllJobsList;
