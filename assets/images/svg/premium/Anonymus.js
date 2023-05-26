import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_24_1115)">
        <Path
          d="M9.875 12a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM15.125 12a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
          fill="#fff"
        />
        <Path
          d="M20.75 20.25L18.003 18l-2.756 2.25L12.5 18l-2.747 2.25L6.997 18 4.25 20.25v-9a8.25 8.25 0 1116.5 0v9z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_24_1115">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
