import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={28} height={28} rx={6} fill="#FFEDE4" />
      <Path
        d="M14.343 8.75a.5.5 0 00-1 0h1zm-1 9.667a.5.5 0 101 0h-1zm0-9.667v9.667h1V8.75h-1z"
        fill="#C63"
      />
      <Path
        d="M17.834 12.5l-3.47-3.47a.75.75 0 00-1.06 0l-3.47 3.47"
        stroke="#C63"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M10 20.25h8" stroke="#C63" strokeLinecap="round" />
    </Svg>
  );
}

export default SvgComponent;
