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
      <G clipPath="url(#clip0_306_353)">
        <Path
          d="M3.125 8.96V4.376a.625.625 0 01.625-.625h12.5a.625.625 0 01.625.625v4.586c0 6.562-5.57 8.734-6.68 9.101a.562.562 0 01-.39 0c-1.11-.367-6.68-2.539-6.68-9.101zM10 7.5v3.125"
          stroke="#252626"
          strokeWidth={0.9375}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 14.219a.781.781 0 100-1.563.781.781 0 000 1.563z"
          fill="#252626"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_306_353">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
