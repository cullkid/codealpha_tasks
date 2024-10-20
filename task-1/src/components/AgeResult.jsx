import React from "react";

const AgeResult = ({ myAge }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[5rem]">
        <div className="flex item-center justify-center gap-2">
          <span className="text-xl font-bold">Age:</span>
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
      <h3 className="flex items-center justify-center py-[2rem]">
        According your date of birth, you are&nbsp;
        <span className="text-xl font-medium"> {myAge.years}&nbsp; </span>
        years,&nbsp;
        <span className="text-xl font-medium">{myAge.months}&nbsp;</span>
        months,&nbsp;
        <span className="text-xl font-medium"> {myAge.days}</span>&nbsp; days
        old
      </h3>
    </div>
  );
};

export default AgeResult;
