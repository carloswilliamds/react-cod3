import React from "react";


export default (props) =>{

    const pessoas = ["Ana", "Joao", "Gabriel", "Maria"];
    const marcas = ["Nike", "Adidas", "Bobs", "Milka"];

    const gerarItens = itens =>{
        return(
            itens.map((item)=>{
                return <li key={Math.random()}>{item}</li>
               })
        )
    }

    return(
        <ul>
           {gerarItens(marcas)}
        </ul>
    )
}

// export default function(){

// }