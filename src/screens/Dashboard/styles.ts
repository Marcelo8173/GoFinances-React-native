import styled, { css } from 'styled-components/native'
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Wrapper = styled.View`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.colors.backgroun} ;
    `}
`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    position: absolute;
    top: 50px;  
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.View`
    ${({theme}) => css`
        width: 100%;
        height: ${RFPercentage(42)}px;
        background: ${theme.colors.primary};
        align-items: center;
        justify-content: center;
    `}
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const User = styled.View`
    margin-left: 17px;
`

export const UserGreeting = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.shape};
        font-size: ${RFValue(18)}px;
        font-family: ${theme.fonts.regular};
    `}
`

export const UserName = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.shape};
        font-size: ${RFValue(18)}px;
        font-family: ${theme.fonts.bold};
    `}
`

export const Icon = styled(Feather)`
     ${({theme}) => css`
        color: ${theme.colors.secundary};
        font-size: ${RFValue(24)}px;
    `}
`

export const HighLightsCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal:24}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;

`
export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${RFValue(18)}px;
        font-family: ${theme.fonts.regular};
    `}

`

export const TransactionList = styled.FlatList``