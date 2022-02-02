import React from "react";
import styled from "styled-components";
import Ninja from "../Imagens/Ninja.png";
import Ninja2 from "../Imagens/Ninja2.png"


const BotaoCentro = styled.button`

	box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #ffc477 5%, #F6AF56 100%);
	background-color:#ffc477;
	border-radius:6px;
	border:1px solid #eeb44f;
	display:inline-block;
	cursor:pointer;
	color: #191817;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;

&:hover {
	background:linear-gradient(to bottom, #F6AF56 5%, #ffc477 100%);
	background-color:#F6AF56;}

&:active {
	position:relative;
	top:1px;
}


`
const Centralizar = styled.div`
display: flex;
justify-content: center;
gap:7px;

`
const ImagemNinja = styled.img`
height: 70px;
`



export default class ButtonSerNinja extends React.Component{
  
  
    render(){
        console.log('buttonhome',this.props)
        return(
            <Centralizar>
               
               <selection>
                   <ImagemNinja src={Ninja} ></ImagemNinja>
                    <BotaoCentro >Quero ser LabeNinja </BotaoCentro>
                    </selection>
                   
                  <selection>
                        
                        <BotaoCentro  onClick={this.props.telaCards} > Contratar um LabeNinja  </BotaoCentro>
                        <ImagemNinja src={Ninja} ></ImagemNinja>
                  </selection>
            </Centralizar>
        )
    }
}