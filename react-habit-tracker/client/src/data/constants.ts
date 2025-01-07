import { goalType, priorityEnum, Habit } from "./types";

export const habitList: Habit[] = [
  {
    id: 1,
    name: "Workout",
    streak: 7,
    priority: priorityEnum.HIGH,
    goalType: goalType.DAYS,
    noOfGoalDaySet: 365,
    totalCompletedDays: 7,
  },
  {
    id: 2,
    name: "Japanese Study",
    streak: 2,
    priority: priorityEnum.LOW,
    goalType: goalType.DAYS,
    noOfGoalDaySet: 150,
    totalCompletedDays: 7,
  },
  {
    id: 3,
    name: "Coding Projects",
    streak: 5,
    priority: priorityEnum.HIGH,
    goalType: goalType.DAYS,
    noOfGoalDaySet: 365,
    totalCompletedDays: 7,
  },
  {
    id: 4,
    name: "Read book",
    streak: 3,
    priority: priorityEnum.MEDIUM,
    goalType: goalType.DAYS,
    noOfGoalDaySet: 100,
    totalCompletedDays: 3,
  },
];
