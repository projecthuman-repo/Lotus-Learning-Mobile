import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface FacebookProps {
    color?: string,
    width?: number,
    height?: number
}

const FacebookIcon = ({color='#2699FB', width=8.36, height=16.01} : FacebookProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 9 17" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.422 17.0002V9.71119H7.911L8.267 6.86719H5.422V5.08919C5.422 4.28919 5.689 3.66719 6.844 3.66719H8.355V1.08919C8 1.08919 7.111 1.00019 6.133 1.00019C5.63829 0.967391 5.14234 1.0422 4.67931 1.21947C4.21628 1.39673 3.79717 1.67225 3.45084 2.02704C3.10451 2.38183 2.83919 2.80746 2.67314 3.27463C2.5071 3.7418 2.44427 4.23941 2.489 4.73319V6.86719H0V9.71119H2.489V17.0002H5.422Z" fill={color}/>
        </Svg>
    );
};

export default FacebookIcon;




