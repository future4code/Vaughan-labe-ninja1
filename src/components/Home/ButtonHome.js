import React from "react";
import styled from "styled-components";


const BotaoCentro = styled.button`

`
const Centralizar = styled.div`
display: flex;
justify-content: center;



`


export default class ButtonSerNinja extends React.Component{
    render(){
        return(
            <Centralizar>
                <BotaoCentro >Quero ser LabeNinja </BotaoCentro>
                <BotaoCentro > Contratar um LabeNinja  </BotaoCentro>
            </Centralizar>
        )
    }
}