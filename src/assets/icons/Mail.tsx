import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";
const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 48 48" {...props}>
    <Path
      fill={props.fill}
      fillRule="nonzero"
      d="M43 16.976V33.75c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 0 1 5 33.75V16.976l18.398 10.12c.375.206.83.206 1.204 0L43 16.975ZM37.75 9a5.25 5.25 0 0 1 5.249 5.124L24 24.574 5.002 14.123l.002-.09A5.25 5.25 0 0 1 10.25 9h27.5Z"
    />
  </Svg>
);
export default SvgComponent;
