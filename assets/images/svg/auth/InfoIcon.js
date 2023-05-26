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
      <G clipPath="url(#clip0_306_338)">
        <Path
          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          stroke="#252626"
          strokeWidth={0.9375}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.375 9.375H10v4.375h.625"
          stroke="#252626"
          strokeWidth={0.9375}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.844 7.344a.781.781 0 100-1.563.781.781 0 000 1.563z"
          fill="#252626"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_306_338">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
