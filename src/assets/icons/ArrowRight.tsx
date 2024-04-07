import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";
const SvgComponent = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.color}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12m0 0-5-5m5 5-5 5"
    />
  </Svg>
);
export default SvgComponent;
