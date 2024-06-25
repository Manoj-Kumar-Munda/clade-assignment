import React from "react";
import locationIcon from "../assets/icons/location.png";
import salaryIcon from "../assets/icons/salary.png";
import Dot from "./Dot";
const JobTitle = () => {
  return (
    <div className="border-b">
      <div className="pl-10  flex flex-col gap-4 my-4">
        <div className=" flex items-center gap-4">
          <h1 className="text-4xl font-bold text-[#3D3D3D]">
            Senior Product Designer
          </h1>
          <Dot />
          <span className="text-light-gray">Posted 2 days ago</span>

          <button className="flex items-center px-2 py-1 rounded-3xl gap-2 border  border-[#ABEFC6] bg-[#ECFDF3]">
            <div className="w-1.5 h-1.5 bg-[#17B26A] rounded-full"></div>
            <span className="font-medium text-[#067647] text-xs">Open</span>
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <img src={locationIcon} alt="location" />
            <span className="text-[#5D5D5D] text-xl">Delaware, USA</span>
          </div>

          <Dot />

          <div className="flex gap-2 items-center">
            <img src={salaryIcon} alt="salary" />
            <span className="text-[#5D5D5D] text-xl">$300k-$400k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
