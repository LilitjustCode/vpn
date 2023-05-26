import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={35}
      height={48}
      viewBox="0 0 35 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path fill="#F5F5F5" d="M0 0H41V48H0z" />
      <G filter="url(#filter0_d_0_1)">
        <G clipPath="url(#clip0_0_1)">
          <Path d="M37 16h-8a8 8 0 100 16h8V16z" fill="#fff" />
          <Path
            d="M31 19l-5 5 5 5"
            stroke="#252626"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
      <Path
        d="M37 1.406v45.5S.02 55.312.02 25.406s36.98-24 36.98-24z"
        fill="#000"
        fillOpacity={0.28}
      />
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path d="M37 16h-8a8 8 0 100 16h8V16z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
