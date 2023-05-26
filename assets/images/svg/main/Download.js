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
      <Rect width={28} height={28} rx={6} fill="#E4FFF4" />
      <Path
        d="M13.5 18.167a.5.5 0 001 0h-1zm1-9.667a.5.5 0 00-1 0h1zm0 9.667V8.5h-1v9.667h1z"
        fill="#33CC8C"
      />
      <Path
        d="M10 14.417l3.47 3.47a.75.75 0 001.06 0l3.47-3.47"
        stroke="#33CC8C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M10 20.25h8" stroke="#33CC8C" strokeLinecap="round" />
    </Svg>
  );
}

export default SvgComponent;
