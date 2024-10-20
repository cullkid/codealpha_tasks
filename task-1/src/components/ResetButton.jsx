import React from "react";

const ResetButton = ({ resetResult }) => {
  return (
    <div className="relative flex items-center justify-center top-[2rem]">
      <button
        onClick={resetResult}
        className="bg-sky-100 py-3 px-10 rounded-md text-xl text-black font-extrabold"
      >
        Clear result
      </button>
    </div>
  );
};

export default ResetButton;
