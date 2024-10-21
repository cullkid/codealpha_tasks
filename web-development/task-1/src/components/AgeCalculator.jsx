import React from "react";
import { useState } from "react";

const AgeCalculator = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleCalculateAge = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  const resetResult = () => {
    setBirthDate("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="text-4xl font-black py-[1rem]">Calculate Your Age</div>
        <h3 className="text-xl font-semibold">
          Calculate your age with the input form below
        </h3>
      </div>
      <div className="flex items-center justify-center w-screen bg-sky-300 h-[20rem]">
        <div className="absolute px-[15rem] py-[5rem] bg-gray-200 rounded-md">
          <div className="flex gap-[15rem] justify-start rounded-md border-4 border-gray-300 bg-white">
            <input
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              type="date"
              className="focus:outline-none focus:ring-0 border-none p-4"
            />

            <button
              disabled={!birthDate}
              onClick={handleCalculateAge}
              className=" p-4 bg-sky-300 font-extrabold text-xl text-gray-200"
            >
              Calculate
            </button>
          </div>
          <div className="relative flex items-center justify-center top-[2rem]">
            <button
              onClick={resetResult}
              className="bg-sky-300 py-3 px-10 rounded-md text-xl text-gray-200 font-extrabold"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
