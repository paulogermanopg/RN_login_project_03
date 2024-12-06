import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    flex: 1;
    position: absolute;
`;

export const FormContainer = styled(Animatable.View)`
    flex: 1;
    padding-left: 7%;
    padding-right: 7%;
`;

export const FormTitle = styled.Text`
    font-size: 20px;
    margin-top: 28px;
    color: #fff;
    font-family: RumRaisin-Regular;
    letter-spacing: 2px;
`;

export const FormInput = styled.TextInput`
    width: 100%;
    font-size: 16px;
    color: #FFF;
    font-weight: 500;
`;

export const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1.3px solid #ccc;
    border-radius: 16px;
    padding: 10px;
    margin-top: 2px;
    background-color: #00B3B390;
`;

export const ToggleButton = styled.TouchableOpacity`
    padding: 5px;
    position: absolute;
    right: 5px;
`;

export const AcessButton = styled.TouchableOpacity`
    background-color: #489cbd;
    width: 100%;
    border-radius: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-family: RumRaisin-Regular;
    letter-spacing: 2px;
`;

export const RegisterButton = styled.TouchableOpacity`
    margin-top: 14px;
    align-self: center;
`;

export const RegisterButtonText = styled.Text`
    font-size: 14px;
    color: #ccc;
    font-weight: bold;
`;