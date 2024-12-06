import styled from 'styled-components/native';
import {Canvas} from '@shopify/react-native-skia';

export const Container = styled.View`
    flex: 1;
    position: relative;
`;

export const CanvasStyled = styled(Canvas)`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
