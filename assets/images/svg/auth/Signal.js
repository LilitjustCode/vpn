import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={1.81812}
        y={12.7275}
        width={2.72727}
        height={5.45455}
        rx={1.36364}
        fill="#33CC8C"
      />
      <Rect
        x={6.36353}
        y={9.09131}
        width={2.72727}
        height={9.09091}
        rx={1.36364}
        fill="#33CC8C"
      />
      <Rect
        x={10.9089}
        y={5.45459}
        width={2.72727}
        height={12.7273}
        rx={1.36364}
        fill="#33CC8C"
      />
      <Rect
        x={15.4546}
        y={1.81836}
        width={2.72727}
        height={16.3636}
        rx={1.36364}
        fill="#D0D7D9"
      />
    </Svg>
  );
}

export default SvgComponent;
