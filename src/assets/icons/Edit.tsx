import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2m6-16h2a2 2 0 0 1 2 2v2M14.902 20.334l-2.187.438.438-2.187a1 1 0 0 1 .273-.511L17.5 14l2-2 1.987 1.987-2 2-4.074 4.074a1 1 0 0 1-.511.273ZM9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z"
    />
  </Svg>
);
export default SvgComponent;
