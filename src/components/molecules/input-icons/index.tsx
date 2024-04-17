import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";

import SearchIcon from "../../../assets/icons/Search";
import { INPUT_TYPE } from "../../../constants/input-type";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import { InputIconsProps } from "./InputIcons.interface";
/**
 * The InputIcons component renders an icon element based on the provided type, position, and input state.
 */
const InputIcons = ({
  type,
  inputValue,
  toggleShowPassword,
  showPassword,
  position,
  handleResetInput,
  additionalInnerIconStyle,
}: InputIconsProps) => {
  const iconsList: Record<
    InputIconsProps["type"],
    {
      front: React.ReactNode;
      end: React.ReactNode;
    }
  > = {
    [INPUT_TYPE.DEFAULT]: {
      front: null,
      end: null,
    },
    [INPUT_TYPE.SEARCH]: {
      front: <Icon iconElement={<SearchIcon width={25} height={25} fill={Colors.primary} />} withBackground={false} />,
      end: (
        <Icon
          iconElement={
            !!inputValue ? (
              <AntDesign name="closecircleo" size={18} color={Colors.primary} testID="search-icon" />
            ) : null
          }
          withBackground={false}
          onPress={handleResetInput}
        />
      ),
    },
    [INPUT_TYPE.PASSWORD]: {
      front: null,
      end: (
        <Icon
          onPress={toggleShowPassword}
          additionalInnerClassName={additionalInnerIconStyle}
          iconElement={
            inputValue ? (
              <Ionicons
                name={!showPassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                color={Colors.tertiary}
                testID="password-icon"
              />
            ) : null
          }
          withBackground={false}
        />
      ),
    },
    [INPUT_TYPE.EMAIL]: {
      front: null,
      end: null,
    },
  };

  return position && type ? iconsList[type][position] : null;
};

export default InputIcons;
