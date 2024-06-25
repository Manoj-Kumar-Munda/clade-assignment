import React from "react";

const Tabs = () => {
  return (
    <div className=" pl-10 border border-[#E7E7E7]">
      <div className="">
        <ul className="flex justify-start gap-4 sm:gap-10 md:gap-20 items-center">
          <li className="py-5 relative">
            <span className="text-[#DC4A2D] text-lg text-nowrap">Job preview</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-1 bg-[#DC4A2D] "></div>
          </li>
          <li className="py-5">
            <span className="text-lg text-[#888888]">Applicants</span>
          </li>

          <li className="py-5">
            <span className="text-lg text-[#888888]">Match</span>
          </li>

          <li className="py-5">
            <span className="text-lg text-[#888888]">Progress</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Tabs;
