// Nombre del archivo: Sidebar.js
import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";
import PerfilLink from "./PerfilLink";

const Navbarizq = () => {
  return (
    <div className="w-64">
        <Sidebar />     
        <div className="flex mt-2 px-6">
            <PerfilLink />
        </div>
        <div className="flex mt-6 px-8">
            <a href="" className="flex rounded-lg pr-24 pb-3 pt-3 pl-2  hover:bg-zinc-800">
                <span className="">
                    <image>
                    <svg aria-label="Configuración" class="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24" speechify-initial-font-family="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif" speechify-initial-font-size="14px" ><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="4" y2="4" speechify-initial-font-family="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif" speechify-initial-font-size="14px"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="12" y2="12" speechify-initial-font-family="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif" speechify-initial-font-size="14px" ></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="20" y2="20" speechify-initial-font-family="-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif" speechify-initial-font-size="14px" ></line></svg></image>
                </span>
                <span className="ml-4">Mas</span>
            </a>
        </div>
      </div>
  );
}

export default Navbarizq;
