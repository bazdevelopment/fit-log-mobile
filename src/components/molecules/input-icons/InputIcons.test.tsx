import { render } from "@testing-library/react-native";

import InputIcons from ".";

describe("InputIcons", () => {
  it('should render search icon when type is "search"', () => {
    const { getByTestId } = render(
      <InputIcons type="search" inputValue="mock" handleResetInput={jest.fn} position="end" />
    );
    const searchIcon = getByTestId("icon-pressable-id");
    expect(searchIcon).toBeTruthy();
  });

  it("should not render search icon when inputValue is empty", () => {
    const { queryByTestId } = render(
      <InputIcons type="search" inputValue="" handleResetInput={jest.fn} position="end" />
    );
    const searchIcon = queryByTestId("search-icon");
    expect(searchIcon).toBeNull();
  });

  it('should render password icon when type is "password"', () => {
    const { getByTestId } = render(
      <InputIcons type="password" inputValue="password" showPassword handleResetInput={jest.fn} position="end" />
    );
    const passwordIcon = getByTestId("icon-pressable-id");
    expect(passwordIcon).toBeTruthy();
  });

  it("should not render password icon when inputValue is empty", () => {
    const { queryByTestId } = render(
      <InputIcons type="password" inputValue="" showPassword handleResetInput={jest.fn} position="end" />
    );
    const passwordIcon = queryByTestId("password-icon");
    expect(passwordIcon).toBeNull();
  });

  it('should render end icon when position is "end"', () => {
    const { getByTestId } = render(
      <InputIcons type="search" position="end" handleResetInput={jest.fn} inputValue="mock" />
    );
    const endIcon = getByTestId("icon-pressable-id");
    expect(endIcon).toBeTruthy();
  });

  it('should render front icon when position is "front"', () => {
    const { getByTestId } = render(
      <InputIcons type="search" position="front" handleResetInput={jest.fn} inputValue="mock" />
    );
    const frontIcon = getByTestId("icon-pressable-id");
    expect(frontIcon).toBeTruthy();
  });
});
