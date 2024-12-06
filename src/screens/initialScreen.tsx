import React from 'react';
import {Container} from './styles';
import Wave from '../components/wave';
import SingIn from '../components/login';
import Fishes from '../components/fishes';

export default function InitialScreen() {
  return (
    <Container>
      <Wave />
      <SingIn />
      <Fishes />
    </Container>
  );
}
