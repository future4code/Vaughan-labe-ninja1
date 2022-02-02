import React from "react";
import styled from "styled-components";
import { Cards } from "./CardsEstilos";

const CardBody = styled.div`
padding: 20px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
`


export default class Card extends React.Component{

    exemplo={
        cards:[
            {
                titulo: "Aulas de Francês",
                preco:125,
                data:"04/01/2022"
            },
            {
                titulo: "Aulas de Sei Lá",
                preco:255,
                data:"06/02/2022"
            },
            {
                titulo: "Aulas de alguma coisa",
                preco:300,
                data:"14/03/2022"
            },
            {
                titulo: "Aulas de Italiano",
                preco:100,
                data:"15/03/2022"
            },
            {
                titulo: "Aulas de Dormir",
                preco:500,
                data:"06/08/2022"
            },
            {
                titulo: "Aulas de Não sei o que",
                preco:6000,
                data:"01/04/2022"
            },
            {
                titulo: "Aulas de Alemão",
                preco:235,
                data:"09/10/2022"
            },
            {
                titulo: "Aulas de Filosofia",
                preco:1,
                data:"25/01/2022"
            },
        ]
    }

    render(){
        let card= this.exemplo.cards.map( obj => {
            return(
                <Cards key={obj.titulo}>
                    <h3>{obj.titulo}</h3>
                    <p>R$ {obj.preco},00</p>
                    <p>{obj.data}</p>                    
                </Cards>
            )
        })


        return((
            <CardBody>
                {card}
            </CardBody>
            
        ))
    }
};