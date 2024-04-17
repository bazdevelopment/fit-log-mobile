import { render } from "@testing-library/react-native";

import StarRating from ".";

describe("StarRating component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render in detailed mode when isBriefModeEnabled is false", () => {
    const { getAllByTestId, getByText } = render(
      <StarRating rating={4.5} reviewsNumber={100} isBriefModeEnabled={false} />
    );
    expect(getAllByTestId("star-rating-detailed-id")).toHaveLength(5);
    expect(getByText("4.5")).toBeDefined();
    expect(getByText("(100 reviews)")).toBeDefined();
  });

  it("should render in brief mode when isBriefModeEnabled is true", () => {
    const { getByTestId } = render(<StarRating rating={4.5} reviewsNumber={100} isBriefModeEnabled />);
    expect(getByTestId("star-icon-id")).toBeDefined();
  });
});
