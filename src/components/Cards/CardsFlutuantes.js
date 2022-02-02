import styled from "styled-components";
import React from "react";


const PostIt = styled.div`
width:150px; 
height:75px;
padding:20px;
font-family: "Lucida Handwriting", cursive;
font-size:20px;
box-shadow: 4px 6px 6px #444;
-moz-box-shadow: 4px 6px 6px #444;
-webkit-box-shadow: 4px 6px 6px #444;
gap: 10px;
display: flex;
justify-content: space-around;
background:#F0DF86;
text-align: center;
align-items: center;
border-radius: 10px 25px 10px  ;

`

export default class CardsFlutuantes extends React.Component {
    render() {
        return (
            <>
                <PostIt>Aulas</PostIt>
                <PostIt>Reforma e Reparos</PostIt>
                <PostIt>Eventos</PostIt>
                <PostIt>Assistência Técnica</PostIt>
                <PostIt>Serviços Domésticos</PostIt>
                <PostIt>Autos</PostIt>
                <PostIt>Eventos</PostIt>



            </>
        )
    }

}