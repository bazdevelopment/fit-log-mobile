import { TExerciseWithSets } from "../../../../api/workout/workout.types";
import WorkoutSelectedExercise from "../workout-selected-exercise";
import { IWorkoutSelectedExerciseList } from "./WorkoutSelectedExerciseList.interface";

/**
 * Component used to display all the exercises linked to a specific workout
 */
const WorkoutSelectedExerciseList = ({ exercises, isEditable, isSwipeEnabled }: IWorkoutSelectedExerciseList) => {
  return (
    <>
      {exercises.map((exerciseDetails: TExerciseWithSets) => (
        <WorkoutSelectedExercise
          isEditable={isEditable}
          key={exerciseDetails.id}
          exerciseDetails={exerciseDetails}
          isSwipeEnabled={isSwipeEnabled}
        />
      ))}
    </>
  );
};

export default WorkoutSelectedExerciseList;
