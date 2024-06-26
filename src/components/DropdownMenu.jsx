import React, { useEffect } from "react";
import messages from "../assets/icons/message.png";
import payments from "../assets/icons/payments.png";
import application from "../assets/icons/application.png";

const DropdownMenu = ({ isShow }) => {

  return (
    <div className={` md:hidden absolute shadow-btn rounded-lg w-max px-4 py-4 top-full right-2 bg-white border flex flex-col gap-2 transition delay-150 duration-300 ${ isShow ? "opacity-100  translate-y-1": "opacity-0 -translate-y-1"}`}>
      <div className="flex gap-3 items-center">
        <img className="w-4 h-4" src={messages} alt="messages" />
        <span className="text-sm">Messages</span>
      </div>

      <div className="flex gap-3 items-center">
        <img className="w-4 h-4" src={payments} alt="payments" />
        <span className="text-sm">Payments</span>
      </div>

      <div className="flex gap-3 items-center">
        <img className="w-4 h-4" src={application} alt="application" />
        <span className="text-sm">Application</span>

      </div>
    </div>
  );
};

export default DropdownMenu;
