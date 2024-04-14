import { useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";

import { WHEEL_PICKER_OPTIONS } from "../../../constants/wheel-picker-options";
import WheelPickerElement from "../../molecules/wheel-picker-element";
import { IWheelPicker } from "./wheel-picker.interface";

/**
 * Wheel picker component
 * Provides a user interface for selecting values from a list in a wheel-like fashion.
 * It allows users to scroll through the available options vertically and select the desired value.
 *
 * Props:
 * selectedIndex: (number) - The index of the currently selected value in the values array
 * onChange: (function) - Callback function triggered when the selected value changes. It passes the index of the newly selected value as an argument.
 * values: (array) - An array of values that the user can select from.
 * unit: (string) - (Optional) A unit string to be displayed alongside the selected value.

 */
const WheelPicker = ({ selectedIndex, onChange, values, unit }: IWheelPicker) => {
  /**
   *  To determine the index, the first value from the array of values must be subtracted because the index does not start from 0
   */
  const firstValue = Number(values[0]);
  const flatListRef = useRef<FlatList>(null);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT);
    if (index !== selectedIndex) {
      onChange(index + firstValue); //15 because indicator is moved 3 position below + index start from 15 (15+3)
    }
  };

  const onScrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index: index - firstValue,
      animated: true,
    });
  };

  return (
    <View className="mb-[50px] mt-[30px] flex-1">
      {/*  top = 180px = > 3 * WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT  */}
      <View className="absolute top-[180px] h-[60px] w-[100px] border-x-0 border-y-[3px] border-primary-default" />
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT * 3,
          paddingBottom: WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT * 3,
        }}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        snapToInterval={WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT}
        initialScrollIndex={selectedIndex - firstValue}
        getItemLayout={(_, index) => ({
          length: WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT,
          offset: WHEEL_PICKER_OPTIONS.DEFAULT_ITEM_HEIGHT * index,
          index,
        })}
        data={values}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <WheelPickerElement
            value={item}
            onScrollToIndex={onScrollToIndex}
            isSelected={selectedIndex - firstValue === index}
            unit={unit}
          />
        )}
      />
    </View>
  );
};

export default WheelPicker;
