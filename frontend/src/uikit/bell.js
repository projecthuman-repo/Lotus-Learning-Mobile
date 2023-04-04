import React from 'react';

// The Svg and Path components are used to render the SVG file.
import Svg, {Path} from 'react-native-svg';

// The BellProps interface is used to define the props that the BellIcon component accepts.
interface BellProps {
    color?: string,
    width?: number,
    height?: number
}

// The BellIcon component is used to render the bell icon.
const BellIcon = ({color='#2699FB', width=16, height=16} : BellProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.9389 14H10.9389C10.9389 14.5304 10.7282 15.0391 10.3531 15.4142C9.97803 15.7893 9.46932 16 8.93889 16C8.40846 16 7.89975 15.7893 7.52468 15.4142C7.1496 15.0391 6.93889 14.5304 6.93889 14H1.93889C1.7338 13.9947 1.5358 13.9238 1.37386 13.7979C1.21192 13.6719 1.09454 13.4975 1.03889 13.3C0.979871 13.107 0.976725 12.9013 1.02982 12.7066C1.08291 12.5119 1.19008 12.3363 1.33889 12.2C1.83419 11.826 2.23632 11.3426 2.51388 10.7875C2.79143 10.2324 2.93689 9.62063 2.93889 9V6C2.93889 4.4087 3.57103 2.88258 4.69625 1.75736C5.82147 0.632141 7.34759 0 8.93889 0C10.5302 0 12.0563 0.632141 13.1815 1.75736C14.3068 2.88258 14.9389 4.4087 14.9389 6V9C14.9409 9.62063 15.0864 10.2324 15.3639 10.7875C15.6415 11.3426 16.0436 11.826 16.5389 12.2C16.7016 12.3259 16.8189 12.5013 16.873 12.6998C16.9271 12.8983 16.9151 13.1089 16.8389 13.3C16.7832 13.4975 16.6659 13.6719 16.5039 13.7979C16.342 13.9238 16.144 13.9947 15.9389 14Z" fill={color}/>
        </Svg>
    
    );
};

export default BellIcon;