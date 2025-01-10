import { goalType, priorityEnum, Habit, LogWork } from "./types";

export const logWorkHistory: LogWork[] = [
  {
    id: 1,
    date: "Day Tues, 7th Jan 2025",
    highlight: "Worked on ReactJs projects",
    habitsCompleted: ["Workout", "Read book"],
    details:
      "going over aws course - EC2 storage section done - ELB & ASG section done learning react building log work app",
  },
  {
    id: 2,
    date: "Day Wed, 8th Jan 2025",
    highlight: "Completed AWS certification",
    habitsCompleted: ["Meditation", "Yoga"],
    details:
      "finished aws certification exam - passed with flying colors - celebrated with friends - continued learning react",
  },
  {
    id: 3,
    date: "Day Thurs, 9th Jan 2025",
    highlight: "Started new project on Next.js",
    habitsCompleted: ["Workout", "Read book", "Meditation", "Yoga"],
    details:
      "started a new project using Next.js - set up the initial project structure - implemented basic routing and pages",
  },
  {
    id: 4,
    date: "Day Fri, 10th Jan 2025",
    highlight: "Improved CSS skills",
    habitsCompleted: ["Meditation", "Yoga"],
    details:
      "spent the day improving CSS skills - learned about flexbox and grid - applied new knowledge to existing projects",
  },
  {
    id: 5,
    date: "Day Sat, 11th Jan 2025",
    highlight: "Refactored old code",
    habitsCompleted: ["Workout", "Read book"],
    details:
      "refactored old code to improve readability and performance - removed unnecessary dependencies - updated documentation",
  },
  {
    id: 6,
    date: "Day Sun, 12th Jan 2025",
    highlight: "Learned about TypeScript",
    habitsCompleted: ["Meditation", "Yoga", "Workout", "Read book"],
    details:
      "spent the day learning TypeScript - converted a small project from JavaScript to TypeScript - enjoyed the type safety",
  },
  {
    id: 7,
    date: "Day Mon, 13th Jan 2025",
    highlight: "Built a REST API",
    habitsCompleted: ["Workout", "Read book"],
    details:
      "built a REST API using Node.js and Express - implemented CRUD operations - tested the API using Postman",
  },
  {
    id: 8,
    date: "Day Tues, 14th Jan 2025",
    highlight: "Deployed a project to AWS",
    habitsCompleted: ["Meditation", "Yoga"],
    details:
      "deployed a project to AWS using EC2 and S3 - configured security groups and IAM roles - monitored the deployment",
  },
];

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
