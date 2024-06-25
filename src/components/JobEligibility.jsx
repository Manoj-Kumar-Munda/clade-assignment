import React from "react";
import SkillBtn from "./SkillBtn";
import figmaIcon from "../assets/icons/"

const JobEligibility = () => {
  return (
    <div className="border-b">
      <div className="mt-4 mb-3 pl-10 flex gap-6 max-w-3xl justify-between">
        <div className="space-y-2">
          <h2 className="text-[#6E6D6D]">Skills required</h2>
          <div className="flex flex-col gap-1">
            <SkillBtn  />



          </div>
        </div>

        <div>
          <h2 className="text-[#6E6D6D]">Prefered language</h2>
        </div>

        <div>
          <h2 className="text-[#6E6D6D]">Type</h2>
        </div>

        <div>
          <h2 className="text-[#6E6D6D]">Years of experience</h2>
        </div>
      </div>
    </div>
  );
};

export default JobEligibility;
