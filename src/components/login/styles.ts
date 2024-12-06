import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import COLORS from '../../utils/colorUtils';

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
    color: ${COLORS.WHITE};
    font-family: RumRaisin-Regular;
    letter-spacing: 2px;
`;

export const FormInput = styled.TextInput`
    width: 100%;
    font-size: 16px;
    color: ${COLORS.WHITE};
    font-weight: 500;
`;

export const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1.3px solid ${COLORS.GRAY_LIGHT};
    border-radius: 16px;
    padding: 10px;
    margin-top: 2px;
    background-color: ${COLORS.CYAN_OPACITY};
`;

export const ToggleButton = styled.TouchableOpacity`
    padding: 5px;
    position: absolute;
    right: 5px;
`;

export const AcessButton = styled.TouchableOpacity`
    background-color: ${COLORS.BLUE_TROPIC};
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
    color: ${COLORS.WHITE};
    font-family: RumRaisin-Regular;
    letter-spacing: 2px;
`;

export const RegisterButton = styled.TouchableOpacity`
    margin-top: 14px;
    align-self: center;
`;

export const RegisterButtonText = styled.Text`
    font-size: 14px;
    color: ${COLORS.GRAY_LIGHT};
    font-weight: bold;
`;