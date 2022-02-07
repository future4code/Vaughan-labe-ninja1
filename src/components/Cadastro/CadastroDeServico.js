import axios from "axios";
import React from "react";
import styled from "styled-components";

const ContainerCadastro = styled.div`
    margin: 10px;
    width: 50%;
    min-height:80vh;
    box-shadow: 0px 0px 4px gray;
    justify-content:space-between;
    display: flex;
    flex-direction: column;
    align-items:center; 
`;
const FundoCadastro = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`
const InputData=styled.input`
    width:100%;
    margin:15px 0px;
    padding: 5px;
    font-size:15px;
`;
const ButtonCadastro = styled.button`
    margin: 5%;
    padding: 10px 15px;
    font-size:18px;
    border-radius:18px;	
	cursor:pointer;
    margin-bottom:40px;
	background-color:#7763BF;
	color: white;
	border: none;
        
    &:hover{
        transition: 400ms;
	    background-color:#A89AD9;
    }
`;

const DivRegistro = styled.div`
display: flex;
flex-direction: column;
width: 30%;
align-items:center;
margin-bottom: -40px ;
    >input{
        margin-bottom: 20px;
        width: 100%;
        padding: 5px 10px;
        font-size:15px;
        border-radius:15px;
        background: white;
        border: none;
    }
`

const Fieldset = styled.fieldset`
text-align:center;
width: 30%;
border: none;
 >div>p{
     font-size:20px;
 }
`

const DivPagamento = styled.div`
    >label{
        user-select:none;
        cursor: pointer;
        margin: 3px;
        box-shadow: 0px 0px 2px gray;
        display: flex;
        padding: 0 8px;
        margin-bottom: 10px;
    }
    >label>input{
        margin-right:10px;
        cursor: pointer;       
    }
`
const CadastroFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 30%;
    >p{ 
        margin-bottom:-10px;
        font-size:18px;
    }
`

export default class CadastroDeServico extends React.Component{
    state = {
        servicos:[],
        inputTitulo:"",
        inputDescricao:"",
        inputPreco:"",
        selectPagamento:[],
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
        this.setState({selectPagamento:[...this.state.selectPagamento, event.target.value]})
    }
    onChangeInputData= event => {
        this.setState({inputData:event.target.value})
    }
    
    
    gerandoKey = async () => {
        const url = "https://labeninjas.herokuapp.com/auth"
        const body = {"name": "ninjaas-ninjasdalabenu"}

        try{
            const resposta = await axios.post(url, body)
            console.log(resposta.data)

        }catch(erro){
            console.log(erro.response)
            
            alert("Key errada")
        }
        
    }
    
    cadastrarServicos= async () => {
        const data= new Date();
        const ano= data.getFullYear();
        const mes= data.getMonth() + 1;
        const dia= data.getDate();
        const url = "https://labeninjas.herokuapp.com/jobs"
        const body = {"title": this.state.inputTitulo, "description": this.state.inputDescricao, "price": Number(this.state.inputPreco), "paymentMethods": this.state.selectPagamento, "dueDate": this.state.inputData}
        try{
            const resposta = await axios.post(url, body, {
                headers: {
                    Authorization: '9d13116d-4ff4-41b1-979f-9bf62ff1e99d'
                }
             })
             this.setState({servicos: resposta.data})
            alert("Serviço cadastrado com sucesso!!")
        }catch(erro){
            console.log(erro.response)
            alert("Ocorreu um erro, o serviço não foi cadastrado!")
        }

        const [inputDataAno, inputDataMes, inputDataDia] = this.state.inputData.split("-")
        if(this.state.inputTitulo === "" || this.state.inputDescricao === "" ||this.state.inputPreco === "" || this.state.selectPagamento === ""||this.state.inputData === ""){
            alert("Preencha os campos corretamente")
            return;
        };
        if(inputDataAno < ano || inputDataMes < mes || inputDataDia < dia){
            alert("Preencha com uma data válida")
            return;
        }
    }

    

    render(){
        return(
          <FundoCadastro>
                <ContainerCadastro>                    
                    <DivRegistro>
                        <h2>Cadastre o seu serviço</h2>
                        <input value={this.state.inputTitulo} onChange={this.onChangeInputTitulo} placeholder="Título"/>
                        <input value={this.state.inputDescricao} onChange={this.onChangeInputDescricao} placeholder="Descrição"/>
                        <input value={this.state.inputPreco} onChange={this.onChangeInputPreco} placeholder="Preço" type="number"/>
                    </DivRegistro>
                   
                    <Fieldset value={this.state.selectPagamento} onChange={this.onChangeSelectPagamento} placeholder="Formas de Pagamento" >
                        <h3> Formas de Pagamento</h3>
                        <DivPagamento><label><input type="checkbox" id="debito" value="debito"/>Cartão de Débito</label></DivPagamento>
                        <DivPagamento><label><input type="checkbox" id="credito" value="credito"/>Cartão de Crédito</label></DivPagamento>
                        <DivPagamento><label><input type="checkbox" id="paypal" value="paypal"/>PayPal</label></DivPagamento>
                        <DivPagamento><label><input type="checkbox" id="boleto" value="boleto"/>Boleto</label></DivPagamento>
                        <DivPagamento><label><input type="checkbox" id="pix" value="pix"/>Pix</label></DivPagamento>
                    </Fieldset>
                    
                    <CadastroFooter>
                        <p>Prazo:</p>
                        <InputData value={this.state.inputData} onChange={this.onChangeInputData} type="date"/>
                        <ButtonCadastro onClick={this.cadastrarServicos}>Cadastrar Serviços</ButtonCadastro>
                    </CadastroFooter>
                    
                </ContainerCadastro>
          </FundoCadastro>
        )
    }
}