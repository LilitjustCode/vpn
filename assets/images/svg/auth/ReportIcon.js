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
        clipPath="url(#clip0_306_345)"
        stroke="#252626"
        strokeWidth={0.9375}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M7.5 11.875h5M7.5 9.375h5M12.5 3.125h3.125a.625.625 0 01.625.625v13.125a.624.624 0 01-.625.625H4.375a.625.625 0 01-.625-.625V3.75a.625.625 0 01.625-.625H7.5" />
        <Path d="M6.875 5.625V5a3.125 3.125 0 016.25 0v.625h-6.25z" />
      </G>
      <Defs>
        <ClipPath id="clip0_306_345">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
