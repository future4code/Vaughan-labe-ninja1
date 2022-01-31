import React from 'react'

import styled from 'styled-components'
import Home from './components/Home/Home'

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
	render() {
	return (
		<div>
			<Header>
				<h1>Labeninjas</h1>
				<div>
					<button>Home</button>
					<button>Carrinho</button>
				</div>
			</Header>
			<Home/>
			<Footer>
				<h2>Central de atendimento</h2>
				<p>+55 (11) 1111-1111</p>
				<p>secretaria.labeninjas@org.br</p>
			</Footer>
        	
		</div>
	)}
}

export default App
