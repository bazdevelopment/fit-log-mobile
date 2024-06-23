import dayjs from "dayjs";
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
const WorkoutOverviewCard = ({
  workout,
  isCurrentDayFocused,
}: {
  workout: IWorkoutItem;
  isCurrentDayFocused: boolean;
}) => {
  const hasWorkouts = workout?.data;
  const dot = <View className="size-[6px] rounded-full bg-secondary-default" />;

  return (
    <View
      className={`flex-row items-center justify-between rounded-lg bg-white p-4 ${isCurrentDayFocused && "border-2 mx-1 border-primary-default shadow"}`}
    >
      <View className="flex-1 flex-row items-center gap-4">
        <View className="w-[80px]">
          <Label
            labelText={dayjs(workout.day).format("DD")}
            additionalLabelStyle="text-gray-900 font-primary-bold"
            as="h3"
          />
          <Label labelText={dayjs(workout.day).format("dddd")} additionalLabelStyle="text-gray-500" as="h5" />
        </View>
        <View className="w-[70%] flex-col flex-wrap">
          {hasWorkouts ? (
            workout?.data?.map(item => (
              <Label
                icon={dot}
                key={item.id}
                labelText={item.name}
                as="h5"
                additionalLabelStyle="font-primary-semi-bold"
              />
            ))
          ) : (
            <Label labelText="No workouts yet!" as="h5" additionalLabelStyle="font-primary-semi-bold" />
          )}
        </View>
      </View>
      <View className="mr-[-10px]">
        <Icon
          iconElement={<ChevronIcon width={14} height={14} fill={Colors.grey} />}
          onPress={() =>
            router.push({
              pathname: "workout-details-screen",
              params: {
                day: workout.day,
              },
            })
          }
        />
      </View>
    </View>
  );
};

export default WorkoutOverviewCard;
