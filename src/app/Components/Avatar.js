// Avatar.js
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/img/elforrex.jpg"
        width={40}
        height={40}
        alt="Picture of the author"
        className="rounded-full ml-4"
      />
        <div className="ml-3">
            <a href="/">
            <p className="float-left text-sm font-semibold">elforrex</p>
            </a>
            <p className="text-zinc-500 text-sm">Elforrex</p>
        </div>
        <div className="ml-2">
          <a href="/">
            <p className="ml-32 text-xs text-blue-500">Cambiar</p>
          </a>
        </div>
    </div>
  );
};

export default Avatar;

