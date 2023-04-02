import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface GooglePlusProps {
    color?: string,
    width?: number,
    height?: number
}

const GooglePlusIcon = ({color='#2699FB', width=16, height=10.21} : GooglePlusProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 11" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.39988V5.89988H14.5V7.39988H13V5.79988H11.5V4.39988H13V2.89988H14.5V4.39988H16ZM5.1 4.39988H9.9C9.9 4.69988 10 4.89988 10 5.19988C10.0428 5.85906 9.94622 6.51986 9.71648 7.13918C9.48674 7.75851 9.12903 8.32245 8.66669 8.79424C8.20434 9.26602 7.64774 9.63505 7.03318 9.87725C6.41862 10.1194 5.7599 10.2294 5.1 10.1999C3.7474 10.1999 2.45019 9.66256 1.49376 8.70613C0.53732 7.74969 0 6.45249 0 5.09988C0 3.74728 0.53732 2.45008 1.49376 1.49364C2.45019 0.537204 3.7474 -0.000115844 5.1 -0.000115844C6.35753 -0.0155529 7.57356 0.449401 8.5 1.29988L7.1 2.69988C6.84062 2.43475 6.52878 2.22665 6.18439 2.0889C5.84001 1.95115 5.47068 1.88677 5.1 1.89988C4.25309 1.90565 3.4425 2.24464 2.84363 2.84351C2.24476 3.44238 1.90576 4.25297 1.9 5.09988C1.89449 5.52164 1.9735 5.94023 2.13236 6.33096C2.29122 6.72169 2.52673 7.07665 2.82498 7.3749C3.12323 7.67316 3.47819 7.90866 3.86892 8.06752C4.25965 8.22639 4.67824 8.3054 5.1 8.29988C5.76961 8.3554 6.43611 8.16148 6.97141 7.75538C7.50672 7.34929 7.87305 6.75969 8 6.09988H5.1V4.39988Z" fill={color}/>
        </Svg>
    );
};

export default GooglePlusIcon;