import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  width: 300px;
`

export default class Carrinho extends React.Component{

    pegarValorTotal = () => {
        let valorTotal = 0
        for (let produto of this.props.carrinho) {
            valorTotal += produto.price
            console.log(this.props.carrinho)
        }
        return valorTotal
        
    }


    render(){
        return(    
            <div>                
                <h1>Carrinho:</h1>
              <Container>                  
                {this.props.carrinho.map((produto) => {                    
                    return (
                        <div key={produto.title}>
                            <p>Produto: {produto.title}</p>
                            <button onClick={() => this.props.tirarItemCarrinho(produto.id)} type="submit">
                                Remover
                            </button>
                        </div>
                    )
                })}
                </Container>
                <h2>Valor Total: R$ {this.pegarValorTotal()} ,00</h2>
                <button onClick={this.props.limparCarrinho}>Finalizar Compra</button>
                <button onClick={this.props.telaCard}>Voltar para a lista de serviços </button>
                
            </div>
        )
    }        
        
    
}