import { fireEvent, render } from "@testing-library/react-native";

import ChevronIcon from "../../../assets/icons/SvgExample";
import { POSITIONS } from "../../../constants/positions";
import Button from "./button";

describe("Button component", () => {
  const onPressMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render button text correctly", () => {
    const { getByText } = render(<Button buttonText="Press Me" variant="default" onPress={onPressMock} />);
    const buttonElement = getByText("Press Me");
    expect(buttonElement).toBeDefined();
  });

  it("should call onPress function when button is pressed", () => {
    const { getByText } = render(<Button buttonText="Press Me" variant="default" onPress={onPressMock} />);
    const buttonElement = getByText("Press Me");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should button cannot be pressed when disabled prop is true", () => {
    const { getByText } = render(<Button buttonText="Press Me" variant="default" onPress={onPressMock} disabled />);
    const buttonElement = getByText("Press Me");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });

  it("should renders loading indicator instead of text when isLoading prop is true", () => {
    const { getByTestId } = render(<Button buttonText="Press Me" variant="default" onPress={onPressMock} isLoading />);
    const loadingIndicator = getByTestId("loading-indicator");
    expect(loadingIndicator).toBeDefined();
  });

  it("should renders icon on the left when iconPosition prop is set to left", () => {
    const { getByTestId } = render(
      <Button
        buttonText="Press Me"
        variant="default"
        onPress={onPressMock}
        icon={<ChevronIcon testID="chevron-icon" />}
        iconPosition={POSITIONS.left}
      />
    );
    const iconElement = getByTestId("chevron-icon");
    expect(iconElement).toBeDefined();
  });

  it("should render icon on the right when iconPosition prop is set to right", () => {
    const { getByTestId } = render(
      <Button
        buttonText="Press Me"
        onPress={onPressMock}
        icon={<ChevronIcon testID="chevron-icon" />}
        variant="default"
        iconPosition={POSITIONS.right}
      />
    );
    const iconElement = getByTestId("chevron-icon");
    expect(iconElement).toBeDefined();
  });
});
