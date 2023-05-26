import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={61}
      height={60}
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.5}
        width={60}
        height={60}
        rx={8}
        fill="#fff"
        fillOpacity={0.25}
      />
      <G clipPath="url(#clip0_355_375)">
        <Path
          d="M47.797 21.484a2.484 2.484 0 00-2.61-.36l-7.906 3.517-4.593-8.282a2.515 2.515 0 00-4.375 0l-4.594 8.281-7.906-3.515a2.5 2.5 0 00-3.454 2.86l3.97 16.921a2.485 2.485 0 001.155 1.578c.392.235.84.36 1.297.36.223 0 .443-.032.657-.094 7.234-2 14.875-2 22.109 0 .66.174 1.363.078 1.953-.266a2.438 2.438 0 001.156-1.578l3.985-16.922a2.5 2.5 0 00-.844-2.5zM36.75 35.391a1.266 1.266 0 01-1.25 1.125h-.125a48.412 48.412 0 00-9.75 0 1.25 1.25 0 01-1.375-1.11 1.265 1.265 0 011.125-1.375c3.407-.36 6.843-.36 10.25 0a1.265 1.265 0 011.125 1.36z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_355_375">
          <Path fill="#fff" transform="translate(10.5 10)" d="M0 0H40V40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
