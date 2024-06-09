import { Path, Rect, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";
const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} viewBox="0 0 512 512" {...props}>
    <Rect
      width={416}
      height={320}
      x={48}
      y={96}
      rx={56}
      ry={56}
      style={{
        fill: props.fill,
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <Path
      d="M48 192h416M128 300h48v20h-48z"
      style={{
        fill: props.fill,
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 60,
      }}
    />
  </Svg>
);
export default SvgComponent;
