import { Checkbox, List, useCheckbox } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
const Container=styled.div`
    width:450px;
    height:600px;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const CorDeFundo = styled.div`
background-color: #fdf6e6;
height: 2fr;
display: grid;
`
const Input=styled.input`
    width:300px;
    margin:15px 0px;
`;
const Select=styled.select`
    width:310px;
    margin:15px 0px;
`;
const Button= styled.button`
    margin-top:25px;
    box-shadow:inset 0px 1px 0px 0px #FCE2C1;
    background:linear-gradient(to bottom, #FFC477 5%, #F6AF56 100%);
    background-color:#ffc477;
    border-radius:6px;
    border:1px solid #EEB44F;
    display:inline-block;
    cursor:pointer;
    color: #191817;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #CC9F52;
    &:hover {
    background:linear-gradient(to bottom, #F6AF56 5%, #FFC477 100%);
    background-color:#F6AF56;}
    &:active {
    position:relative;
    top:1px;
    }
`;
export default class CadastroDeServico extends React.Component{
    state = {
        inputTitulo:"",
        inputDescricao:"",
        inputPreco:"",
        selectPagamento:"",
        inputData:"",
    }
    onChangeInputTitulo= event => {
        this.setState({inputTitulo:event.target.value})
    }
    onChangeInputDescricao= event => {
        this.setState({inputDescricao:event.target.value})
    }
    onChangeInputPreco= event => {
        this.setState({inputPreco:event.target.value})
    }
    onChangeSelectPagamento= event => {
        this.setState({selectPagamento:event.target.value})
    }
    onChangeInputData= event => {
        this.setState({inputData:event.target.value})
    }
    cadastrarServicos= () => {
        const data= new Date();
        const ano= data.getFullYear();
        const mes= data.getMonth() + 1;
        const dia= data.getDate();
        const [inputDataAno, inputDataMes, inputDataDia] = this.state.inputData.split("-")
        if(this.state.inputTitulo === "" || this.state.inputDescricao === "" ||this.state.inputPreco === "" || this.state.selectPagamento === ""||this.state.inputData === ""){
            alert("Preencha os campos corretamente")
            return;
        };
        if(inputDataAno < ano || inputDataMes < mes || inputDataDia < dia){
            alert("Preencha com uma data válida")
            return;
        }
        alert("Serviço Cadastrado corretamente")
    }
    render(){
        return(
          <CorDeFundo>
                <Container>
                    <h1>Cadastre o seu serviço</h1>
                    <Input value={this.state.inputTitulo} onChange={this.onChangeInputTitulo} placeholder="Título"/>
                    <Input value={this.state.inputDescricao} onChange={this.onChangeInputDescricao} placeholder="Descrição"/>
                    <Input value={this.state.inputPreco} onChange={this.onChangeInputPreco} placeholder="Preço" type="number"/>
                    <fieldset value={this.state.selectPagamento} onChange={this.onChangeSelectPagamento} placeholder="Formas de Pagamento" >
                        <div><label> <strong> Formas de Pagamento</strong></label></div>
                        <div><input type="checkbox" id="debito" value="debito" ></input><label> Cartão de Débito</label></div>
                        <div><input type="checkbox"id="credito" value="credito" ></input><label> Cartão de Crédito</label></div>
                        <div><input type="checkbox" id="paypal" value="paypal" ></input><label> PayPal</label></div>
                        <div><input type="checkbox" id="boleto" value="boleto" ></input><label> Boleto</label></div>
                       <div> <input type="checkbox" id="pix" value="pix" ></input><label> Pix</label></div>
                    </fieldset>
                    <Input value={this.state.inputData} onChange={this.onChangeInputData} type="date"/>
                    <Button onClick={this.cadastrarServicos}>Cadastrar Serviços</Button>
                </Container>
          </CorDeFundo>
        )
    }
}