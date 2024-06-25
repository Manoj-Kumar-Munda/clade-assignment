import React from "react";
import JobTitle from "./JobTitle";
import JobEligibility from "./JobEligibility";
const JobDescription = () => {
  return (
    <div className="grow border-r-2 ">
      <JobTitle />
      <JobEligibility />
    </div>
  );
};

export default JobDescription;
