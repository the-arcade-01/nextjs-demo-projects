import { habitList } from "../data/constants";
import { Habit } from "../data/types";
import { MdEdit, MdRemove } from "react-icons/md";
import { getFormatedStreak } from "../utils/utils";
import { FaPlus } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";
import { useState } from "react";

const HabitsList = () => {
  const [sortBy, setSortBy] = useState("Priority");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSortBy(e.target.value);
    console.log(sortBy);
  };
  return (
    <div className="flex flex-col gap-2 border border-gray-200 rounded-xl p-5 w-1/4">
      <section className="flex flex-row justify-between">
        <h2 className="font-semibold text-purple-600">All habits progress</h2>
        <div className="relative">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-2"
          >
            <option value="Priority">Priority</option>
            <option value="Streak">Streak</option>
            <option value="Completed Days">Completed Days</option>
          </select>
        </div>
      </section>
      <section>
        {habitList.map((habit) => (
          <HabitCard key={habit.id} {...habit} />
        ))}
      </section>
      <section className="mt-4">
        <button className="flex flex-row gap-3 items-center bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 px-4 py-2 rounded-lg text-white shadow-md transition duration-200">
          <FaPlus className="text-lg" />
          <p className="text-sm font-semibold">Add Habit</p>
        </button>
      </section>
    </div>
  );
};

export default HabitsList;

const HabitCard = ({
  name,
  streak,
  goalType,
  noOfGoalDaySet,
  totalCompletedDays,
}: Habit) => {
  const handleEdit = () => {
    console.log("me edit clicked");
  };
  const handleDelete = () => {
    console.log("me delete clicked");
  };

  const percentage = ((totalCompletedDays / noOfGoalDaySet) * 100).toFixed(2);

  return (
    <div className="relative border border-gray-300 rounded-lg p-4 shadow-md w-full flex flex-row justify-between items-center my-3">
      <section className="flex flex-col md:flex-row items-center gap-x-2 mb-4 md:mb-0 relative group">
        <p className="text-sm font-semibold relative z-10 text-gray-700">
          {name}
        </p>
        <p className="text-sm text-gray-600 relative z-10">
          {getFormatedStreak(goalType, streak)}
        </p>
      </section>
      <section className="flex flex-row gap-5 items-center relative">
        <div className="group relative">
          <IoAnalyticsOutline className="text-green-700" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-gray-800 text-sm font-semibold flex flex-row gap-2 items-center">
              <p className="text-green-600 font-semibold text-lg">
                {percentage}%
              </p>
              done, keep going 🚀
            </span>
          </div>
        </div>
        <button
          className="group relative"
          onClick={handleEdit}
          aria-label="Edit"
        >
          <MdEdit className="text-blue-400 cursor-pointer transition duration-200 hover:text-blue-500" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Edit
          </span>
        </button>
        <button
          className="group relative"
          onClick={handleDelete}
          aria-label="Delete"
        >
          <MdRemove className="text-red-500 cursor-pointer transition duration-200 hover:text-red-600" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Delete
          </span>
        </button>
      </section>
    </div>
  );
};
