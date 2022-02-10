import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Cards } from "./CardsEstilos";

const CardBody = styled.div`
padding: 20px;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
`
const Filtro = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    gap: 10px;

    >input{
        border-radius:13px;
        padding: 5px;
        border: 3px solid #A89AD9;
    }

    >select{
        border-radius:13px;
        padding: 5px 15px;
        border: 3px solid #A89AD9;
        cursor: pointer;
    }
`

export default class Card extends React.Component {

    state = {
        cards: [],
        ordenacao: "ordenacao",
        Vminimo: "",
        Vmaximo: '',
        PorNome: '',
        tela: "cards",
    }

	telaCard = () => {
		this.setState({ tela: "cards" })
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
                    case "titulo":
                            const itemA= objA.title.toLowerCase();
                            const itemB= objB.title.toLowerCase();
                        
                            if (itemA > itemB) {
                                return 1;
                            }
                            if (itemA < itemB) {
                                return -1;
                            }
                            return 0;                            
                    case "prazo":
                            if (objA.dueDate > objB.dueDate) {
                                return 1;
                            }
                            if (objA.dueDate < objB.dueDate) {
                                return -1;
                            }
                            return 0;
                    default:                        
                }
            })
            .map(obj => {
                return (
                   
                    <div>
                        <Cards key={obj.id}>
                            <h2>{obj.title}</h2>
                            <div>
                                <p>
                                    <b>Valor:</b> R${obj.price},00<br/>
                                    <b>Prazo:</b> {obj.dueDate.slice(0, 10).split("-").reverse().join("/")}
                                </p>                                 
                            </div>
                            
                            <button onClick={() => {this.props.getDetalhes(obj); this.props.showModal()}}>Ver detalhes</button>
                            <button onClick={() => this.props.adicionarAoCarrinho(obj)}>Adicionar ao carrinho</button>                            
                        </Cards>
                    </div>
                  
                )
            })


        return ((

            <div>
                <Filtro>
                <input size={50} placeholder="Título" value={this.state.PorNome} type="text" onChange={this.onChangePorNome} ></input>                    
                    <input placeholder="Valor mínimo" value={this.state.Vminimo} type="number" onChange={this.onChangeValorMinimo}></input>
                    <input placeholder="Valor máximo" value={this.state.Vmaximo} type="number" onChange={this.onChangeValorMaximo}></input>
                    
                    
                    <select onChange={this.onchangeOrdenacao} name="select" value={this.state.ordenacao}>
                        <option value="ordenacao">Sem ordenação</option>
                        <option value="menorvalor">Menor valor</option>
                        <option value="maiorvalor">Maior valor</option>
                        <option value="titulo">Título</option>
                        <option value="prazo">Prazo</option>
                    </select>
                </Filtro>
                
                <CardBody>                   
                 {produtosRenderizados}
                </CardBody>

            </div>
        ))
    }
};