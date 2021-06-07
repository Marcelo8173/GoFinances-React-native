import React from 'react'
import * as S from './styles'

type IPropsHighLights = {
    amount: number
}

const HighLights = ({amount}:IPropsHighLights) => {
    return(
        <S.Wrapper>
            <S.Header>
                <S.Title>
                    Entrada
                </S.Title>
                <S.Icon name="arrow-up-circle" />
            </S.Header>
            <S.Footer>
                <S.Amount>
                    R$ {amount}
                </S.Amount>
                <S.LastTransaction>
                    Ultima entrada dia 13 de abril
                </S.LastTransaction>
            </S.Footer>
        </S.Wrapper>
    )
}

export {HighLights}