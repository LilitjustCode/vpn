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
        clipPath="url(#clip0_24_1133)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M4.25 10.753V5.25A.75.75 0 015 4.5h15a.75.75 0 01.75.75v5.503c0 7.875-6.684 10.481-8.016 10.922a.675.675 0 01-.468 0c-1.332-.44-8.016-3.047-8.016-10.922zM9.5 12h6M12.5 9v6" />
      </G>
      <Defs>
        <ClipPath id="clip0_24_1133">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
