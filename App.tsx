import { Canvas } from '@shopify/react-native-skia';
import { useSharedValue } from 'react-native-reanimated';
import React from 'react';
import { StatusBar, View, StyleSheet, Dimensions, ScaledSize } from 'react-native';


const dimension: ScaledSize = Dimensions.get('window');
const width: number = dimension.width;
const height: number = dimension.height;
const frequency: number = 2;
const initialAmplitude: number = 10;
const initialVerticalOffset: number = 100;

export default function App(){
  const verticalOffset = useSharedValue(initialVerticalOffset);
  const amplitude = useSharedValue(initialAmplitude);

  const createWavePath = (phase: number = 20) => {

  };

  return(
    <View style={styles.container}>
      <Canvas style={styles.canvas}>

      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  canvas: {
    flex: 1,
  },
});
