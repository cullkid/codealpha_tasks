import { useState } from "react";
import AgeCalculator from "./components/AgeCalculator";
import AgeResult from "./components/AgeResult";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import ResetButton from "./components/ResetButton";

function App() {
  const [myAge, setMyAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const yearsDiff = differenceInYears(today, birthDateObj);
    const monthsDiff = differenceInMonths(today, birthDateObj);
    const daysDiff = differenceInDays(today, birthDateObj);

    setMyAge({
      years: yearsDiff,
      months: monthsDiff,
      days: daysDiff,
    });
  };

  const resetResult = () => {
    setMyAge(null);
    setBirthDate("");
  };

  return (
    <div className="bg-sky-300 h-screen">
      <AgeCalculator calculateAge={calculateAge} />
      {myAge && <AgeResult myAge={myAge} />}
      <ResetButton resetResult={resetResult} />
    </div>
  );
}

export default App;
