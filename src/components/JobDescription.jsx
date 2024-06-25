import React from "react";
import JobTitle from "./JobTitle";
import JobEligibility from "./JobEligibility";
import About from "./About";
const JobDescription = () => {
  return (
    <div className="grow border-r-2 ">
      <JobTitle />
      <JobEligibility />
      <About />
    </div>
  );
};

export default JobDescription;
