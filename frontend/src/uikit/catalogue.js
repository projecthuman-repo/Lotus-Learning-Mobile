import React from 'react';

// The Svg and Path components are used to render the SVG file.
import Svg, {Path} from 'react-native-svg';

// The CatalogueProps interface is used to define the props that the CatalogueIcon component accepts.
interface CatalogueProps {
    color?: string,
    width?: number,
    height?: number
}

// The CatalogueIcon component is used to render the catalogue icon.
const CatalogueIcon = ({color='#2699FB', width=20, height=20} : CatalogueProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.2889 18.0001H2.02294C1.74152 17.9993 1.47186 17.8872 1.27286 17.6882C1.07387 17.4892 0.961729 17.2196 0.960938 16.9381L0.960938 1.68114C0.961466 1.39964 1.07352 1.12983 1.27257 0.930777C1.47162 0.731728 1.74144 0.619669 2.02294 0.619141L11.1229 0.619141V1.01914H2.02294C1.84644 1.01914 1.67716 1.08926 1.55236 1.21406C1.42755 1.33887 1.35744 1.50814 1.35744 1.68464C1.35744 1.86114 1.42755 2.03041 1.55236 2.15522C1.67716 2.28003 1.84644 2.35014 2.02294 2.35014V13.3911L2.82294 12.5451L3.62294 13.3911V2.34614H12.9629C13.2444 2.34693 13.514 2.45908 13.713 2.65807C13.912 2.85706 14.0241 3.12672 14.0249 3.40814V16.9381C14.0241 17.2196 13.912 17.4892 13.713 17.6882C13.514 17.8872 13.2444 17.9993 12.9629 18.0001H12.2889Z" fill={color}/>
        </Svg>
    );
};

export default CatalogueIcon;