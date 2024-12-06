import React from 'react';

import Wave from '../components/wave';
import SingIn from '../components/login';
import Fishes from '../components/fishes';

import {Container} from './styles';

export default function InitialScreen() {
  return (
    <Container>
      <Wave />
      <SingIn />
      <Fishes />
    </Container>
  );
}
