import { IFitnessExercise } from "../../../../__mocks__/fitness-exercises";
import WorkoutSelectedExercise from "../workout-selected-exercise";
import { IWorkoutSelectedExerciseList } from "./WorkoutSelectedExerciseList.interface";

/**
 * Component used to display all the exercises linked to a specific workout
 */
const WorkoutSelectedExerciseList = ({
  groupName,
  exercises,
  dispatch,
  isEditable,
  onUpdateInputs,
}: IWorkoutSelectedExerciseList) => {
  return (
    <>
      {exercises.map((exercise: IFitnessExercise) => (
        <WorkoutSelectedExercise
          isEditable={isEditable}
          key={exercise.id}
          exercise={exercise}
          groupName={groupName}
          dispatch={dispatch}
          onUpdateInputs={onUpdateInputs}
        />
      ))}
    </>
  );
};

export default WorkoutSelectedExerciseList;
