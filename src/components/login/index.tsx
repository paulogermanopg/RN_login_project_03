import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styles';
import COLORS from '../../utils/colorUtils';

export default function SingIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <S.Container>
      <S.FormContainer animation="fadeInUp" delay={800}>
        <S.FormTitle>E-mail</S.FormTitle>

        <S.InputContainer>
          <S.FormInput
            placeholder="Digite o seu e-mail"
            placeholderTextColor={COLORS.GRAY_LIGHT}
            onChangeText={setEmail}
          />
        </S.InputContainer>

        <S.FormTitle>Senha</S.FormTitle>

        <S.InputContainer>
          <S.FormInput
            placeholder="Digite a sua senha"
            placeholderTextColor={COLORS.GRAY_LIGHT}
            secureTextEntry={secureEntry}
            onChangeText={setPassword}
          />

          <S.ToggleButton onPress={toggleSecureEntry}>
            <Icon
              name={secureEntry ? 'eye-off' : 'eye'}
              size={24}
              color={COLORS.GRAY_LIGHT}
            />
          </S.ToggleButton>
        </S.InputContainer>

        <S.AcessButton>
          <S.ButtonText>Acessar</S.ButtonText>
        </S.AcessButton>

        <S.RegisterButton>
          <S.RegisterButtonText>Cadastrar nova conta</S.RegisterButtonText>
        </S.RegisterButton>
      </S.FormContainer>
    </S.Container>
  );
}
