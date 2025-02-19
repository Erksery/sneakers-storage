import * as React from "react";
import Svg, { G, Rect, Defs, ClipPath, Path } from "react-native-svg";

export default function MenuSvg() {
  return (
    <Svg width={26} height={24} viewBox="0 0 26 24" fill="none">
      <G clipPath="url(#clip0_6104_4202)">
        <Rect x={9.5} y={4} width={16} height={2} rx={1} fill="#2B2B2B" />
        <Rect x={2.5} y={11} width={23} height={2} rx={1} fill="#2B2B2B" />
        <Rect x={2.5} y={18} width={11} height={2} rx={1} fill="#48B2E7" />
      </G>
      <Defs>
        <ClipPath id="clip0_6104_4202">
          <Path fill="#fff" transform="translate(.5 3)" d="M0 0H25V17.5H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
