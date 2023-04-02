import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface QuestionProps {
    color?: string,
    width?: number,
    height?: number
}

const QuestionIcon = ({color='#2699FB', width=16, height=16} : QuestionProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
            <Path d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9937 5.88022 15.1488 3.84906 13.6499 2.35014C12.1509 0.851219 10.1198 0.00633091 8 0ZM7.92 13.28C7.69849 13.28 7.48195 13.2143 7.29777 13.0912C7.11358 12.9682 6.97003 12.7933 6.88526 12.5886C6.80049 12.384 6.77831 12.1588 6.82152 11.9415C6.86474 11.7242 6.97141 11.5247 7.12804 11.368C7.28468 11.2114 7.48424 11.1047 7.7015 11.0615C7.91876 11.0183 8.14396 11.0405 8.34861 11.1253C8.55326 11.21 8.72818 11.3536 8.85125 11.5378C8.97432 11.7219 9.04 11.9385 9.04 12.16C9.04357 12.3081 9.01703 12.4553 8.96201 12.5928C8.90698 12.7303 8.82462 12.8552 8.7199 12.9599C8.61518 13.0646 8.49028 13.147 8.35279 13.202C8.21529 13.257 8.06806 13.2836 7.92 13.28ZM10.08 7.04L9.2 8C9.0996 8.09122 9.0193 8.20235 8.9642 8.32631C8.90911 8.45027 8.88044 8.58435 8.88 8.72C8.87664 8.97356 8.77442 9.21579 8.5951 9.3951C8.41579 9.57441 8.17356 9.67663 7.92 9.68C7.79258 9.68507 7.66548 9.66371 7.54671 9.61726C7.42795 9.57081 7.32008 9.50027 7.22991 9.4101C7.13973 9.31992 7.0692 9.21206 7.02275 9.09329C6.9763 8.97452 6.95493 8.84743 6.96 8.72C6.94937 8.447 7.00154 8.17521 7.1125 7.92555C7.22346 7.6759 7.39024 7.45504 7.6 7.28L8.32 6.4C8.63355 6.10487 8.83202 5.70792 8.88 5.28C8.88588 5.16288 8.86714 5.04584 8.825 4.93641C8.78285 4.82698 8.71824 4.7276 8.63532 4.64468C8.5524 4.56177 8.45302 4.49715 8.3436 4.455C8.23417 4.41286 8.11712 4.39412 8 4.4C7.7812 4.38951 7.56559 4.45569 7.39034 4.58712C7.2151 4.71855 7.0912 4.90701 7.04 5.12C6.94887 5.29419 6.81044 5.43915 6.64062 5.5382C6.47081 5.63726 6.27649 5.68641 6.08 5.68C5.96289 5.68588 5.84584 5.66714 5.73641 5.625C5.62698 5.58285 5.5276 5.51823 5.44469 5.43532C5.36177 5.3524 5.29715 5.25302 5.25501 5.14359C5.21286 5.03416 5.19413 4.91712 5.2 4.8C5.19459 4.66221 5.22201 4.52511 5.28 4.4C5.49085 3.86358 5.86987 3.40994 6.36024 3.10706C6.85062 2.80418 7.42595 2.66837 8 2.72C8.35479 2.69142 8.71166 2.73622 9.04837 2.85161C9.38508 2.96699 9.69442 3.15049 9.95711 3.39066C10.2198 3.63083 10.4302 3.92254 10.5752 4.24759C10.7202 4.57264 10.7968 4.92408 10.8 5.28C10.7884 5.93603 10.5315 6.56394 10.08 7.04Z" fill={color}/>
        </Svg>
    
    );
};

export default QuestionIcon;