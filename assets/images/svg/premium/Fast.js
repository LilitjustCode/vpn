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
      <G
        clipPath="url(#clip0_24_1120)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M2.75 17.25v-2.147c0-5.39 4.331-9.834 9.713-9.853A9.75 9.75 0 0122.25 15v2.25a.75.75 0 01-.75.75h-18a.75.75 0 01-.75-.75zM12.5 5.25v3M3.078 12.478l2.906.778M21.922 12.478l-2.906.778M10.194 18l6.412-8.353" />
      </G>
      <Defs>
        <ClipPath id="clip0_24_1120">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
