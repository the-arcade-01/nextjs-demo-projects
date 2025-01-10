import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { z } from "zod";

const habitFormSchema = z.object({
  name: z.string().nonempty(),
  noOfGoalsDaySet: z
    .number()
    .gt(0, "No. of Goals day should be greater than zero")
    .lte(365, "No. of Goals day should be less than 365"),
  details: z.string().optional(),
});

type HabitForm = z.infer<typeof habitFormSchema>;

const CreateHabitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HabitForm>({
    resolver: zodResolver(habitFormSchema),
  });
  const onSubmit: SubmitHandler<HabitForm> = async (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-5 p-6 bg-white rounded-lg shadow-lg w-full max-w-md"
    >
      <section className="flex flex-col w-full">
        <label className="text-gray-700 font-semibold mb-2">Habit name:</label>
        <input
          type="text"
          {...register("name", { required: "Habit name is required" })}
          placeholder="e.g., Workout"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </section>
      <section className="flex flex-col w-full">
        <label className="text-gray-700 font-semibold mb-2">Goals</label>
        <div className="flex flex-row items-center gap-2">
          <input
            type="number"
            {...register("noOfGoalsDaySet", {
              valueAsNumber: true,
              required: "Number of goals is required",
            })}
            placeholder="e.g., 120"
            className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-700 w-full">days in this year</span>
        </div>
        {errors.noOfGoalsDaySet && (
          <p className="text-red-500 text-sm mt-1">
            {errors.noOfGoalsDaySet.message}
          </p>
        )}
      </section>
      <section className="flex flex-col w-full">
        <label className="text-gray-700 font-semibold mb-2">Details</label>
        <textarea
          {...register("details")}
          placeholder="Enter more details ..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </section>
      {errors.root && (
        <p className="text-red-500 font-semibold">{errors.root.message}</p>
      )}
      <section className="flex flex-row justify-center items-center gap-10">
        <button
          type="reset"
          onClick={() => {
            reset();
          }}
          disabled={isSubmitting}
          className="flex flex-row gap-3 items-center bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-opacity-75 px-4 py-2 rounded-lg text-white shadow-md transition duration-200"
        >
          <MdClear className="text-lg" />
          <p className="text-sm font-semibold">Clear</p>
        </button>
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex flex-row gap-3 items-center bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 px-4 py-2 rounded-lg text-white shadow-md transition duration-200"
        >
          <FaPlus className="text-lg" />
          <p className="text-sm font-semibold">Add Habit</p>
        </button>
      </section>
    </form>
  );
};

export default CreateHabitForm;
