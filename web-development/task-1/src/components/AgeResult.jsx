import React from "react";

const AgeResult = ({ myAge }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[9rem]">
        <div className="flex item-center justify-center gap-2">
          <span className="text-xl font-bold right-[50rem]">Year:</span>
          <span className="bg-white px-6 py-1">{myAge.years}</span>
        </div>
        <div className="flex item-center justify-center gap-2">
          <span className="text-xl font-bold">Months:</span>
          <span className="bg-white px-6 py-1">{myAge.months}</span>
        </div>
        <div className="flex item-center justify-center gap-2">
          <span className="text-xl font-bold">Days:</span>
          <span className="bg-white px-6 py-1">{myAge.days}</span>
        </div>
      </div>
      <div className="flex gap-[6rem] items-center justify-center py-4">
        <p className="flex items-start">Calculate your age by year</p>
        <p className="flex items-start">Calculate your age by months</p>
        <p className="flex items-start">Calculate your age by days</p>
      </div>
    </div>
  );
};

export default AgeResult;
