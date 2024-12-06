import React from 'react';
import {Container} from './styles';
import Wave from '../components/wave';
import Sky from '../components/sky';
import SingIn from '../components/login';

export default function InitialScreen() {
  return (
    <Container>
      <Wave />
      <SingIn />
    </Container>
  );
}
