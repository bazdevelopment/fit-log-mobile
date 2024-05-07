import { ISet } from "../../../../context/workout-context/workout-context.interface";
import WorkoutExerciseRow from "../workout-exercise-set-row";
import { IWorkoutExerciseSetList } from "./WorkoutExerciseSetList.interface";

/**
 * Component used to display the list wth all the sets per exercise
 */
const WorkoutExerciseSetList = ({ sets, isEditable, groupName, onUpdateInputs }: IWorkoutExerciseSetList) => {
  return (
    <>
      {sets.map((set: ISet, index: number) => (
        <WorkoutExerciseRow
          groupName={groupName}
          isEditable={isEditable}
          key={`${index}-${groupName}-${set.id}`}
          set={set}
          additionalContainerStyle="w-[85%] flex-row items-center self-end"
          index={index}
          onUpdateInputs={onUpdateInputs}
        />
      ))}
    </>
  );
};

export default WorkoutExerciseSetList;
