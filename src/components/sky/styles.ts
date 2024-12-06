import styled from 'styled-components/native';
import COLORS from '../../utils/colorUtils';

type STYLEDPROPS = {
    size: number;
    top?: number;
    left?: number;
};

export const Sky = styled.View`
  flex: 1;
  background-color: ${COLORS.SKY_BLACK_PEARL};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Star = styled.View<STYLEDPROPS>`
  background-color: ${COLORS.WHITE};
  border-radius: 50%;
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

export const Moon = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${COLORS.MOON_IVORY};
  border-radius: 60px;
  position: relative;
`;

export const MoonContainer = styled.View`
  position: absolute;
  top: 7%;
  left: 65%;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.MOONLIGHT};
  border-radius: 60px;
`;

export const Crater = styled.View<STYLEDPROPS>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${COLORS.MOON_SAND_LIGHT};
  border-radius: ${props => props.size / 2}px;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;
