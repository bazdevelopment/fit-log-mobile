import ChatIcon from "../../assets/icons/Chat";
import ExploreIcon from "../../assets/icons/Explore";
import HeartHalfIcon from "../../assets/icons/HeartHalf";
import HomeIcon from "../../assets/icons/Home";
import ProfileIcon from "../../assets/icons/ProfileHalf";
import { ITabsNavigationScreen } from "./tabs.interface";

export const tabScreens: ITabsNavigationScreen[] = [
  {
    name: "index",
    title: "Home",
    icon: (color: string) => <HomeIcon width={24} height={24} color={color} />,
  },
  {
    name: "explore/index",
    title: "Explore",
    icon: (color: string) => <ExploreIcon width={24} height={24} color={color} />,
  },
  {
    name: "favorite/index",
    title: "Favorite",
    icon: (color: string) => <HeartHalfIcon width={24} height={24} color={color} />,
  },
  {
    name: "chat/index",
    title: "Chat",
    icon: (color: string) => <ChatIcon width={24} height={24} color={color} />,
  },
  {
    name: "profile/index",
    title: "Profile",
    icon: (color: string) => <ProfileIcon width={24} height={24} color={color} />,
  },
];
