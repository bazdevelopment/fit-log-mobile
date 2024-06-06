import { Animated } from "react-native";
import { showMessage } from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { IErrorResponse } from "../../../../api/auth/auth.types";
import { queryClient } from "../../../../api/common";
import { useAddSetToWorkoutExercise, useUpdateSet } from "../../../../api/workout/workout.hooks";
import TrashIcon from "../../../../assets/icons/Trash";
import Icon from "../../../../components/atoms/icon";
import SwipeableRow from "../../../../components/atoms/swipeable-row";
import { ISet } from "../../../../context/workout-context/workout-context.interface";
import { Colors } from "../../../../styles/colors";
import WorkoutExerciseRow from "../workout-exercise-set-row";
import { IWorkoutExerciseSetList } from "./WorkoutExerciseSetList.interface";

const handleOnError = (error: IErrorResponse) => {
  showMessage({
    message: error.message,
    type: "danger",
    duration: 10000,
  });
};
/**
 * Component used to display the list wth all the sets per exercise
 */
const WorkoutExerciseSetList = ({ sets, isEditable, isSwipeEnabled, workoutExerciseId }: IWorkoutExerciseSetList) => {
  const { mutate: handleAddSetToWorkoutExercise } = useAddSetToWorkoutExercise({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-workouts-by-date"] });
    },
    onError: handleOnError,
  });

  const { mutate: handleUpdateSet } = useUpdateSet({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-workouts-by-date"] });
    },
  });

  return (
    <GestureHandlerRootView>
      {sets.map((set: ISet, index: number) => (
        <SwipeableRow renderRightActions={getSetRightSwipeAction} key={set.id} isSwipeEnabled={isSwipeEnabled}>
          <WorkoutExerciseRow
            isEditable={isEditable}
            set={set}
            additionalContainerStyle="w-[85%] flex-row items-center self-end"
            index={index}
            workoutExerciseId={workoutExerciseId}
            handleAddSetToWorkoutExercise={handleAddSetToWorkoutExercise}
            handleUpdateSet={handleUpdateSet}
          />
        </SwipeableRow>
      ))}
    </GestureHandlerRootView>
  );
};

export default WorkoutExerciseSetList;

/* function used to display the animated swipe right action*/
const getSetRightSwipeAction = (
  _progress: Animated.AnimatedInterpolation<number>,
  dragAnimatedValue: Animated.AnimatedInterpolation<number>
) => {
  const opacity = dragAnimatedValue.interpolate({
    inputRange: [-50, 0],
    outputRange: [4, 0],
    extrapolate: "clamp",
  });

  return (
    <Animated.View style={{ opacity }}>
      <Icon
        onPress={() => {}}
        iconElement={<TrashIcon width={30} height={30} color={Colors.error} />}
        additionalClassName="mt-[8px]"
        additionalInnerClassName="p-0 h-0 w-0"
      />
    </Animated.View>
  );
};
