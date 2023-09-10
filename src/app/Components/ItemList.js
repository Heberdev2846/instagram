// ItemList.js
import Image from "next/image";
import React from "react";

const ItemList = () => {
  return (
    <div className="">
      <div className="p-8 mt-4">
        <ul className="flex ml-2">
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
            <li className="h-16 w-16 mr-4"> 
                <Image
                src="/img/elforrex.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
                />
            </li>
        </ul>
      </div>
      <div className="h-[500px] overflow-y-auto ml-28 mr-32">
        <div className="mt-6 ml-2">
          <div className="flex">
            <Image
              src="/img/elforrex.jpg"
              width={40}
              height={40}
              alt="Picture of the author"
              className="rounded-full ml-4 "
            />
            <div className="ml-3">
              <a href="/">
                <p className="text-sm font-semibold">elforrex</p>
              </a>   
              <p className="text-xs">Cordoba</p>
            </div>
            <div className="ml-2">
              <a href="/">
                 <p className="text-xs text-zinc-700"> · 3H</p>
              </a>
            </div>
            <div className="">
                <a href="/">
                    <p className="ml-60 mt-1">
                      <svg aria-label="Más opciones" class="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24" speechify-initial-font-size="14px" ><circle cx="12" cy="12" r="1.5" speechify-initial-font-size="14px"></circle><circle cx="6" cy="12" r="1.5" speechify-initial-font-size="14px"></circle><circle cx="18" cy="12" r="1.5" speechify-initial-font-size="14px" ></circle></svg>
                    </p>
                </a>
            </div>
          </div>  
        </div>
        <div className="w-96 ml-10 mt-2 border border-zinc-700">
            <Image
              src="/img/elforrex.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              className=""
            />
        </div>
      </div>
    </div>
  );
};

export default ItemList;
