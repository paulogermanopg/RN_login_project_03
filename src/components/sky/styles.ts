import styled from 'styled-components/native';

type STYLEDPROPS = {
    size: number;
    top?: number;
    left?: number;
};

export const Sky = styled.View`
  flex: 1;
  background-color: #001d29; /* Fundo escuro do céu */
  position: absolute; /* Para ficar como plano de fundo */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Star = styled.View<STYLEDPROPS>`
  background-color: white;
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
  background-color: #fdf6e3;
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
  background-color: rgba(255, 255, 200, 0.35);
  border-radius: 60px;
`;

export const Crater = styled.View<STYLEDPROPS>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #d9d3b3;
  border-radius: ${props => props.size / 2}px;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;
