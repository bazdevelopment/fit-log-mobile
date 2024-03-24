import { G, Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";
const SvgComponent = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.color}
    viewBox="0 0 48 48"
    {...props}
  >
    <G data-name="Layer 2">
      <Path fill="none" d="M0 0h48v48H0z" data-name="invisible box" />
      <G data-name="icons Q2">
        <Path d="M24 2a22 22 0 1 0 22 22A21.9 21.9 0 0 0 24 2Zm10.7 12.7L28 28l-13.3 6.7a1.1 1.1 0 0 1-1.4-1.4L20 20l13.3-6.7a1.1 1.1 0 0 1 1.4 1.4ZM24 22a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
        <Path d="M24 22a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
