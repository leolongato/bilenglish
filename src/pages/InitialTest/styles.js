import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    width: 100%;
`;

export const ListTest = styled.FlatList`
    width: 100%;
`;

export const Item = styled.View`
    background: #c4c4c4;
    margin: 10px;
    display: flex;
    height: 400px;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border-radius: 15px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
    background: #00BFFF;
    padding: 10px;
    border-radius: 15px;
`;