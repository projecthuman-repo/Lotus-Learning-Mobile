import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface TwitterProps {
    color?: string,
    width?: number,
    height?: number
}

const TwitterIcon = ({color='#2699FB', width=16, height=12.98} : FacebookProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 13" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.067 12.9781C6.2958 12.9892 7.51448 12.7553 8.65188 12.2901C9.78928 11.825 10.8226 11.1378 11.6915 10.2689C12.5603 9.3999 13.2474 8.36652 13.7124 7.22907C14.1775 6.09162 14.4112 4.8729 14.4 3.64411V3.20011C15.0211 2.72724 15.5614 2.15685 16 1.51111C15.4039 1.77023 14.7761 1.94945 14.133 2.04411C14.7941 1.62895 15.2953 1.0023 15.555 0.266111C14.9128 0.623693 14.2253 0.892798 13.511 1.06611C13.2101 0.727516 12.8403 0.457212 12.4264 0.273349C12.0124 0.0894867 11.5639 -0.00367808 11.111 0.000111115C10.2428 0.0132698 9.41386 0.364013 8.79988 0.977991C8.1859 1.59197 7.83516 2.42092 7.822 3.28911C7.80181 3.52972 7.83213 3.7719 7.911 4.00011C6.60287 3.93698 5.32334 3.59499 4.15816 2.99704C2.99298 2.3991 1.96905 1.55903 1.155 0.533111C0.862467 1.04785 0.709418 1.63006 0.710999 2.22211C0.72273 2.7594 0.856918 3.28693 1.10334 3.76453C1.34976 4.24212 1.70192 4.65719 2.133 4.97811C1.59878 4.96731 1.07714 4.81403 0.622002 4.53411C0.621169 5.29546 0.887736 6.03292 1.37518 6.61778C1.86262 7.20263 2.53997 7.59773 3.289 7.73411C2.99953 7.81222 2.69921 7.84228 2.4 7.82311C2.18872 7.8373 1.97682 7.80698 1.778 7.73411C1.99533 8.39287 2.41082 8.96842 2.96767 9.38207C3.52452 9.79573 4.19555 10.0273 4.889 10.0451C3.72051 10.9578 2.28266 11.4578 0.799999 11.4671C0.530255 11.4816 0.259975 11.4515 0 11.3781C1.47104 12.4463 3.24926 13.0078 5.067 12.9781Z" fill={color}/>
        </Svg>
    );
};

export default TwitterIcon;

