import { Center } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";


const Detalhes = styled.div`
    background-color: #A89AD9;
    color: white;
    position: absolute;
    top:40%;
    left: 30%;
    right: auto;
    padding: 40px;
    width: 40%;
    height: 20%;
    display: flex;
    justify-content:space-between;
    border: none;
    box-shadow:0px 0px 2px #404040;
    align-items:center;

    >button{
        height: 6%;
        background: none;
        border: none;
        color: white;
        font-size:30px;
        cursor:pointer;
        
        &:hover{
            transition: 400ms;
            color: #7660A6;
        }
    }
`


export default class ModalDetalhes extends React.Component {


    render() {
        if(!this.props.showDetails){
            return null;
        }

        const renderDetalhes = this.props.detalhesCard.map((info) =>{
            return (
                <div>
                    <h2><b>{info.title}</b></h2> 
                    <h3><i>{info.description}</i></h3>

                    <p><i>                        
                        <b>Preço:</b> R${info.price},00<br/>
                        <b>Prazo:</b> {info.dueDate.slice(0, 10).split("-").reverse().join("/")}
                    </i></p> 
                    
                </div>
            )
        })
        
        return (
            <Detalhes>
                <div>
                  {renderDetalhes}
                </div>
                
                <button onClick={() => this.props.closeModal()}>X</button>           
            </Detalhes>  
        )    
    }
}