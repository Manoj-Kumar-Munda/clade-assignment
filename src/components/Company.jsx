import React from "react";
import logo from "../assets/icons/logo_square.png";

const Company = () => {
  return (
    <div className="border-b">
      <div className="my-5 pl-10 max-w-3xl w-full">
        <div className="flex gap-4 items-center">
          <img src={logo} className="w-10 h-10" alt="logo" />
          <span className="text-xl">Atlassian</span>
          <button className="shadow-btn bg-[#E0EBF9] px-6 py-1 rounded-lg">
            <span className="text-xs font-bold text-[#003788]">Follow</span>
          </button>
        </div>

        <div className="flex justify-between flex-wrap my-5">
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <h3 className="text-light-gray text-sm">Comapny size</h3>
              <p>1k - 2k Employees</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-light-gray text-sm">Sector</h3>
              <p>Information Technology, Infrastructure</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-light-gray text-sm">Founded In</h3>
              <p>2019</p>
            </div>
          </div>

          <div  className="flex flex-col gap-3">
          <div className="space-y-1">
              <h3 className="text-light-gray text-sm">Type</h3>
              <p>Private</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-light-gray text-sm">Funding</h3>
              <p>Bootstrapped</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-light-gray text-sm">Founded By</h3>
              <p>Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
