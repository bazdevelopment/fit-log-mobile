import { TElement, TSize, TVariant } from "./button.interface";

const flexStyle = "flex flex-row items-center justify-center";

export const getButtonStyles = (
  variant: TVariant,
  size: TSize,
  element: TElement,
  pressed: boolean,
  disabled: boolean
): string => {
  const style = {
    default: {
      text: `text-${size} font-primary p-3 text-center text-primary-default`,
      wrapper: flexStyle,
    },
    primary: {
      text: `text-${size} font-primary text-white ${padding[size]} text-center`,
      wrapper: `${flexStyle} rounded-full bg-primary-default ${pressed ? "opacity-90" : "opacity-100"} ${disabled ? "opacity-50" : ""}`,
    },
    secondary: {
      text: `text-${size} font-primary text-primary-default p-3 text-center`,
      wrapper: `${flexStyle} rounded-full bg-slate-100`,
    },
    outlined: {
      text: `text-${size} font-primary-bold text-primary-default p-3 text-center`,
      wrapper: `${flexStyle} border rounded-md border-primary-default ${pressed ? "opacity-75" : ""}`,
    },
    destructive: {
      text: `text-${size} font-primary-bold text-white p-3 text-center`,
      wrapper: `${flexStyle} rounded-md bg-red-500 ${pressed ? "bg-red-600" : ""}`,
    },
    link: {
      text: `text-${size} font-primary-bold text-center underline text-primary-default mr-4`,
      wrapper: `${flexStyle} ${pressed ? "opacity-75" : ""}`,
    },
  };
  return style[variant][element];
};

const padding = {
  sm: "p-1",
  md: "p-2",
  lg: "p-3",
  xl: "p-4",
};
