import { FaPlus } from "react-icons/fa6";
import { getCurrentYear } from "../utils/utils";
import { useState } from "react";
import LogWorkForm from "./forms/LogWorkForm";
import Modal from "./ui/Modal";

const ContributionsChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col justify-center gap-5">
      <section className="flex flex-row items-center justify-between">
        <h2 className="text-lg text-purple-500 font-semibold">
          Year {getCurrentYear()}
        </h2>
        <button
          onClick={openModal}
          type="button"
          className="flex flex-row gap-3 items-center bg-blue-400 hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring-2 focus:blue-green-400 focus:ring-opacity-75 p-2 rounded-lg text-white shadow-md transition duration-200"
        >
          <FaPlus className="text-lg" />
          <p className="text-sm font-semibold">Add LogWork</p>
        </button>
      </section>
      <section>{/* make the github contribution charts later */}</section>
      <section className="flex justify-center items-center">
        <p className="text-sm text-gray-400">
          Instruction: Click on the box to fill that day's log work
        </p>
      </section>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <LogWorkForm />
        </Modal>
      )}
    </div>
  );
};

export default ContributionsChart;
