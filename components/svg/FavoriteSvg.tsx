import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function FavoriteSvg({ color }) {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M16.196 4C19.371 4 21.5 6.98 21.5 9.755c0 5.633-8.839 10.245-9 10.245-.161 0-9-4.612-9-10.245C3.5 6.98 5.629 4 8.804 4c1.815 0 3.007.905 3.696 1.711C13.189 4.905 14.381 4 16.196 4z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
