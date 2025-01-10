export enum priorityEnum {
  HIGH,
  LOW,
  MEDIUM,
}

export enum goalType {
  WEEKS,
  DAYS,
}

export interface Habit {
  id: number;
  name: string;
  streak: number; // current user days streak
  priority: priorityEnum;
  noOfGoalDaySet: number; // total days the user will perform this habit
  goalType: goalType; // week or days eg: 2 times a week or no. of days
  totalCompletedDays: number;
}

export interface LogWork {
  id: number;
  date: string;
  highlight: string;
  habitsCompleted: string[]; // eg: ["Workout", "Read book"]
  details: string;
}
