import React from 'react';
import {StyleSheet, Dimensions, ScaledSize} from 'react-native';
import {Skia, Path, Canvas, LinearGradient, vec} from '@shopify/react-native-skia';
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
  runOnJS,
  useDerivedValue,
} from 'react-native-reanimated';

const dimension: ScaledSize = Dimensions.get('window');

const WIDTH: number = dimension.width;
const HEIGHT: number = dimension.height;
const AMPLITUDE: number = 15;
const FREQUENCY: number = 2; // número de ondas na largura total
const SPEED: number = 2000; // Velocidade em milissegundos para o loop
const initialVerticalOffset: number = 100;

const createWavePath = (phase: number): string => {
  'worklet';
  let path = `M0 ${HEIGHT / 2} `; // Começa no meio vertical
  const step = WIDTH / 100; // Quantidade de pontos na onda

  for (let x = 0; x <= WIDTH; x += step) {
    const y =
      AMPLITUDE * Math.sin((FREQUENCY * x + phase) * (Math.PI / 180)) +
      HEIGHT / 2;
    path += `L${x} ${y} `;
  }

  path += `L${WIDTH}, ${HEIGHT} L0, ${HEIGHT} Z`; // Fecha o caminho para preencher
  return path;
};

const AnimatedWave = () => {
  const phase = useSharedValue(0); // Valor animado para o deslocamento da onda
  const skiaPath = useSharedValue<Path | null>(null); // Valor compatível com o Skia
  const verticalOffset = useSharedValue(initialVerticalOffset);

  // Animação do phase usando reanimated
  React.useEffect(() => {
    phase.value = withRepeat(
      withTiming(360, {duration: SPEED, easing: Easing.linear}),
      -1, // Loop infinito
    );
  }, [phase]);

  // Atualiza o valor de `skiaPath` em cada quadro animado
  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentPhase = phase.value;
      runOnJS(() => {
        const pathString = createWavePath(currentPhase);
        const skiaPathValue = Skia.Path.MakeFromSVGString(pathString);
        skiaPath.value = skiaPathValue;
      })();
    }, 16); // Aproximadamente 60 FPS
    return () => clearInterval(interval);
  }, [phase, skiaPath]);

  const gradientStart = useDerivedValue(() => {
    return vec(0, verticalOffset.value);
  }, [verticalOffset]);

  const gradientEnd = useDerivedValue(() => {
    return vec(0, verticalOffset.value + 500);
  }, [verticalOffset]);

  return (
    <Canvas style={styles.canvas}>
      {/* Renderiza a onda animada */}
      {skiaPath.value && (
        <Path path={skiaPath} color={'cyan'} style={'fill'}>
          {/* <LinearGradient
            start={gradientStart}
            end={gradientEnd}
            colors={['cyan', 'blue']}
          /> */}
        </Path>
      )}
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#ecf0f1',
  },
});

export default AnimatedWave;
