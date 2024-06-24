import dayjs from "dayjs";
import { View } from "react-native";

import { useGymVisits } from "../../api/membership-card/membership-card.hooks";
import CalendarIcon from "../../assets/icons/Calendar";
import MembershipCardImage from "../../assets/icons/MembershipCard";
import Label from "../../components/atoms/label";
import MonthlyGymVisitsSummary from "../../components/templates/monthly-gym-visits-chart";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
/**
 * Screen used to fetch the gym visits based on how many times you scanned the membership card
 */
const workoutData = [
  { date: "2024-01-15", count: 20 },
  { date: "2024-02-12", count: 15 },
  { date: "2024-03-10", count: 5 },
  { date: "2024-04-25", count: 10 },
  { date: "2024-05-05", count: 30 },
  { date: "2024-06-21", count: 5 },
  { date: "2024-07-18", count: 3 },
  { date: "2024-08-23", count: 4 },
  { date: "2024-09-11", count: 1 },
  { date: "2024-10-19", count: 3 },
  { date: "2024-11-02", count: 2 },
  { date: "2024-12-14", count: 10 },
];
const GymVisitScreen = () => {
  const { data } = useGymVisits();
  const gymVisitsList = data?.record;
  return (
    <ScreenWrapper isBackNavigationEnabled title="Gym visits" isScrollEnabled={true}>
      <View className="px-4">
        <MembershipCardImage width={350} height={300} top={-60} fill={Colors.success} />
        {gymVisitsList &&
          Object.keys(gymVisitsList).map(month => (
            <View key={month} className="top-[-130px] mb-4">
              <Label
                as="h3"
                labelText={dayjs(month).format("MMMM YYYY")}
                additionalLabelStyle="mb-2 font-bold text-gray-800"
              />
              {gymVisitsList[month].map(visit => (
                <View key={visit.id} className="mb-4 flex-row items-center rounded-lg bg-gray-100 p-3 shadow-sm">
                  <Label
                    icon={<CalendarIcon width={24} height={24} fill={Colors.primary} />}
                    labelText={dayjs(visit.createdAt).format("DD MMMM YYYY, h:mm A")}
                    additionalLabelStyle="text-base text-gray-700 ml-1"
                  />
                </View>
              ))}
            </View>
          ))}
        <MonthlyGymVisitsSummary workoutData={workoutData} />
      </View>
    </ScreenWrapper>
  );
};

export default GymVisitScreen;
