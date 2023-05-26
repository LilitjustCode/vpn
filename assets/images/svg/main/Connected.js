import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={45}
      height={48}
      viewBox="0 0 45 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.51 7.857c-.613-1.062-1.979-1.435-2.974-.719a22.2 22.2 0 1025.928 0c-.995-.716-2.361-.343-2.974.719-.613 1.061-.239 2.409.738 3.15a17.76 17.76 0 11-21.456 0c.977-.741 1.351-2.089.738-3.15z"
        fill="#33CC8C"
      />
      <Rect x={20.28} width={4.44} height={14.8} rx={2.22} fill="#33CC8C" />
    </Svg>
  );
}

export default SvgComponent;
