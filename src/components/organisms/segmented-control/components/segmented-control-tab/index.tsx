import { TouchableOpacity, View } from "react-native";

import { Colors } from "../../../../../styles/colors";
import Label from "../../../../atoms/label";
import { ISegmentedControlTab } from "./SegmentedControlTab.interface";

/**
 * Custom component for segmented control tab
 */
const SegmentedControlTab = ({
  option,
  isActive,
  tabInactiveColor,
  tabWidth,
  borderColor,
  withBorder,
  onPress,
}: ISegmentedControlTab) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className="h-4/5 items-center justify-center self-center rounded-[10px]"
      onPress={() => onPress?.(option)}
      key={option.title}
      style={{
        width: tabWidth,
        borderColor,
        borderWidth: withBorder ? 0.5 : 0,
        backgroundColor: isActive ? Colors.transparent : tabInactiveColor,
      }}
    >
      <View className="flex-col items-center gap-[-5px]">
        <Label
          labelText={option.title}
          additionalLabelStyle={`font-primary-bold text-md ${isActive ? "text-white" : "text-primary-default"}`}
        />
        {Boolean(option.subtitle) && (
          <Label
            labelText={option.subtitle as string}
            additionalLabelStyle={`font-primary-bold text-sm ${isActive ? "text-white" : "text-black"}`}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SegmentedControlTab;
