import { Nullable } from "../../types/general.types";

export interface IExerciseResponse {
  id: string;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  gifUrl: string;
  image: Nullable<string>;
  secondaryMuscles: string;
  instructions: string;
}
