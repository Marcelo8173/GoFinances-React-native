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
                <HighLights 
                    title="Entradas" 
                    lastTransaction="Última entrada dia 13 de abril" 
                    amount="1700.1"
                    type="up"
                />
                <HighLights 
                    title="Saídas" 
                    lastTransaction="Última saída dia 03 de abril" 
                    amount="1700.1"
                    type="down"
                />
                <HighLights 
                    title="Total" 
                    lastTransaction="01 à 16 de abril" 
                    amount="1700.1"
                    type="total"
                />

            </S.HighLightsCards>
        </S.Wrapper>
    )
}