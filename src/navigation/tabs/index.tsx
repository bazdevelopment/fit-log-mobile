import ExploreIcon from "../../assets/icons/Explore";
import HomeIcon from "../../assets/icons/Home";
import ProfileIcon from "../../assets/icons/ProfileHalf";
import ScheduleIcon from "../../assets/icons/Schedule";
import { ITabsNavigationScreen } from "./tabs.interface";

export const tabScreens: ITabsNavigationScreen[] = [
  {
    id: 1,
    name: "index",
    title: "Home",
    icon: (color: string) => <HomeIcon width={24} height={24} color={color} />,
  },
  {
    id: 2,
    name: "schedule/index",
    title: "Schedule",
    icon: (color: string) => <ScheduleIcon width={24} height={24} color={color} />,
  },
  {
    id: 3,
    name: "progress/index",
    title: "Progress",
    icon: (color: string) => <ExploreIcon width={24} height={24} color={color} />,
  },

  {
    id: 4,
    name: "profile/index",
    title: "Profile",
    icon: (color: string) => <ProfileIcon width={24} height={24} color={color} />,
  },
];
