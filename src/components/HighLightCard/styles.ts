import styled, { css } from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Wrapper = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.shape};
        width: ${RFValue(300)}px;
        border-radius: 5px;
        padding: 19px 23px;
        padding-bottom: ${RFValue(42)}px;
        margin-right: 16px;
    `}
`

export const Header = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.fonts.regular};
        font-size: ${RFValue(14)}px;
        color: ${theme.colors.text_dark};
    `} 
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
`

export const Footer = styled.View``

export const Amount = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.fonts.medium};
        font-size: ${RFValue(32)}px;
        color: ${theme.colors.text_dark};
        margin-top: 38px;
    `}
`

export const LastTransaction = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.fonts.regular};
        font-size: ${RFValue(12)}px;
        color: ${theme.colors.text};
    `}
`