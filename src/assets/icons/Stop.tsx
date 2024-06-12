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
      fill={props.fill}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
  </Svg>
);
export default SvgComponent;
