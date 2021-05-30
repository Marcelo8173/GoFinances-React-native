import React from 'react'
import {Text} from 'react-native'
import * as S from './styles'

export function Dashboard(){
    return(
        <S.Wrapper>
            <S.Header>
                <S.UserWrapper>
                    <S.UserInfo>
                        <S.Photo source={{uri: 'https://avatars.githubusercontent.com/u/50594445?s=60&v=4'}}/>

                        <S.User>
                            <S.UserGreeting>Olá,</S.UserGreeting>
                            <S.UserName>Marcelo</S.UserName>
                        </S.User>
                    </S.UserInfo>
                </S.UserWrapper>
            </S.Header>
        </S.Wrapper>
    )
}