import Svg, { Defs, Path, SvgProps, Use } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={props.width || 16} height={props.height || 16} viewBox="0 0 9 14" {...props}>
      <Defs>
        <Path
          d="M8.39 7.634l-6.114 5.773a.985.985 0 01-1.333 0 .857.857 0 010-1.26L6.395 7 .943 1.853a.857.857 0 010-1.26.985.985 0 011.333 0L8.39 6.366a.865.865 0 010 1.268z"
          id="prefix__a"
        />
      </Defs>
      <Use fill={props.fill || "red"} xlinkHref="#prefix__a" transform="matrix(1 0 0 -1 0 14)" fillRule="evenodd" />
    </Svg>
  );
}

export default SvgComponent;
