import React from 'react'
import { HighLights } from '../../components/HighLightCard'
import { TransactionCard } from '../../components/TransactionCard'
import * as S from './styles'

export function Dashboard(){

    const data = [
        {
            id: '1',
            title:"Desenvolvimento de site", 
            type: 'positive',
            amount:"R$ 12.000,00",
            category :{
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:"13/04/2020"
        },
        {
            id: '2',
            title:"Desenvolvimento de site", 
            amount:"R$ 12.000,00",
            type: 'negative',
            category :{
                name: 'Vendas',
                icon: 'coffee'
            },
            date:"13/04/2020"
        },
        {
            id: '3',
            title:"Desenvolvimento de site", 
            type: 'positive',
            amount:"R$ 12.000,00",
            category :{
                name: 'Vendas',
                icon: 'shopping-bag'
            },
            date:"13/04/2020"
        },
        {
            id: '4',
            title:"Desenvolvimento de site", 
            amount:"R$ 12.000,00",
            type: 'negative',
            category :{
                name: 'Vendas',
                icon: 'shopping-bag'
            },
            date:"13/04/2020"
        },
       
    ]

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

            <S.Transactions>
                <S.Title>Listagem</S.Title>
                <S.TransactionList 
                    data={data}
                    keyExtractor={{item => item}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => <TransactionCard data={item}/>}
                />
                
            </S.Transactions>
        </S.Wrapper>
    )
}