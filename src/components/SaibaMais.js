import Cards from "./Cards/Card";
import React from "react";



export default class SaibaMais extends React.Component {


    render() {
        
        return (
            <div>
                
                <h3>Título:</h3> {this.props.detalhes.title}
                <h3>Descrição:</h3> {this.props.detalhes.description}
                <h3>Data:</h3> {this.props.detalhes.dueDate}
                <h3>Preço:</h3> {this.props.detalhes.price}
                
            </div>
        )

    
    }
}