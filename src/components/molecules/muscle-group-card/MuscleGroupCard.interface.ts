import { ReactElement } from "react";

export interface IMuscleGroupCard {
  title: string;
  icon: ReactElement;
  isSelected: boolean;
  onPress: () => void;
}
