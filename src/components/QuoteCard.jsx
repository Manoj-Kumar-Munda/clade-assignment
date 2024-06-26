import React from "react";
import avatar from "../assets/icons/Avatar.png";
const QuoteCard = () => {
  return (
    <div className="mt-6 px-4 py-6 rounded-xl shadow-card border border-[#F7F7F7]">
      <h2 className="text-xl font-medium">"A quote from a Atlassian."</h2>

      <div className="mt-6 inline-flex items-center gap-4">
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">Name</span>
          <span className="text-light-gray font-medium">Description</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
