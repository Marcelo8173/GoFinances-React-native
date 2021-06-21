import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'


export const Container = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.shape};
        border-radius: 5px;
        padding: 17px 24px;
        margin-top: 16px;
    `}
`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`
type Props = {
    type: 'positive' | 'negative'
}

export const Amount = styled.Text<Props>`
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme ,type}) => 
        type === 'positive' ?
        theme.colors.sucess:
        theme.colors.attention};
`
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
    margin-right: 17px;
`

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`