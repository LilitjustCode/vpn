import * as React from 'react';
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={20}
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={28} height={20} rx={2} fill="#fff" />
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={20}>
        <Rect width={28} height={20} rx={2} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 0H0v1.333h28V0zm0 2.667H0V4h28V2.667zM0 5.333h28v1.334H0V5.333zM28 8H0v1.333h28V8zM0 10.667h28V12H0v-1.333zm28 2.666H0v1.334h28v-1.334zM0 16h28v1.333H0V16zm28 2.667H0V20h28v-1.333z"
          fill="#D02F44"
        />
        <Path fill="#46467F" d="M0 0H12V9.33333H0z" />
        <G filter="url(#filter0_d_306_1533)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.667 2a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm2.666 0A.667.667 0 114 2a.667.667 0 011.333 0zm2 .667a.667.667 0 100-1.334.667.667 0 000 1.334zM10.667 2a.667.667 0 11-1.334 0 .667.667 0 011.334 0zM3.333 4a.667.667 0 100-1.333.667.667 0 000 1.333zm3.334-.667a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm2 .667a.667.667 0 100-1.333.667.667 0 000 1.333zm2 .667a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm-3.334.667a.667.667 0 100-1.334.667.667 0 000 1.333zm-2-.667a.667.667 0 11-1.333 0 .667.667 0 011.333 0zM2 5.334A.667.667 0 102 4a.667.667 0 000 1.333zM4 6a.667.667 0 11-1.333 0A.667.667 0 014 6zm2 .667a.667.667 0 100-1.334.667.667 0 000 1.334zM9.333 6A.667.667 0 118 6a.667.667 0 011.333 0zM10 8a.667.667 0 100-1.333A.667.667 0 0010 8zm-2-.667a.667.667 0 11-1.333 0 .667.667 0 011.333 0zM4.667 8a.667.667 0 100-1.333.667.667 0 000 1.333zm-2-.667a.667.667 0 11-1.334 0 .667.667 0 011.334 0z"
            fill="url(#paint0_linear_306_1533)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_306_1533"
          x1={1.33325}
          y1={1.3335}
          x2={1.33325}
          y2={8.00016}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
