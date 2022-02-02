
import React from 'react'
// import Card from './components/Cards/Card';
import styled from 'styled-components'
import Home from './components/Home/Home'
import Carrinho from './components/Carrinho/Carrinho';
import { ChakraProvider } from '@chakra-ui/react';
import Card from './components/Cards/Card';


const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items:center;
    background-color: gray;
	padding: 10px;
	border: solid 1px black;
`
const Footer = styled.footer`
	
	bottom: 0;
	position: absolute;
    background-color: gray;
	text-align: center;
    padding: 3px;
	width: 100%;
	border: solid 1px black;
`

class App extends React.Component {

	state = {
		tela: "app"
	}
	
	mudarTela = () => {
		console.log(this.state.tela)
		switch (this.state.tela) {
			case "app":
				return <Home/>
			case "carrinho":
				return <Carrinho telaCard={this.telaCard}/>
			case "cards":
				return <Card/>
			default:
				return <Home/>
		}
            
    }

	telaCard = () => {
		this.setState({tela: "cards"})
	}

	telaHome = () => {
		this.setState({tela: "app"})
	}
	telaCarrinho = () => {
		this.setState({tela: "carrinho"})
	}
		render() {

			return (

				<div>
					<Header>
						<h1>Labeninjas</h1>
						<div>
							<button onClick={this.telaHome} >Home</button>
							<button onClick={this.telaCarrinho}>Carrinho</button>
						</div>
					</Header>
					{this.mudarTela()}
					<Footer>
						<h2>Central de atendimento</h2>
						<p>+55 (11) 1111-1111</p>
						<p>secretaria.labeninjas@org.br</p>
					</Footer>

				</div>


			);
		}
	}
	

export default App

