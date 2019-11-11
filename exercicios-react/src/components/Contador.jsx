import React, {Component} from "react";

export default class Contador extends Component {

        state = {
            numero: this.props.numeroInicial
        }

        MaisUm = (valor) =>{
            this.alterar(valor)
        }

        MenosUm = (valor) =>{
            this.alterar(valor)
        }

        MaisDez = () =>{
            this.alterar(10)
        }

        MenosDez = () =>{
            this.alterar(-10)
        }

        alterar = (alteracao) =>{
            let newValor = this.state.numero + alteracao;

            this.setState({numero: newValor});
        }
         
        
        render(){
            return(
                <>
                <h1>Contador</h1>
                <h3>{this.state.numero}</h3>
                <button onClick={() => this.MaisUm(1)}>Incrementar +1</button>
                <button onClick={() => { this.MenosUm(-1)}}>Decrementar -1</button>

                <button onClick={this.MaisDez}>Incrementar +10</button>
                <button onClick={this.MenosDez}>Decrementar -10</button>

                </>
            )
        }
    
}