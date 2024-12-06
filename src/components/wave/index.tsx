import React from 'react';
import {Dimensions} from 'react-native';
import {Skia, Path, vec, LinearGradient} from '@shopify/react-native-skia';
import {
  useSharedValue,
  useDerivedValue,
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import Sky from '../sky';

import * as S from './styles';
import COLORS from '../../utils/colorUtils';

const {width, height} = Dimensions.get('window');
const frequency: number = 2;
const amplitude: number = 12;
const verticalOffset: number = 200; // Altura base da onda

export default function AnimatedWave() {
  const phase = useSharedValue(0); // Fase da onda

  // Configuração da animação contínua
  React.useEffect(() => {
    phase.value = withRepeat(
      withTiming(Math.PI * 2, {duration: 4000, easing: Easing.linear}),
      -1, // Loop infinito
      false, // Sem reversão
    );
  }, [phase]);

  const animatedPath = useDerivedValue(() => {
    const path = Skia.Path.Make();
    path.moveTo(0, verticalOffset);

    for (let x = 0; x <= width; x++) {
      const y =
        amplitude * Math.sin((x / width) * Math.PI * frequency + phase.value) +
        verticalOffset;
      path.lineTo(x, y);
    }

    path.lineTo(width, height);
    path.lineTo(0, height);
    path.close();

    return path;
  }, [phase]);

  return (
    <S.Container>
      <Sky />
      <S.CanvasStyled>
        <Path path={animatedPath} style="fill">
          <LinearGradient
            start={vec(0, verticalOffset)}
            end={vec(0, verticalOffset + 300)}
            colors={[
              COLORS.GRADIENT_CYAN_MEDIUM,
              COLORS.GRADIENT_BLUE_VIVID_DARK,
              COLORS.GRADIENT_BLUE_NAVY_DARK,
            ]}
          />
        </Path>
      </S.CanvasStyled>
    </S.Container>
  );
}
