import { ReactNode } from "react";

export interface ITabsNavigationScreen {
  id: number;
  name: string;
  title: string;
  icon: (color: string) => ReactNode;
}
