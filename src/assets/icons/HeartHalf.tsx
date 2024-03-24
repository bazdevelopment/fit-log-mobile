import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137 2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59-.277-.218-.564-.438-.856-.663Z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill={props.color}
      d="M15.038 18.91C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636V20.5c1 0 2-.77 3.038-1.59Z"
    />
  </Svg>
);
export default SvgComponent;
