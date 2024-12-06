import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

type STYLEDPROPS = {
    size?: number;
    top?: number;
    left?: number;
    isKeyBoard?: boolean;
};

export const FishContainer = styled.View<STYLEDPROPS>`
    position: absolute;
    width: 100%;
    height: 25%;
    overflow: hidden;
    bottom: 0;
     display: ${props => props.isKeyBoard ? 'none' : 'flex'};
`;

export const FishAnimated = styled(Animatable.View)<STYLEDPROPS>`
    position: absolute;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    width: ${props => props.size}px;
    height: ${props => props.size || 2 / 2}px;
`;

