import React from "react";
import styled from "styled-components";
import ButtonHome from "./ButtonHome";

 const Home1 =  styled.h1`
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


export default class Home extends React.Component{
    render(){
        return(
           <div>
               <Home1>LabeNinjas</Home1>
               <Home2>O talento certo no momento certo</Home2>
               <ButtonHome/>
           </div>
        )
    }
}