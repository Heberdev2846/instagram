// InfoBox.js
import Image from "next/image";
import React from "react";

const Navbarder = () => {
  return (
    <div className="mt-12 ml-4">
      <div className="flex items-center">
        <Image
          src="/img/elforrex.jpg"
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full ml-4 "
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
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm mt-1 ml-1 text-neutral-400 font-semibold">
          Sugerencias para ti
        </p>
        <a href="/">
          <span className="text-white hover:text-zinc-500 font-semibold text-xs ml-28 ">
            Ver todo
          </span>
        </a>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex">
          <Image
            src="/img/elforrex.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full ml-4 "
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
                <p className="text-xs text-blue-500 hover:text-white ">
                  Seguir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex">
          <Image
            src="/img/elforrex.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full ml-4 "
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
                <p className="text-xs text-blue-500 hover:text-white ">
                  Seguir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex">
          <Image
            src="/img/elforrex.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full ml-4 "
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
                <p className="text-xs text-blue-500 hover:text-white ">
                  Seguir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex">
          <Image
            src="/img/elforrex.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full ml-4 "
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
                <p className="text-xs text-blue-500 hover:text-white ">
                  Seguir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex">
          <Image
            src="/img/elforrex.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full ml-4 "
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
                <p className="text-xs text-blue-500 hover:text-white ">
                  Seguir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between">
        <div className="ml-4">
          <p className=" text-xs text-zinc-500">
            Información . Ayuda . Prensa . API .
          </p>
          <p className="text-xs text-zinc-500">
            Empleo . Privacidad . Condiciones . Ubicaciones .
          </p>
          <p className="text-xs text-zinc-500">Idioma . Meta Verified</p>
          <p className="text-xs mt-5 text-zinc-500">
            © 2023 INSTAGRAM FROM META
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbarder;

{
  /* <div className="border h-screen flex w-2/4">
  <div className="border flex">
    <div className="border ">
      <p className="font-semibold">Elforrex</p>
      <p>Elforrex</p>
    </div>
    <div className="border">
      <p className="">Cambiar</p>
    </div>
  </div>
</div>; */
}
