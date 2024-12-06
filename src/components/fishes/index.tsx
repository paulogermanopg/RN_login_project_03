import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styles';

type FishType = {
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
};

const Fish = (props: FishType) => {
  return (
    <S.FishAnimated
      animation={{
        from: {translateX: -400},
        to: {translateX: 400},
      }}
      iterationCount="infinite"
      duration={props.duration}
      delay={props.delay}
      size={props.size}
      top={props.top}
      left={props.left}>
      <Icon name="fish" size={props.size / 1.5} color="#054f77" />
    </S.FishAnimated>
  );
};

const Fishes = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);

  const fishes = Array.from({length: 10}).map(() => ({
    size: Math.random() * 20 + 10,
    top: Math.random() * 80 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 5000,
    duration: Math.random() * 4000 + 6000,
  }));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <S.FishContainer isKeyBoard={isKeyboardVisible}>
      {fishes.map((fish, index) => (
        <Fish
          key={index}
          size={fish.size}
          top={fish.top}
          left={fish.left}
          delay={fish.delay}
          duration={fish.duration}
        />
      ))}
    </S.FishContainer>
  );
};

export default Fishes;
