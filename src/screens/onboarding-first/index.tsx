import { ScrollView, View } from "react-native";

import { onboardingDataMock as onboardingData } from "../../__mocks__/onboarding-data-mock";
import Button from "../../components/atoms/button/button";
import OnboardingSlide from "../../components/molecules/onboarding-slide";
import PaginationControls from "../../components/molecules/pagination-controls";
import { usePagination } from "../../components/molecules/pagination-controls/hooks/use-pagination/usePagination";
import RegularList from "../../components/molecules/regular-list";
import { DEVICE_DIMENSIONS } from "../../constants/device-dimensions";

/**
 * First onboarding screen which displays multiple slides that represent a short brief of what the app can offer
 */
const OnboardingFirst = () => {
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
          handleChangeActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / DEVICE_DIMENSIONS.DEVICE_WIDTH))
        }
        ref={scrollViewRef}
      >
        <RegularList items={onboardingData} itemComponent={OnboardingSlide} additionalContainerStyle="top-[-30px]" />
      </ScrollView>

      {activeIndex < lastIndex && (
        <Button
          buttonText="Skip"
          onPress={handleFinishOnboarding}
          variant="default"
          size="lg"
          additionalContainerStyle="absolute right-8 top-14"
        />
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

export default OnboardingFirst;
