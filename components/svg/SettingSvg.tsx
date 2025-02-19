import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default function SettingSvg({ color }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G
        clipPath="url(#clip0_43_6528)"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M21 20h-7M10 20H3M21 12h-9M8 12H3M21 4h-5M12 4H3M14 23v-6M8 15V9M16 7V1" />
      </G>
      <Defs>
        <ClipPath id="clip0_43_6528">
          <Path fill={color} transform="rotate(-90 12 12)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
