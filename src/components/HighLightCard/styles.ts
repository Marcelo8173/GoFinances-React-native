import styled, { css } from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'
import { IPropsHighLights } from '.'

export const Wrapper = styled.View<Pick<IPropsHighLights, "type">>`
    ${({theme,type}) => css`
        background-color: ${type === 'total' ? theme.colors.secundary : theme.colors.shape};
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

export const Title = styled.Text<Pick<IPropsHighLights, "type">>`
    ${({theme,type}) => css`
        font-family: ${theme.fonts.regular};
        font-size: ${RFValue(14)}px;
        color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
    `} 
`

export const Icon = styled(Feather)<IPropsHighLights>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css`
        color: ${({theme}) => theme.colors.sucess};
    `}
    ${(props) => props.type === 'down' && css`
        color: ${({theme}) => theme.colors.attention};
    `}
    ${(props) => props.type === 'total' && css`
        color: ${({theme}) => theme.colors.shape};
    `}
`

export const Footer = styled.View``

export const Amount = styled.Text<Pick<IPropsHighLights, "type">>`
    ${({theme,type}) => css`
        font-family: ${theme.fonts.medium};
        font-size: ${RFValue(32)}px;
        color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
        margin-top: 38px;
    `}
`

export const LastTransaction = styled.Text<Pick<IPropsHighLights, "type">>`
     ${({theme,type}) => css`
        font-family: ${theme.fonts.regular};
        font-size: ${RFValue(12)}px;
        color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
    `}
`