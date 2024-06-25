import React from "react";
import JobTitle from "./JobTitle";
import JobEligibility from "./JobEligibility";
import About from "./About";
import Company from "./Company";
const JobDescription = () => {
  return (
    <div className="grow border-r-2 ">
      <JobTitle />
      <JobEligibility />
      <About />
      <Company />
    </div>
  );
};

export default JobDescription;
