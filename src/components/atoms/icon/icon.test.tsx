import { fireEvent, render } from "@testing-library/react-native";

import MuscleIcon from "../../../assets/icons/MuscleIcon";
import Icon from "./Icon";

describe("Icon component", () => {
  const onPressMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render icon and heading correctly", () => {
    const { getByTestId } = render(
      <Icon iconElement={<MuscleIcon testID="muscle-icon" />} heading="My Icon" textSize="md" onPress={onPressMock} />
    );
    const iconElement = getByTestId("muscle-icon");
    const headingElement = getByTestId("label-id");

    expect(iconElement).toBeDefined();
    expect(headingElement).toBeDefined();
  });

  it("should call onPress function when icon is pressed", () => {
    const { getByTestId } = render(
      <Icon iconElement={<MuscleIcon />} heading="My Icon" textSize="md" onPress={onPressMock} />
    );
    const iconElement = getByTestId("icon-pressable-id");

    fireEvent.press(iconElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
