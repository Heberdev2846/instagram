// SuggestedProfile.js
import Image from "next/image";
import React from "react";

const SuggestedProfile = () => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex">
        <Image
          src="/img/elforrex.jpg"
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full ml-4"
        />
        <div className="ml-3 flex items-center">
          <div>
            <a href="/">
              <p className="float-left text-sm font-semibold">elforrex</p>
            </a>
            <p className="text-zinc-500 text-sm">Elforrex</p>
          </div>
          <div className="ml-36">
            <a href="/">
              <p className="text-xs text-blue-500 hover:text-white">
                Seguir
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedProfile;
