import styled, { css } from 'styled-components/native'
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize'

export const Wrapper = styled.View`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.colors.backgroun} ;
    `}
`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
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