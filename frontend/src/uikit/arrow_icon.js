import React from 'react';

// The Svg and Path components are used to render the SVG file.
import Svg, {Path} from 'react-native-svg';

// The ArrowProps interface is used to define the props that the ArrowIcon component accepts.
interface ArrowProps {
    color?: string,
    width?: number,
    height?: number
}

// The ArrowIcon component is used to render the arrow icon.
const ArrowIcon = ({color='#FDFDFD', width=16, height=16} : ArrowProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
            <Path d="M8 0L6.545 1.455L12.051 6.961H0V9.039H12.052L6.545 14.545L8 16L16 8L8 0Z" fill={color}/>
        </Svg>
    );
};

export default ArrowIcon;