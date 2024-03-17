import { Path, Svg, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/Svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    fill={props.fill}
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 100 125"
    {...props}
  >
    <Path d="M90.1 84.4 75.2 69.5c11.4-14.2 10.3-35.2-2.7-48.1-6.8-6.8-15.9-10.6-25.6-10.6-9.7 0-18.7 3.8-25.6 10.6-6.8 6.8-10.6 15.9-10.6 25.6s3.8 18.7 10.6 25.6c6.8 6.8 15.9 10.6 25.6 10.6 8.2 0 16.2-2.8 22.6-7.9l14.9 14.9c.8.8 1.8 1.2 2.8 1.2 1.1 0 2.1-.4 2.8-1.2 1.6-1.7 1.6-4.2.1-5.8zm-15-37.5c0 7.5-2.9 14.6-8.2 19.9S54.5 75 47 75c-7.5 0-14.6-2.9-19.9-8.2s-8.2-12.4-8.2-19.9c0-7.5 2.9-14.6 8.2-19.9s12.4-8.2 19.9-8.2c7.5 0 14.6 2.9 19.9 8.2s8.2 12.4 8.2 19.9z" />
  </Svg>
);
export default SvgComponent;
