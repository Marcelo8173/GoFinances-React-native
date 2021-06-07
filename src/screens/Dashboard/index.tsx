import React from 'react'
import { HighLights } from '../../components/HighLightCard'
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
                    <S.Icon name="power"/>
                </S.UserWrapper>
            </S.Header>
            <S.HighLightsCards 
                horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:24}}
            >
                <HighLights amount={1700.1}/>
                <HighLights amount={17.00}/>
                <HighLights amount={17.00}/>
            </S.HighLightsCards>
        </S.Wrapper>
    )
}