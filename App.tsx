import {
  Canvas,
  useClock,
  Skia,
  Path,
  vec,
  LinearGradient,
} from '@shopify/react-native-skia';
import {
  useSharedValue,
  useDerivedValue,
  runOnUI,
} from 'react-native-reanimated';
import {curveBasis, line} from 'd3';
import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  ScaledSize,
} from 'react-native';
import WaveTest from './src/waveTest';

const dimension: ScaledSize = Dimensions.get('window');
const width: number = dimension.width;
const height: number = dimension.height;
const frequency: number = 2;
const initialAmplitude: number = 10;
const initialVerticalOffset: number = 100;

export default function App() {
  return <WaveTest />;
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
