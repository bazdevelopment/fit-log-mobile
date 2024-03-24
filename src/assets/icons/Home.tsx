import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M14.469 2.163a3.75 3.75 0 0 0-4.938 0L2.873 7.988a4.75 4.75 0 0 0-1.623 3.575V20A3.75 3.75 0 0 0 5 23.75h14A3.75 3.75 0 0 0 22.75 20v-8.437a4.75 4.75 0 0 0-1.623-3.575L14.47 2.163ZM11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 24V0h24v24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
