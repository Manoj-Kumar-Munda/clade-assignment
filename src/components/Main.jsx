import React from "react";
import Tabs from "./Tabs";
import JobDescription from "./JobDescription";
import ApplicationStats from "./ApplicationStats";

const Main = () => {
  return (
    <div className="">
      <Tabs />
      <div className="flex">
        <JobDescription />
        <ApplicationStats />
      </div>
    </div>
  );
};

export default Main;
