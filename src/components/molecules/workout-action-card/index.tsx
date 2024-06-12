import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

import { WORKOUT_ACTION } from "../../../api/workout/workout.types";
import CheckedIcon from "../../../assets/icons/Check";
import ChronometerIcon from "../../../assets/icons/Chronometer";
import MuscleManIcon from "../../../assets/icons/MuscleMan";
import PauseIcon from "../../../assets/icons/Pause";
import PlayIcon from "../../../assets/icons/Play";
import StopIcon from "../../../assets/icons/Stop";
import useWorkoutTimer from "../../../hooks/use-workout-timer/use-workout-timer";
import { Colors } from "../../../styles/colors";
import { minutesToHMConverter } from "../../../utilities/minutes-to-HM-converter";
import Button from "../../atoms/button/button";
import HorizontalLine from "../../atoms/horizontal-line";
import Image from "../../atoms/image";
import Label from "../../atoms/label";
import PulseLoader from "../pulse-loader";
import { IWorkoutActionCard } from "./workoutActionCard.interface";

const dot = <View className="size-[8px] rounded-full bg-secondary-default" />;

const WorkoutActionCard = ({
  workoutId,
  workoutName,
  workoutAction,
  isWorkoutCompleted,
  btnText,
  musclesGroupTarget,
  exercises,
  handleWorkoutAction,
  startDateTime,
  endDateTime,
}: IWorkoutActionCard) => {
  const { timer, stopWorkoutTime, startWorkoutTime, isRunning } = useWorkoutTimer({ startDateTime, endDateTime });
  return (
    <React.Fragment>
      <View className="flex-row  justify-between">
        <Label
          labelText={workoutName}
          as="h2"
          additionalContainerStyle="w-[80%]"
          additionalLabelStyle="font-primary-bold text-gray-800 mt-4"
        />

        {(timer >= 0 || isRunning) && (
          <Label
            labelText={minutesToHMConverter(timer)}
            icon={
              isRunning ? (
                <PulseLoader additionalClassName="mt-3" />
              ) : (
                <ChronometerIcon width={22} height={22} top={4} fill={Colors.primary} />
              )
            }
            as="h3"
            additionalLabelStyle="font-primary-bold text-gray-800 mt-4"
          />
        )}
      </View>
      <View className="flex-row items-center gap-4">
        {musclesGroupTarget.map((muscleName: string, id: number) => (
          <Label
            key={`${muscleName}-${id}`}
            labelText={muscleName}
            additionalLabelStyle="font-primary-bold text-sm text-tertiary-default"
            icon={dot}
          />
        ))}
      </View>
      {isWorkoutCompleted && (
        <Label
          icon={<CheckedIcon width={22} height={22} fill={Colors.success} />}
          labelText="Completed"
          as="h4"
          additionalLabelStyle="font-primary-bold mt-2"
        />
      )}
      {isRunning && (
        <Label
          icon={<PauseIcon width={22} height={22} fill={Colors.orange} top={2} />}
          labelText="In progress"
          as="h4"
          additionalLabelStyle="font-primary-bold mt-2"
        />
      )}
      {!isWorkoutCompleted && !isRunning && (
        <Label
          icon={<MuscleManIcon width={22} height={22} fill={Colors.primary} bottom={2} />}
          labelText="Not started"
          as="h4"
          additionalLabelStyle="font-primary-bold mt-2 ml-1.5"
        />
      )}

      {!exercises.length && (
        <Label
          labelText="No exercises yet"
          additionalContainerStyle="mt-2"
          as="h5"
          additionalLabelStyle="font-primary-medium text-gray-800"
        />
      )}

      {exercises.map(exerciseDetails => (
        <View className="left-[-15px] mt-4 flex-row items-center" key={exerciseDetails.id}>
          <Pressable
            accessibilityRole="button"
            onPress={() =>
              router.push({
                pathname: "/modal-stack/exercise-details-modal",
                params: {
                  exerciseName: exerciseDetails.exercise.name,
                },
              })
            }
          >
            <Image source={{ uri: exerciseDetails.exercise.gifUrl }} className="ml-4 size-[50px]" />
          </Pressable>
          <Label
            labelText={exerciseDetails.exercise.name}
            as="h4"
            additionalLabelStyle="text-gray-800 font-primary-bold ml-2"
          />
        </View>
      ))}

      {!isWorkoutCompleted && (
        <Button
          buttonText={btnText}
          onPress={() => {
            handleWorkoutAction({ workoutAction, workoutId });
            workoutAction === WORKOUT_ACTION.STOP && stopWorkoutTime();
            workoutAction === WORKOUT_ACTION.START && startWorkoutTime();
          }}
          variant={isRunning ? "destructive" : "outlined"}
          additionalContainerStyle="mt-6"
          icon={
            isRunning ? (
              <StopIcon fill={Colors.white} width={20} height={20} />
            ) : (
              <PlayIcon fill={Colors.primary} width={22} height={22} top={1.5} />
            )
          }
        />
      )}

      <HorizontalLine thickness="sm" color="light" additionalClassName="mt-4" />
    </React.Fragment>
  );
};

export default WorkoutActionCard;
