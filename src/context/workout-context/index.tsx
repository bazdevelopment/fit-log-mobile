import { createContext, Dispatch, ReactElement, useContext, useReducer } from "react";

import { generateUniqueId } from "../../utilities/generate-unique-id";
import { IWorkoutState, TWorkoutAction } from "./workout-context.interface";

const initialState: IWorkoutState = {
  muscleGroups: [],
  exercises: {},
};

/**
 * Reducer for managing the state for selected muscle groups / exercises / reps for a workout
 */
const workoutReducer = (state: IWorkoutState, action: TWorkoutAction) => {
  switch (action.type) {
    case "ADD_MUSCLE_GROUP":
      if (!state.muscleGroups.includes(action.payload)) {
        return {
          ...state,
          muscleGroups: [...state.muscleGroups, action.payload],
        };
      } else {
        return {
          ...state,
          muscleGroups: state.muscleGroups.filter(group => group !== action.payload),
        };
      }

    case "ADD_EXERCISE": {
      const { group, exercise } = action.payload;

      const groupExercises = state.exercises[group] || [];
      const existingExercise = groupExercises.find(ex => ex.name === exercise.name);

      if (existingExercise) {
        // Exercise already exists, so remove it
        const updatedExercises = groupExercises.filter(ex => ex.name !== exercise.name);
        return {
          ...state,
          exercises: {
            ...state.exercises,
            [group]: updatedExercises,
          },
        };
      } else {
        // Exercise does not exist, so add it
        return {
          ...state,
          exercises: {
            ...state.exercises,
            [group]: [
              ...groupExercises,
              {
                ...exercise,
                sets: [
                  { weight: 0, reps: 0, id: generateUniqueId() },
                  { weight: 0, reps: 0, id: generateUniqueId() },
                  { weight: 0, reps: 0, id: generateUniqueId() },
                ],
              },
            ],
          },
        };
      }
    }

    case "ADD_SET": {
      const { set } = action.payload;
      const updatedExercises = state.exercises[action.payload.group].map(exercise => {
        if (exercise.name === action.payload.exerciseName) {
          return {
            ...exercise,
            sets: [...exercise.sets, set],
          };
        }
        return exercise;
      });
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload.group]: updatedExercises,
        },
      };
    }

    case "UPDATE_SET": {
      const { group, setId, weight, reps } = action.payload;

      const updatedExercises = state.exercises[group].map(exercise => {
        if (exercise.sets.some(set => set.id === setId)) {
          const updatedSets = exercise.sets.map(set => {
            if (set.id === setId) {
              return { ...set, weight, reps };
            }
            return set;
          });
          return { ...exercise, sets: updatedSets };
        }

        return exercise;
      });
      return { ...state, exercises: { ...state.exercises, [group]: updatedExercises } };
    }

    default:
      return state;
  }
};

const WorkoutContext = createContext<{ state: IWorkoutState; dispatch: Dispatch<TWorkoutAction> }>(undefined);

export const WorkoutContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);

  return <WorkoutContext.Provider value={{ state, dispatch }}>{children}</WorkoutContext.Provider>;
};

/* custom hook to have access to the workout context */
export const useWorkout = () => useContext(WorkoutContext);
