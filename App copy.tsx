import {Canvas, useClock, Skia, Path, vec, LinearGradient} from '@shopify/react-native-skia';
import {useSharedValue, useDerivedValue, runOnUI} from 'react-native-reanimated';
import {curveBasis, line} from 'd3';
import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  ScaledSize,
} from 'react-native';

const dimension: ScaledSize = Dimensions.get('window');
const width: number = dimension.width;
const height: number = dimension.height;
const frequency: number = 2;
const initialAmplitude: number = 10;
const initialVerticalOffset: number = 100;

export default function App() {
  const verticalOffset = useSharedValue(initialVerticalOffset);
  const amplitude = useSharedValue(initialAmplitude);
  const clock = useClock();

  const createWavePath = (phase: number = 20) => {
    const points: [number, number][] = Array.from(
      {length: width},
      (_, index) => {
        const angle: number = (index / width) * (Math.PI * frequency) + phase;
        return [
          index,
          amplitude.value * Math.sin(angle) + verticalOffset.value,
        ];
      },
    );
    const lineGenerator = line().curve(curveBasis);
    const waveLine = lineGenerator(points);
    const bottomLine: string = `L${width},${height} L${0}, ${height}`;
    return `${waveLine} ${bottomLine} Z`;
  };

  const animatedPath = useDerivedValue(() => {
    const current = (clock.value / 255) % 255;
    
    const start = Skia.Path.MakeFromSVGString(createWavePath(current));
    const end = Skia.Path.MakeFromSVGString(createWavePath(Math.PI * current));

    if (start && end) {
      return start.interpolate(end, 0.5);
    }
  }, [clock, verticalOffset]);

  const gradientStart = useDerivedValue(() => {
    return vec(0, verticalOffset.value);
  }, [verticalOffset]);

  const gradientEnd = useDerivedValue(() => {
    return vec(0, verticalOffset.value + 500);
  }, [verticalOffset]);

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path path={animatedPath} style={"fill"} color={"cyan"}>
          <LinearGradient start={gradientStart} end={gradientEnd} colors={['cyan', 'blue']} />
        </Path>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvas: {
    flex: 1,
  },
});
