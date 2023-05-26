import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#clip0_306_332)"
        stroke="#252626"
        strokeWidth={0.9375}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M5.594 11.25L2.5 13.75v-10a.625.625 0 01.625-.625h10a.625.625 0 01.625.625v6.875a.624.624 0 01-.625.625H5.594z" />
        <Path d="M6.25 11.25v3.125a.625.625 0 00.625.625h7.531l3.094 2.5v-10a.625.625 0 00-.625-.625H13.75" />
      </G>
      <Defs>
        <ClipPath id="clip0_306_332">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
