// Nombre del archivo: PerfilLink.js
import React from "react";
import Image from "next/image";

const PerfilLink = () => {
  return (
    <a href="" className="flex rounded-lg pr-24 pb-3 pt-3 pl-2 hover:bg-zinc-800">
      <span className="mr-2 ml-2">
        <Image
          src="/img/elforrex.jpg"
          width={25}
          height={25}
          alt="Picture of the author"
          className="rounded-full"
        />
      </span>
      <span className="ml-2">Perfil</span>
    </a>
  );
}

export default PerfilLink;
