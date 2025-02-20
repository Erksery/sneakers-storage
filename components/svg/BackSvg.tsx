import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function BackSvg() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.469 6.414a.75.75 0 01.117 1.054L10.96 12l3.626 4.531a.75.75 0 01-1.172.937l-4-5a.75.75 0 010-.937l4-5a.75.75 0 011.055-.117z"
        fill="#2B2B2B"
      />
    </Svg>
  );
}
