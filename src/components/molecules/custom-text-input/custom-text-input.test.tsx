import { render } from "@testing-library/react-native";

import { INPUT_TYPE } from "../../../constants/input-type";
import CustomTextInput from "./custom-text-input";

describe("CustomTextInput", () => {
  it("should render label and placeholder correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <CustomTextInput label="Username" placeholder="Enter your username" type={INPUT_TYPE.default} />
    );
    const label = getByText("Username");
    const placeholder = getByPlaceholderText("Enter your username");
    expect(label).toBeTruthy();
    expect(placeholder).toBeTruthy();
  });
});
