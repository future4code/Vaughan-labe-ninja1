import React from 'react'
import styled from 'styled-components'
import Home from './components/Home/Home'
import Carrinho from './components/Carrinho/Carrinho';
import Card from './components/Cards/Card';
import CadastroDeServico from './components/Cadastro/CadastroDeServico'
import {BotaoCentro} from "./components/Home/ButtonHome"
import ModalDetalhes from './components/ModalDetalhes';
import WhiteLogo from './components/Imagens/white-labeninja-logo.png'


const MainBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color:#7660A6;
	padding: 10px;
	color: white;
	height:50px;
	 ;
`
const CorDeFundo = styled.div`
background-color:#f5f5fc;
min-height:79vh;
`
const Footer = styled.footer`
    background-color: #7660A6;
	text-align: center;
	color:white;   
	width: 100%;	
`
const Labeninjas = styled.a`
	display: flex;
	align-items:center;
	font-size: 30px;
	font-weight: bold;
	cursor: pointer;
	>img{
		height: 45px;
		margin-right: 5px;
	}
`

class App extends React.Component {

	state = {
		tela: "home",
		card:[],
    	carrinho:[],
		detalhesCard:[],
		showDetails: false
	}

	adicionarAoCarrinho = (servico) => {
		const novoCarrinho = [...this.state.carrinho, servico]
		this.setState({carrinho: novoCarrinho})
		alert(`${servico.title} adicionado ao carrinho!`)
	}

	tirarItemCarrinho = (id) => {
		let produto = this.state.carrinho.filter((servico) => {
            return  servico.id === id
         })[0]
        const indiceCarrinho = this.state.carrinho.indexOf(produto)
        const arrayNovoCarrinho = [...this.state.carrinho]
		arrayNovoCarrinho.splice(indiceCarrinho, 1)
        this.setState({carrinho: arrayNovoCarrinho})
	}

	limparCarrinho = () => {
		this.setState({cart: []})
		this.setState({ tela: "carrinho" })
		alert('Compra Finalizada!')		
	}

	getDetalhes = (details) => {
			const servicoDetalhos = [details]
            this.setState({ detalhesCard: servicoDetalhos})
	}

	showModal = e => {
		this.setState({ showDetails :true })
	}

	closeModal = e => {
		this.setState({ showDetails: false })
	}

	mudarTela = () => {
		console.log(this.state.tela)
		switch (this.state.tela) {
			case "app":
				return <Home cadastro={this.telaCadastro} telaCard={this.telaCard} />
			case "carrinho":
				return <Carrinho telaCard={this.telaCard} carrinho={this.state.carrinho} tirarItemCarrinho={this.tirarItemCarrinho} limparCarrinho={this.limparCarrinho}/>
			case "cadastro":
				return <CadastroDeServico />
			case "cards":
				return <Card carrinho={this.state.carrinho} adicionarAoCarrinho={this.adicionarAoCarrinho} getDetalhes={this.getDetalhes} showModal={this.showModal}/>
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


			<MainBody>

				<Header>
					<Labeninjas onClick={() => this.telaHome()}>
						<img src={WhiteLogo} alt=""/>
						LabeNinjas
					</Labeninjas>
					<div>
						<BotaoCentro onClick={this.telaHome}>Home</BotaoCentro>
						<BotaoCentro onClick={this.telaCard}>Produtos</BotaoCentro>
						<BotaoCentro onClick={this.telaCadastro}>Cadastrar</BotaoCentro>
						<BotaoCentro onClick={this.telaCarrinho}>Carrinho</BotaoCentro>
					</div>
				</Header>
				
				<ModalDetalhes 
				detalhesCard={this.state.detalhesCard}
				showDetails={this.state.showDetails}
				closeModal= {this.closeModal}/>
												

				<CorDeFundo>
					{this.mudarTela()}
				</CorDeFundo>

				<Footer>
					<h2>Central de atendimento</h2>
					<p>+55 (11) 1111-1111</p>
					<p>secretaria.labeninjas@org.br</p>

				</Footer>

			</MainBody>


		);
	}
}


export default App