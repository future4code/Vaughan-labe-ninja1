import React from "react";
import styled from "styled-components";
import ButtonHome from "./ButtonHome";
import PostIt from '../Cards/CardsFlutuantes'

const Home1 = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
`


const Home2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
`
const CorDeFundo = styled.div`
background-color: #fdf6e6;
height: 100% ;
`
const FlexPostIt = styled.div`
display: flex;
height: 189px ;
/* margin: 20px 0 20px; */
align-items: center;
justify-content: space-around;
`


export default class Home extends React.Component {
    render() {
        console.log('home', this.props)
        return (
            <CorDeFundo>

                <CorDeFundo>
                    <Home1>LabeNinjas</Home1>
                    <Home2>O talento certo no momento certo</Home2>
                    <ButtonHome telaCard={this.props.telaCard} />

                </CorDeFundo>
                <FlexPostIt><PostIt /></FlexPostIt>

            </CorDeFundo>



        )
    }
}