import React from "react";
import styled from "styled-components";
import Logo2 from './imagens-home/labeninja-logo.png'
import ProcNinja from './imagens-home/browsing.jpg'
import BecoNinja from './imagens-home/become-ninja.png'

const CorDeFundo = styled.div`
height: 100% ;
`
const BotaoHome = styled.button`
	cursor:pointer;
    border-radius:15px;	
	font-size:19px;
	padding:6px 24px;
	text-decoration:none;
	background-color:#7763BF;
	color: white;
	border: none;
	
    &:hover {
	transition:500ms;
	background-color:#A89AD9;
    }
`

const BodyProcurarNinja = styled.div`
    margin-top: 50px;
    width:100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    background-color:#A89AD9;
    
    >img{
        height: 400px;
        width: 50%;
        object-fit: cover;
    }

`
const TextoProcurar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;   
    text-align:center; 
    >p{
        font-size:19px;
    }

`

const BodySerNinja = styled.div`
    margin-top: 50px;
    width:100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    background-color:#A89AD9;
    
    >img{
        height: 400px;
        width: 50%;
        object-fit: cover;
    }

`

const LabeNinjas = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items:center;
    img{
        padding: 30px;
        height: 100%;
        width: auto;
    }    
`


export default class Home extends React.Component {
    render() {
        console.log('home', this.props)
        return (
            <CorDeFundo>
                <BodyProcurarNinja>
                    <img src={ProcNinja} alt=""/>
                    <TextoProcurar>
                    <h1>Os melhores profissionais à um clique de distância</h1>
                    <p>
                        A LabeNinjas é uma plataforma no qual os mais diversos profissionais,<br/>
                        das mais diversas áreas e regiões são facilmente encontrados,<br/>
                        tudo de uma jeito rápido e preciso como um  verdadeiro ninja!
                    </p>
                    <BotaoHome onClick={this.props.telaCard}>Contratar um LabeNinja</BotaoHome> 
                    </TextoProcurar>
                    
                    
                </BodyProcurarNinja>

                <BodySerNinja>
                <TextoProcurar>
                    <h1>Aumente o seu alcance profissional</h1>
                    <p>
                        Se você quer aumentar ainda mais o seu alcance e conseguir mais clientes<br/>
                        para seu serviço. Torne-se um ninja, venha fazer parte da LabeNinjas!
                    </p>
                    <BotaoHome onClick={this.props.cadastro}>Quero ser LabeNinja</BotaoHome>
                    </TextoProcurar>
                     
                    <img src={BecoNinja} alt=""/>                    
                </BodySerNinja>
                    
                <LabeNinjas>
                    <img src={Logo2} alt=""/>
                </LabeNinjas>
                                                
           </CorDeFundo>
        )
    }
}