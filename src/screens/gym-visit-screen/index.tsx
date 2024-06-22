import dayjs from "dayjs";
import { ScrollView, View } from "react-native";

import { useGymVisits } from "../../api/membership-card/membership-card.hooks";
import CalendarIcon from "../../assets/icons/Calendar";
import MembershipCardImage from "../../assets/icons/MembershipCard";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
/**
 * Screen used to fetch the gym visits based on how many times you scanned the membership card
 */
const GymVisitScreen = () => {
  const { data } = useGymVisits();
  const gymVisitsList = data?.record;
  return (
    <ScreenWrapper isBackNavigationEnabled title="Gym visits" isScrollEnabled={false}>
      <ScrollView className="flex-1 bg-white p-4">
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
      </ScrollView>
    </ScreenWrapper>
  );
};

export default GymVisitScreen;
