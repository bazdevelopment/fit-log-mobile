import { useState } from "react";
import { Pressable, View } from "react-native";

import ThickIcon from "../../../assets/icons/ThickIcon";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import { ICheckbox } from "./checkbox.interface";

/**
 * A customizable checkbox component
 * Can accept a text
 */
const Checkbox = ({ checkboxText }: ICheckbox) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Pressable accessibilityRole="button" onPress={toggleCheckbox} className="flex-row items-center gap-2">
      <View className="size-6 items-center justify-center rounded-md bg-primary-default">
        {isChecked && (
          <Icon
            onPress={toggleCheckbox}
            additionalInnerClassName="bg-none"
            iconElement={<ThickIcon width={13} height={13} color={Colors.white} />}
          />
        )}
      </View>
      {!!checkboxText && <Label labelText={checkboxText} as="h4" />}
    </Pressable>
  );
};

export default Checkbox;
