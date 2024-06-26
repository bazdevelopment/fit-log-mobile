import { G, Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 14 14" {...props}>
    <G fillRule="evenodd">
      <Path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
      <Path
        fill="#FFF"
        d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
        style={{
          fill: "var(--svg-status-bg, #fff)",
        }}
      />
      <Path d="M4.7 5.3c0-.2.1-.3.3-.3h.9c.2 0 .3.1.3.3v3.4c0 .2-.1.3-.3.3H5c-.2 0-.3-.1-.3-.3V5.3m3 0c0-.2.1-.3.3-.3h.9c.2 0 .3.1.3.3v3.4c0 .2-.1.3-.3.3H8c-.2 0-.3-.1-.3-.3V5.3" />
    </G>
  </Svg>
);
export default SvgComponent;
