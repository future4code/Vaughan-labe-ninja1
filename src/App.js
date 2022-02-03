
import React from 'react'
// import Card from './components/Cards/Card';
import styled from 'styled-components'
import Home from './components/Home/Home'
import Carrinho from './components/Carrinho/Carrinho';
import { ChakraProvider, position } from '@chakra-ui/react';
import Card from './components/Cards/Card';
import { theme } from './components/Theme/Theme';
import PostIt from './components/Cards/CardsFlutuantes'
import CadastroDeServico from './components/Cadastro/CadastroDeServico'
import {BotaoCentro} from "./components/Home/ButtonHome"



const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items:center;
    background-color:#F6AF56;
	padding: 10px;
	border: solid 1px black;
	height:50px;
	 ;
`
const CorDeFundo = styled.div`
background-color: #fdf6e6;
height: 500px;
display: grid;
`
const Footer = styled.footer`
	
	bottom: 0;
	position: fixed ; 
	
    background-color: #F6AF56;
	text-align: center;
    padding: 3px;
	width: 100%;
	border: solid 1px black;
	
`
const Labeninjas = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:32px;


 `
// // const FlexPostIt = styled.div`
// // display: flex;
// // height: 189px ;
// // /* margin: 20px 0 20px; */
// // align-items: center;
// // justify-content: space-around;


// `

class App extends React.Component {

	state = {
		tela: ""
	}

	mudarTela = () => {
		console.log(this.state.tela)
		switch (this.state.tela) {
			case "app":
				return <Home cadastro={this.telaCadastro} telaCard={this.telaCard} />
			case "carrinho":
				return <Carrinho telaCard={this.telaCard} />
			case "cadastro":
				return <CadastroDeServico />
			case "cards":
				return <Card />
			default:
				return <Home cadastro={this.telaCadastro} telaCard={this.telaCard} />
		}

	}

	telaCard = () => {
		this.setState({ tela: "cards" })

	}

	telaHome = () => {
		this.setState({ tela: "app" })
	}
	telaCarrinho = () => {
		this.setState({ tela: "carrinho" })
	}
	telaCadastro = () => {
		this.setState({ tela: "cadastro" })
	}

	render() {

		return (


			<div>

				<Header>
					<Labeninjas>LabeNinjas</Labeninjas>
					<div>
						<BotaoCentro onClick={this.telaHome} >Home</BotaoCentro>
						<BotaoCentro onClick={this.telaCarrinho}>Carrinho</BotaoCentro>

					</div>
				</Header>

				<CorDeFundo>
					{this.mudarTela()}

				</CorDeFundo>

				{/* <FlexPostIt><PostIt /></FlexPostIt> */}
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

