import React from 'react'
import { Icon } from '../HighLightCard/styles'
import * as S from './styles'

interface ICategory {
    key?: string
    name: string
    icon: string
}

export interface ITransactionCard {
    data: {
        type: 'positive' | 'negative'
        title: string
        amount: string
        category: ICategory
        date: string
    }
}

const TransactionCard = ({
   data
}:ITransactionCard) => {
    return(
        <S.Container>
            <S.Title>{data.title}</S.Title>
            <S.Amount type={data.type} >{data.type === 'negative' && '- '}{data.amount}</S.Amount>
            <S.Footer>
                <S.Category>
                    <S.Icon name={data.category.icon}/>
                    <S.CategoryName>{data.category.name}</S.CategoryName>
                </S.Category>
                <S.Date>
                    {data.date}
                </S.Date>
            </S.Footer>
        </S.Container>
    )
}

export { TransactionCard }