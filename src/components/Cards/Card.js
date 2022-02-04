import { toHaveStyle } from "@testing-library/jest-dom";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Cards } from "./CardsEstilos";
import SaibaMais from "../SaibaMais";

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
        cards: [],
        ordenacao: "ordenacao",
        Vminimo: "",
        Vmaximo: '',
        PorNome: '',
        tela: "cards",
        detalhedocard: []
    }

    mudarTela = () => {
		console.log(this.state.tela)
		switch (this.state.tela) {
			case "verdetalhe":
				return <SaibaMais telaDetalhe={this.telaDetalhe} />
			case "cards":
				return <Card />
			default:
				return <Card telaCard={this.telaCard} />
		}

	}

	telaCard = () => {
		this.setState({ tela: "cards" })

	}

	telaDetalhe = () => {
		this.setState({ tela: "verdetalhe" })
   
	}
    componentDidMount() {
        this.getServicos()
    }


    onchangeOrdenacao = event => {
        this.setState({ ordenacao: event.target.value });
    }
    onChangeValorMinimo = event => {
        this.setState({ Vminimo: event.target.value })
    }
    onChangeValorMaximo = event => {
        this.setState({ Vmaximo: event.target.value })
    }
    onChangePorNome = event => {
        this.setState({ PorNome: event.target.value })
    }

    getDetalhes = async (id) => {
       
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`
        
        try {
            const resposta = await axios.get(url, {
                headers: {
                    Authorization: '9d13116d-4ff4-41b1-979f-9bf62ff1e99d'
                }
            })
            this.setState({ detalhedocard: resposta.data })
            this.setState({ tela: "verdetalhe" })
            
            
        } catch (erro) {
            console.log(erro.response)
            alert("Ocorreu um erro. Tente novamente!")
        }

    }




    getServicos = async () => {
        const url = "https://labeninjas.herokuapp.com/jobs"

        try {
            const resposta = await axios.get(url, {
                headers: {
                    Authorization: '9d13116d-4ff4-41b1-979f-9bf62ff1e99d'
                }
            })
            this.setState({ cards: resposta.data.jobs })

        } catch (erro) {

            alert("Serviços indisponíveis")
        }
    }

    render() {


        const produtosRenderizados = this.state.cards
            .filter(obj => {
                return obj.title.toLowerCase().includes(this.state.PorNome.toLowerCase())

            })
            .filter(obj => {

                return this.state.Vminimo === "" || obj.price >= this.state.Vminimo;
            })
            .filter(obj => {

                return this.state.Vmaximo === "" || obj.price <= this.state.Vmaximo;
            })
            .sort((objA, objB) => {
                switch (this.state.ordenacao) {
                    case "menorvalor":
                        return objA.price - objB.price;
                    case "maiorvalor":
                        return objB.price - objA.price;
                }
            })
            .map(obj => {
                return (
                   
                    <div>
                        <Cards key={obj.id}>

                            <h3>{obj.title}</h3>
                            <p>R$ {obj.price},00</p>
                            <p>{obj.dueDate.slice(0, 10).split("-").reverse().join("/")}</p>
                            <button onClick={() => this.getDetalhes(obj.id)}>Ver detalhes</button>
                            <button > Adicionar ao carrinho</button>
                            
                        </Cards>
                    </div>
                  
                )
            })


        return ((

            <CorDeFundo>
                <Filtro>
                    <div>
                        <input placeholder="Valor mínimo" value={this.state.Vminimo} type="number" onChange={this.onChangeValorMinimo}></input>
                    </div>
                    <div>
                        <input placeholder="Valor máximo" value={this.state.Vmaximo} type="number" onChange={this.onChangeValorMaximo}></input>
                    </div>
                    <div>
                        <input placeholder="Título" value={this.state.PorNome} type="text" onChange={this.onChangePorNome} ></input>
                    </div>
                    <select onChange={this.onchangeOrdenacao} name="select" value={this.state.ordenacao}>
                        <option value="ordenacao">Sem ordenação</option>
                        <option value="menorvalor">Menor valor</option>
                        <option value="maiorvalor">Maior valor</option>
                        <option value="titulo">Título</option>
                        <option value="prazo">Prazo</option>
                    </select>
                </Filtro>
                <CardBody>
                   
                 {this.state.tela === "cards" ? produtosRenderizados : <SaibaMais detalhes={this.state.detalhedocard} />}

                    
                </CardBody>

            </CorDeFundo>
        ))
    }
};