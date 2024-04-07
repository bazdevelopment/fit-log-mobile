import { ScrollView, View } from "react-native";

import { onboardingDataMock as onboardingData } from "../../__mocks__/onboarding-data-mock";
import Button from "../../components/atoms/button/button";
import OnboardingSlide from "../../components/molecules/onboarding-slide/onboarding-slide";
import { usePagination } from "../../components/molecules/pagination-controls/hooks/use-pagination/usePagination";
import PaginationControls from "../../components/molecules/pagination-controls/pagination-controls";
import RegularList from "../../components/molecules/regular-list/regular-list";
import { DeviceDimensions } from "../../constants/device-dimensions";

const OnboardingScreen = () => {
  const {
    activeIndex,
    lastIndex,
    handleBackPress,
    handleNextPress,
    handleFinishOnboarding,
    handleChangeActiveIndex,
    scrollViewRef,
  } = usePagination(onboardingData.length);

  return (
    <View className="flex-1">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e =>
          handleChangeActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / DeviceDimensions.deviceWidth))
        }
        ref={scrollViewRef}
      >
        <RegularList items={onboardingData} itemComponent={OnboardingSlide} additionalContainerStyle="top-[-30px]" />
      </ScrollView>

      {activeIndex < lastIndex && (
        <View className="absolute right-8 top-14">
          <Button buttonText="Skip" onPress={handleFinishOnboarding} variant="default" size="lg" />
        </View>
      )}

      <PaginationControls
        activeDotIndex={activeIndex}
        pagesLength={onboardingData.length}
        onNavigateBack={handleBackPress}
        onNavigateNext={handleNextPress}
        additionalContainerStyle="relative bottom-[90px]"
      />
    </View>
  );
};

export default OnboardingScreen;
