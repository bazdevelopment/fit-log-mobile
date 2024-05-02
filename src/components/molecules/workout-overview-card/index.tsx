import { router } from "expo-router";
import { View } from "react-native";

import { IWorkoutItem } from "../../../__mocks__/workout-schedule-mock";
import ChevronIcon from "../../../assets/icons/SvgExample";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";

/**
 * Workout overview card
 * used in the schedule screen for each day when there are some workout done
 */
const WorkoutOverviewCard = ({ workout }: { workout: IWorkoutItem }) => {
  return (
    <View className=" flex-row items-center justify-between rounded-lg bg-white p-4">
      <View className="flex-1 flex-row items-center gap-4">
        <View className="w-[80px]">
          <Label labelText="20" additionalLabelStyle="text-gray-900 font-primary-bold" as="h3" />
          <Label labelText={workout.day} additionalLabelStyle="text-gray-500" as="h5" />
        </View>
        <Label labelText={workout.workout} as="h5" additionalLabelStyle="font-primary-semi-bold" />
      </View>
      <View className="mr-[-10px]">
        <Icon
          iconElement={<ChevronIcon width={14} height={14} fill={Colors.grey} />}
          onPress={() =>
            router.push({
              pathname: "workout-details-screen",
              params: {
                day: "20 Apr - Saturday",
              },
            })
          }
        />
      </View>
    </View>
  );
};

export default WorkoutOverviewCard;
