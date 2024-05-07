import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" {...props}>
    <Path
      fill={props.color}
      d="M56.51 35.12c-2-8.01-.08-18.76 0-19.21l-.01-4.93a2.322 2.322 0 0 0-.49-1.44l-5.54-7.13a2.384 2.384 0 0 0-1.86-.91h-6.58a2.339 2.339 0 0 0-1.5.54L37 4.98a1.525 1.525 0 0 0-.1 2.22l1.77 1.76 2.15-.43 4.92-2.96a.5.5 0 0 1 .69.17.511.511 0 0 1-.17.69l-5 3a.523.523 0 0 1-.16.06l-3.23.65a1.7 1.7 0 0 0 .33 3.36H42a.451.451 0 0 1 .25.07l4.38 2.5a10.4 10.4 0 0 1 3.15-2.52.5.5 0 0 1 .44.9c-5.1 2.55-7.26 10.81-8.12 15.76a14.577 14.577 0 0 1 6.23 3.42.5.5 0 1 1-.66.74c-9.56-8.6-20.87.62-21.35 1.01l-2.97 2.97a.483.483 0 0 1-.7 0 .483.483 0 0 1 0-.7l2.56-2.57c-11.47-7.53-22.13-.89-23.71.18V62.5H16c5.56 0 7.45-5.43 7.53-5.66a.484.484 0 0 1 .44-.34 82.341 82.341 0 0 0 25.82-5.96.534.534 0 0 1 .33-.02l3.75.93c5.55-4.72 4.63-8.39 2.64-16.33Zm-42.06 4.1-2 4a.551.551 0 0 1-.17.2l-6 4a.566.566 0 0 1-.28.08.522.522 0 0 1-.42-.22.512.512 0 0 1 .14-.7l5.89-3.92 1.94-3.88a.5.5 0 0 1 .9.44Zm10.67 14.26a.254.254 0 0 1-.12.02.5.5 0 0 1-.12-.98c.15-.04 3.62-.99 3.62-5.52a.5.5 0 0 1 1 0c0 5.33-4.33 6.47-4.38 6.48Zm22.23-14.13-3 3a.657.657 0 0 1-.17.12l-8 3a.566.566 0 0 1-.18.03.5.5 0 0 1-.18-.97l7.9-2.96 2.93-2.92a.495.495 0 0 1 .7.7Z"
    />
  </Svg>
);
export default SvgComponent;