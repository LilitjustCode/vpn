import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={8} cy={8} r={8} fill="#D0D7D9" />
      <Circle cx={8} cy={8} r={5} fill="#B7BDBF" />
    </Svg>
  );
}

export default SvgComponent;
