import { useQuery } from "@tanstack/react-query";

import { getExercisesByMuscleTarget } from "./exercise.requests";

/**
 * Utility hook used to fetch the fitness exercises by muscle target
 */
export const useExercisesByMuscleTarget = (muscleTarget: string[], limit: number, offset: number) =>
  useQuery({
    queryKey: ["fitness-exercises_by_muscle_target", muscleTarget],
    queryFn: () => getExercisesByMuscleTarget(muscleTarget, limit, offset),
  });
