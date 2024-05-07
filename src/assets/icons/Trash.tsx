import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill={props.color} viewBox="-5 -10 110 135" {...props}>
    <Path d="M74 22h-8v-6c0-3.3-2.7-6-6-6H40c-3.3 0-6 2.7-6 6v6h-8c-3.3 0-6 2.7-6 6v8c0 1.102.898 2 2 2h56c1.102 0 2-.898 2-2v-8c0-3.3-2.7-6-6-6zm-36-6c0-1.102.898-2 2-2h20c1.102 0 2 .898 2 2v6H38zM24 84c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6V42H24zm36-32c0-1.102.898-2 2-2s2 .898 2 2v28c0 1.102-.898 2-2 2s-2-.898-2-2zm-12 0c0-1.102.898-2 2-2s2 .898 2 2v28c0 1.102-.898 2-2 2s-2-.898-2-2zm-12 0c0-1.102.898-2 2-2s2 .898 2 2v28c0 1.102-.898 2-2 2s-2-.898-2-2z" />
  </Svg>
);
export default SvgComponent;
