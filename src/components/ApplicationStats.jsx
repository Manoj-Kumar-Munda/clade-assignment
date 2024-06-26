import React from "react";
import deleteIcon from "../assets/icons/trashIcon.png";
import editIcon from "../assets/icons/editIcon.png";
import applicantsIcon from "../assets/icons/application.png";
import viewsIcon from "../assets/icons/views.png";
import matchesIcon from "../assets/icons/matches.png";
import messages from "../assets/icons/message.png";
import QuoteCard from "./QuoteCard";

const ApplicationStats = () => {
  return (
    <div className="hidden md:block basis-96 px-2 mt-5">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <button className="border border-btn-secondary-border grow rounded-lg flex gap-2 items-center justify-center bg-[#FEF4F2] py-3">
            <img src={deleteIcon} alt="delete" />
            <span className="text-[#DC4A2D]">Delete job</span>
          </button>

          <button className="grow rounded-lg flex items-center justify-center gap-2 bg-btn-primary-bg py-3">
            <img src={editIcon} alt="edit" />
            <span className="text-white">Edit job</span>
          </button>
        </div>

        <div className="flex flex-col px-2 divide-y-2">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-start gap-2">
                    <img src={applicantsIcon} alt="applicants" />
                    <span className="text-light-gray">Applicants</span>
                </div>
                <span>400</span>
            </div>

            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                    <img src={matchesIcon} alt="matches" />
                    <span className="text-light-gray">Matches</span>
                </div>
                <span>100</span>
            </div>

            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                    <img src={messages} alt="messages" />
                    <span className="text-light-gray">Messages</span>
                </div>
                <span>147</span>
            </div>

            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2 ">
                    <img src={viewsIcon} alt="views" />
                    <span className="text-light-gray">Views</span>
                </div>
                <span>400</span>
            </div>

        </div>
      </div>

      <QuoteCard />


    </div>


  );
};

export default ApplicationStats;
