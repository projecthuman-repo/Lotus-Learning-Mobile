import React from 'react';

// The Svg and Path components are used to render the SVG file.
import Svg, {Path} from 'react-native-svg';

// The ProfileDefaultIconProps interface is used to define the props that the ProfileDefaultIcon component accepts.
interface ProfileDefaultIconProps {
    color?: string,
    width?: number,
    height?: number
}

// The ProfileDefaultIcon component is used to render the profile default icon.
const ProfileDefault = ({color='#7FC4FD', width=68.6, height=68.6} : ProfileDefaultIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 69 70" fill="none">
            <Path d="M0.226562 69.2992V60.7262C0.226562 51.2912 15.6616 43.5742 34.5266 43.5742C53.3916 43.5742 68.8266 51.2922 68.8266 60.7262V69.2992H0.226562ZM17.3746 17.8512C17.3742 14.4593 18.3796 11.1434 20.2637 8.32286C22.1479 5.50234 24.8261 3.30387 27.9597 2.00546C31.0933 0.70705 34.5415 0.36702 37.8684 1.02837C41.1953 1.68972 44.2513 3.32274 46.65 5.72093C49.0488 8.11912 50.6825 11.1748 51.3446 14.5015C52.0068 17.8282 51.6675 21.2765 50.3699 24.4104C49.0722 27.5443 46.8743 30.223 44.0543 32.1078C41.2342 33.9926 37.9185 34.9988 34.5266 34.9992C29.9783 34.9992 25.6162 33.1927 22.3997 29.9769C19.1832 26.7612 17.3756 22.3995 17.3746 17.8512Z" fill={color}/>
        </Svg>
    );
};

export default ProfileDefault;