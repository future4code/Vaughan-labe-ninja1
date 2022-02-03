import { toHaveStyle } from "@testing-library/jest-dom";
import axios from "axios";
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
const CorDeFundo = styled.div`
background-color: #fdf6e6;
height: 1fr;
display: grid;
`
const Filtro = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    gap: 10px;
`

export default class Card extends React.Component {

    state = {
        cards: []
    }

    componentDidMount () {
        this.getServicos()
    }

    getServicos = async () => {
        const url = "https://labeninjas.herokuapp.com/jobs"

        try{
            const resposta = await axios.get(url, {
                headers: {
                    Authorization: '9d13116d-4ff4-41b1-979f-9bf62ff1e99d'
                }
            })
            this.setState({cards: resposta.data.jobs})
           
        }catch(erro){
           
            alert("Serviços indisponíveis")
        }
    }

    render() {
        console.log(this.state.cards)
        let card = this.state.cards.map((obj) => {
            return (
                <Cards key={obj.title}>
                    <h3>{obj.title}</h3>
                    <p>R$ {obj.price},00</p>
                    <p>{obj.dueDate.slice(0, 10).split("-").reverse().join("/")}</p>
                </Cards>
            )
        })
        

        return ((

            <CorDeFundo>
                 <Filtro>
                        <div>
                            <input placeholder="Valor mínimo" type="number" ></input>
                        </div>
                        <div>
                            <input placeholder="Valor máximo"  type="number" ></input>
                        </div>
                        <div>
                            <input placeholder="Título ou descrição"  type="text" ></input>
                        </div>
                        <select>
                            <option value="ordenacao">Sem ordenação</option>
                            <option value="menorvalor">Menor valor</option>
                            <option value="maiorvalor">Maior valor</option>
                            <option value="titulo">Título</option>
                            <option value="prazo">Prazo</option>
                        </select>
                    </Filtro>
                <CardBody>
        
                    {card}
                </CardBody>

            </CorDeFundo>
        ))
    }
};