export interface IWorkoutItem {
  id: number;
  day: string;
  workout: string;
}

export interface IWorkoutSection {
  month: string;
  data: IWorkoutItem[];
}

export const workoutSections: IWorkoutSection[] = [
  {
    month: "April, 2024",
    data: [
      { id: 0, day: "Tuesday", workout: "Chest, Triceps, Shoulders" },
      { id: 1, day: "Wednesday", workout: "Legs" },
      { id: 2, day: "Thursday", workout: "Cardio" },
    ],
  },
  {
    month: "May, 2024",
    data: [
      { id: 3, day: "Monday", workout: "Back, Biceps, Press" },
      { id: 4, day: "Saturday", workout: "Cardio" },
      { id: 5, day: "Sunday", workout: "Cardio" },
      { id: 6, day: "Monday", workout: "Biceps" },
    ],
  },
];
