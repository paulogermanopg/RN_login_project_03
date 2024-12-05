import React from 'react';
import { StyleSheet } from 'react-native';
import { Skia, Path, Canvas } from '@shopify/react-native-skia';
import Animated, { Easing, useSharedValue, withRepeat, withTiming, useAnimatedReaction, useDerivedValue } from 'react-native-reanimated';

const WIDTH = 300;
const HEIGHT = 200;
const AMPLITUDE = 20;
const FREQUENCY = 2; // número de ondas na largura total
const SPEED = 2000; // Velocidade em milissegundos para o loop

const createWavePath = (phase: number) => {
  const path = Skia.Path.Make();
  const step = WIDTH / 100; // Quantidade de pontos na onda

  path.moveTo(0, HEIGHT / 2); // Começa no meio vertical

  for (let x = 0; x <= WIDTH; x += step) {
    const y = AMPLITUDE * Math.sin((FREQUENCY * x + phase) * (Math.PI / 180)) + HEIGHT / 2;
    path.lineTo(x, y);
  }

  path.lineTo(WIDTH, HEIGHT); // Linha para o canto inferior direito
  path.lineTo(0, HEIGHT); // Linha para o canto inferior esquerdo
  path.close(); // Fecha o caminho para criar o preenchimento

  return path;
};

const AnimatedWave = () => {
  const phase = useSharedValue(0); // Valor animado para o deslocamento da onda
  const skiaPhase = useSharedValue(0); // Valor animado compatível com o Skia

  // Animação do phase usando reanimated
  React.useEffect(() => {
    phase.value = withRepeat(
      withTiming(360, { duration: SPEED, easing: Easing.linear }),
      -1, // Loop infinito
    );
  }, [phase]);

  // Reage à mudança no `phase` para atualizar o valor do Skia
  useAnimatedReaction(
    () => phase.value,
    (currentPhase) => {
      skiaPhase.value = currentPhase;
    },
    [phase],
  );

  const wavePath = useDerivedValue(() => {
    return createWavePath(skiaPhase.value);
  }, [skiaPhase]);

  return (
    <Canvas style={styles.canvas}>
      {/* Renderiza a onda animada */}
      <Path path={wavePath} color="#3498db" />
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
