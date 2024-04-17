import { View } from "react-native";

import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import PaginationDots from "../../atoms/pagination-dots";
import { IPaginationControls } from "./PaginationControls.interface";

/**
 * Component used to display right/left arrow for navigating back and forth between screens
 * A section of dots is displayed between the arrows
 */
const PaginationControls = ({
  activeDotIndex,
  pagesLength,
  onNavigateBack,
  onNavigateNext,
  additionalContainerStyle,
}: IPaginationControls) => {
  return (
    <View className={`flex-row items-center justify-center ${additionalContainerStyle}`}>
      {activeDotIndex > 0 && (
        <Icon
          onPress={onNavigateBack}
          iconElement={<ArrowLeft width={25} height={25} color={Colors.primary} />}
          additionalInnerClassName="border-[1.5px] border-primary-default"
          additionalClassName="absolute left-10"
        />
      )}

      <PaginationDots activeIndex={activeDotIndex} totalDots={pagesLength} />
      <Icon
        onPress={onNavigateNext}
        iconElement={<ArrowRight width={25} height={25} color={Colors.white} />}
        additionalInnerClassName="bg-primary-default border-[1.5px] border-primary-default"
        additionalClassName="absolute right-10"
      />
    </View>
  );
};

export default PaginationControls;
