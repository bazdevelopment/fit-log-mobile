import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -10 110 135" {...props}>
    <Path d="M10 87.902V12.097c0-5.383 5.82-8.75 10.488-6.07l65.953 37.902c4.68 2.691 4.68 9.449 0 12.14L20.488 93.973C15.82 96.655 10 93.284 10 87.902z" />
  </Svg>
);

export default SvgComponent;
