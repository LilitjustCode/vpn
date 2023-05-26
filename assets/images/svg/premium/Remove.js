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
      <G clipPath="url(#clip0_24_1128)" stroke="#fff" strokeWidth={1.5}>
        <Path d="M12.5 21a9 9 0 100-18 9 9 0 000 18z" strokeMiterlimit={10} />
        <Path d="M8.75 12h7.5" strokeLinecap="round" strokeLinejoin="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_24_1128">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
