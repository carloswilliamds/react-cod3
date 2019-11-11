import React from "react";

export default function(props){
    return(
        <>
            {props.nome}
            <strong> {props.sobrenome} {props.idade}</strong><br />
        </>
    )
}