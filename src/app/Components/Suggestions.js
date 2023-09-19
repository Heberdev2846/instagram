// Suggestions.js
import React from "react";

const Suggestions = () => {
  return (
    <div className="mt-4 flex justify-between items-center">
      <p className="text-sm mt-1 ml-1 text-neutral-400 font-semibold">
        Sugerencias para ti
      </p>
      <a href="/">
        <span className="text-white hover:text-zinc-500 font-semibold text-xs ml-28">
          Ver todo
        </span>
      </a>
    </div>
  );
};

export default Suggestions;
