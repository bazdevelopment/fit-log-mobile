import { TExerciseWithSets } from "../../../api/workout/workout.types";

export interface IWorkoutActionCard {
  workoutId: string;
  workoutName: string;
  workoutAction: string;
  isWorkoutCompleted: boolean;
  btnText: string;
  musclesGroupTarget: string[];
  exercises: TExerciseWithSets[];
  handleWorkoutAction: ({ workoutAction, workoutId }: { workoutAction: string; workoutId: string }) => void;
  startDateTime: Date;
  endDateTime: Date;
}
