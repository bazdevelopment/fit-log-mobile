import { Path, Svg, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" {...props}>
    <Path
      d="M62 48c0 3.6-9.43 14-24 14a48.618 48.618 0 0 1-18.47-3.51 7.428 7.428 0 0 1 4.3-3.61 1 1 0 0 0-.56-1.92C23.07 53.02 17 55 17 61a1.003 1.003 0 0 1-1 1H3a1.003 1.003 0 0 1-1-1V30a.997.997 0 0 1 1-1c.44 0 .9-.01 1.37-.01 4.99-.06 11.61-.14 17.06 5.69a11.757 11.757 0 0 0-4.05 3.87.996.996 0 1 0 1.74.97C19.19 39.39 22.18 34 32 34c9.89 0 12.8 5.38 12.88 5.52a.984.984 0 0 0 .87.51 1.074 1.074 0 0 0 .49-.12 1 1 0 0 0 .38-1.36 12.497 12.497 0 0 0-5.32-4.58 51.425 51.425 0 0 1 2.68-5.87 27.94 27.94 0 0 0-.85-7.06 28.934 28.934 0 0 0 5.41-2.47.996.996 0 1 0-1.02-1.71c-.15.08-5.32 3.19-9.52 3.14a25.909 25.909 0 0 1-7.08-1.27 3.011 3.011 0 0 1-1.8-4.21A.96.96 0 0 1 30 14h6a2.996 2.996 0 0 0 3-3v-1a1 1 0 0 0-2 0v1a1.003 1.003 0 0 1-1 1h-5.82a.966.966 0 0 1-.9-.61l-.59-1.47a3.002 3.002 0 0 1 1.19-3.65l5.13-3.21A7.068 7.068 0 0 1 38.72 2h7.74a6.998 6.998 0 0 1 6.26 3.84C56.18 12.73 62 27.39 62 48Z"
      data-name="28-Muscle"
    />
  </Svg>
);
export default SvgComponent;