// Archivo: SidebarLink.js
import React from "react";

const SidebarLink = ({ icon, text }) => {
  return (
    <div className="flex mt-2 px-8">
      <a href="" className="flex rounded-lg pr-14 pb-3 pt-3 pl-2 hover:bg-zinc-800">
        <span className="">
          {icon}
        </span>
        <span className="ml-4">{text}</span>
      </a>
    </div>
  );
};

export default SidebarLink;
