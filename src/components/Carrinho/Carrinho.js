import React from "react";
import styled from 'styled-components';
import Card from "../Cards/Card";
import App from "../../App";

const Container = styled.div`
  border: 1px solid gray;
  width: 300px;
`

export default class Carrinho extends React.Component{

    state = {
        cards:[
            {   
                id: 1,
                titulo: "Aulas de Francês",
                preco:125,
                data:"04/01/2022",
                quantidade: 1
            },
            {
                id: 2,
                titulo: "Aulas de Sei Lá",
                preco:355,
                data:"06/02/2022",
                quantidade: 1
            },
            {
                id: 3,
                titulo: "Aulas de alguma coisa",
                preco:500,
                data:"14/03/2022",
                quantidade: 1
            },
            {
                id: 4,
                titulo: "Aulas de dfdgfdgdfgh",
                preco:500,
                data:"14/03/2022",
                quantidade: 1
            }
        ]
    }

    pegarValorTotal = () => {
        let valorTotal = 0
        for (let produto of this.state.cards) {
            valorTotal += produto.preco * produto.quantidade
        }
        return valorTotal
    }

    removerProduto = (id) => {
        let produto = this.state.cards.filter(produto => {
            return  produto.id === id
         })[0]
        const indiceCard = this.state.cards.indexOf(produto)
        const arrayNovoCard = [...this.state.cards]
           arrayNovoCard.splice(indiceCard, 1)
        this.setState({cards: arrayNovoCard})
    }

    alertaDeCompra = () => {
        alert("Compra Finalizada!")
    }
    render(){
        return(
            
            
            <div>
                
                <h1>Carrinho:</h1>
                
              <Container>
                  
                {this.state.cards.map((produto) => {
                    
                    return (
                        <div>
                            <p>Produto: {produto.titulo}</p>
                            <button onClick={() => this.removerProduto(produto.id)} type="submit">
                                Remover
                            </button>
                        </div>
                    )
                })}
                </Container>
                <h2>Valor Total: R$ {this.pegarValorTotal()} ,00</h2>
                <button onClick={this.alertaDeCompra}>Finalizar Compra</button>
                <button onClick={this.props.telaCard}>Voltar para a lista de serviços </button>
                
            </div>
        )
    }        
        
    
}