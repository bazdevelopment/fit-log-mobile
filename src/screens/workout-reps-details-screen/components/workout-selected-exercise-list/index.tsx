import { TExerciseWithSets } from "../../../../api/workout/workout.types";
import WorkoutSelectedExercise from "../workout-selected-exercise";
import { IWorkoutSelectedExerciseList } from "./WorkoutSelectedExerciseList.interface";

/**
 * Component used to display all the exercises linked to a specific workout
 */
const WorkoutSelectedExerciseList = ({
  exercises,
  isEditable,
  onUpdateInputs,
  isSwipeEnabled,
}: IWorkoutSelectedExerciseList) => {
  return (
    <>
      {exercises.map((exerciseDetails: TExerciseWithSets) => (
        <WorkoutSelectedExercise
          isEditable={isEditable}
          key={exerciseDetails.id}
          exerciseDetails={exerciseDetails}
          onUpdateInputs={onUpdateInputs}
          isSwipeEnabled={isSwipeEnabled}
        />
      ))}
    </>
  );
};

export default WorkoutSelectedExerciseList;
