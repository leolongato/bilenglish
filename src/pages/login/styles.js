import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin: 0 30px;
`;

export const Input = styled.TextInput`
    height: 40px;
    border: 1px solid #00BFFF;
    border-radius: 15px;
    width: 100%;
    margin: 10px 0;
    display: flex;
    font-size: 15px;
    padding-left: 20px;
`;

export const StyledText = styled.Text`
    font-size: 40px;
    margin: 20px 0;
    font-weight: bold;
    color: #00BFFF;
`;

export const Button = styled.View`
    height: 40px;
    border-radius: 15px;
    background:#00BFFF;
    margin: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #btnTitle{
        color: white;
    }
`;

export const ButtonTitle = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;
