import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";
const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12M6 12l5-5m-5 5 5 5"
    />
  </Svg>
);
export default SvgComponent;
