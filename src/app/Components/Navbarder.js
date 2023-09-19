// InfoBox.js
import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";
import Suggestions from "./Suggestions";
import SuggestedProfile from "./SuggestedProfile";
import FooterLinks from "./FooterLinks";

const Navbarder = () => {
  return (
    <div className="mt-12 ml-4">
      <div className="flex mt-4 items-center">
        <Avatar/>
      </div>
        <Suggestions />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
      <div className="mt-12 flex items-center justify-between">
        <FooterLinks />
      </div>
    </div>
  );
};

export default Navbarder;

