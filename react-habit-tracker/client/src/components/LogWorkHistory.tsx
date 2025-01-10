import { logWorkHistory as history } from "../services/data/constants";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

const LogWorkHistory = () => {
  const [currIndex, setCurrIndex] = useState(history.length - 1);

  const handlePrev = () => {
    setCurrIndex((prev) => (prev === 0 ? history.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrIndex((prev) => (prev === history.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-5 border border-gray-200 rounded-xl p-5 w-1/2">
      <section>
        <h2 className="font-semibold text-purple-500">Log work history</h2>
      </section>
      <section className="flex flex-row justify-between items-center gap-5">
        <FaChevronLeft
          className="text-blue-500 cursor-pointer transition duration-300 hover:text-blue-600"
          onClick={handlePrev}
        />
        <section>
          {history.length > 0 ? (
            <div className="border border-gray-300 rounded-lg p-4 shadow-md w-full max-w-md space-y-2">
              <h2 className="text-lg font-semibold">
                {history[currIndex].date}
              </h2>
              <p className="text-sm text-gray-600 flex items-center space-x-2">
                <span>🌟</span>
                <span>{history[currIndex].highlight}</span>
              </p>
              <p className="text-sm font-semibold">Habits completed:</p>
              <ul className="list-disc list-inside space-y-1">
                {history[currIndex].habitsCompleted.map((habit, index) => (
                  <li
                    key={index}
                    className="text-sm flex items-center space-x-2"
                  >
                    <span>✅</span>
                    <span>{habit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-2">{history[currIndex].details}</p>
            </div>
          ) : (
            <p>No log work history</p>
          )}
        </section>
        <FaChevronRight
          className="text-blue-500 cursor-pointer transition duration-300 hover:text-blue-600"
          onClick={handleNext}
        />
      </section>
    </div>
  );
};

export default LogWorkHistory;
