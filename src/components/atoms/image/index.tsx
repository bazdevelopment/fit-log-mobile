import { Image as RNImage } from "expo-image";
import { cssInterop } from "nativewind";

import { IRNImage } from "./Image.interface";

cssInterop(RNImage, { className: "style" });

/**
 * The Image component is a wrapper around the Image component from expo-image package with additional styling provided by nativewind.
 *  The cssInterop function from nativewind is used to apply styling and, in this way, the className property is applied to the style property of the Image component.
 */
const Image = ({ style, className, placeholder = "L6PZfSi_.AyE_3t7t7R**0o#DgR4", ...props }: IRNImage) => {
  return <RNImage className={className} placeholder={placeholder} style={style} {...props} />;
};

export default Image;
