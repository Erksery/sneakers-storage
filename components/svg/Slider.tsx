import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

export default function SliderSvg() {
  const { width } = Dimensions.get("window");

  // Высота будет вычисляться пропорционально ширине экрана
  const height = (77 / 351) * width;

  return (
    <Svg width={width - 50} height={height} viewBox="0 0 351 77" fill="none">
      <Path
        d="M350 34c0 1.971-1.027 4.018-3.253 6.126-2.226 2.107-5.564 4.188-9.955 6.199-8.776 4.02-21.537 7.664-37.385 10.735C267.727 63.197 223.919 67 175.5 67s-92.227-3.803-123.907-9.94c-15.848-3.07-28.61-6.716-37.385-10.735-4.39-2.011-7.729-4.092-9.955-6.2C2.027 38.019 1 35.972 1 34c0-1.972 1.027-4.019 3.253-6.126 2.226-2.108 5.564-4.188 9.955-6.2 8.775-4.019 21.537-7.664 37.385-10.734C83.273 4.803 127.081 1 175.5 1s92.227 3.803 123.907 9.94c15.848 3.07 28.609 6.715 37.385 10.735 4.391 2.01 7.729 4.091 9.955 6.199C348.973 29.98 350 32.028 350 34z"
        stroke="url(#paint0_linear_43_6922)"
        strokeWidth={2}
      />
      <Rect
        x={156}
        y={58.9998}
        width={38.5714}
        height={18}
        rx={9}
        fill="#6A6A6A"
      />
      <Path
        d="M188.354 68.353a.5.5 0 000-.707l-3.182-3.182a.501.501 0 00-.708.707L187.293 68l-2.829 2.828a.5.5 0 00.708.707l3.182-3.182zM188 67.5h-1v1h1v-1zM163.646 68.353a.5.5 0 010-.707l3.182-3.182a.501.501 0 01.708.707L164.707 68l2.829 2.828a.5.5 0 01-.708.707l-3.182-3.182zM164 67.5h1v1h-1v-1z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_43_6922"
          x1={175.5}
          y1={27.1998}
          x2={175.5}
          y2={67.9998}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} stopColor="#2363F6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
