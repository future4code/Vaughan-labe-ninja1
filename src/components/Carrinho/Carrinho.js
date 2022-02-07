import React from "react";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;  
`
const CartContent = styled.div`
    display: flex;
    box-shadow: 0px 0px 4px gray;
    width: 85%;
    padding: 2px 5px;
    margin: 3px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    >button{
        cursor:pointer;
        height: 20%;
        background: none;
        border: none;
        color: #7763BF;
        font-size: 25px;

        &:hover{
            color: #A89AD9;
        }
    }

    >p{
        font-size:20px;
        margin-left:10px;
    }
`

const CartBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`

const ButtonDiv = styled.div`
    display: flex;
    >button{
        border-radius:15px;	
	    cursor:pointer;
        margin:10px;
	    font-size:15px;
	    padding:6px 20px;
	    background-color:#7763BF;
	    color: white;
	    border: none;
        
        &:hover{
            transition: 400ms;
	        background-color:#A89AD9;
        }
    }
`

const CarrinhoContainer = styled.div`
    margin: 10px;
    width: 50%;
    min-height:80vh;
    box-shadow: 0px 0px 4px gray;
    justify-content:space-between;
    display: flex;
    flex-direction: column;
    align-items:center; 
`

const FooterDiv = styled.div`
text-align: center;
margin: 10px;
`

export default class Carrinho extends React.Component{

    pegarValorTotal = () => {
        let valorTotal = 0
        for (let produto of this.props.carrinho) {
            valorTotal += produto.price
        }
        return valorTotal
        
    }
    render(){
        return(    
            <CartBody>
                <CarrinhoContainer>
                <h2>Carrinho:</h2>
                <Container>                  
                {this.props.carrinho.map((produto) => {                    
                    return (
                        <CartContent key={produto.title}>
                            <p><b>{produto.title}</b></p>
                            <button onClick={() => this.props.tirarItemCarrinho(produto.id)} type="submit">
                                X
                            </button>
                        </CartContent>
                    )
                })}
                </Container>
                
                <FooterDiv>
                <h3>Valor Total: R${this.pegarValorTotal()},00</h3>
                <ButtonDiv>                
                <button onClick={this.props.limparCarrinho}>Finalizar Compra</button>
                <button onClick={this.props.telaCard}>Voltar para a lista de serviços </button>
                </ButtonDiv>
                </FooterDiv>
                
                
                
                </CarrinhoContainer>               
                
            </CartBody>
        )
    }        
        
    
}