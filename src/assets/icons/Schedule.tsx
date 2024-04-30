import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Uploaded to svgrepo.com"
    width={props.width}
    height={props.width}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M7 7V3c0-.551.449-1 1-1s1 .449 1 1v4c0 .551-.449 1-1 1s-1-.449-1-1zm23 1v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1v2a2 2 0 1 0 4 0V5h12v2a2 2 0 1 0 4 0V5h1a3 3 0 0 1 3 3zm-16 8a1 1 0 0 0-1-1h-.5a.5.5 0 0 0 0 1h.5v6.5a.5.5 0 0 0 1 0V16zm5 0a1 1 0 0 0-1-1h-.5a.5.5 0 0 0 0 1h.5v6.5a.5.5 0 0 0 1 0V16zm10-4.5a.5.5 0 0 0-.5-.5h-25a.5.5 0 0 0 0 1h25a.5.5 0 0 0 .5-.5zM24 8c.551 0 1-.449 1-1V3c0-.551-.449-1-1-1s-1 .449-1 1v4c0 .551.449 1 1 1zM5 28c-1.2 0-2.266-.542-3-1.382V27a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-.382A3.975 3.975 0 0 1 27 28H5z"
      style={{
        fill: props.color,
      }}
    />
  </Svg>
);
export default SvgComponent;
