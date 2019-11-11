import React from "react";
import Filho from "./Filho";

export default (props) =>{

    let lugarDesaida = "Nenhum";

    const NotificarSaida = (lugar) =>{
        
        lugarDesaida = lugar;

        return (
        alert( `liberado para ${lugar}`)
        )

    }
    NotificarSaida("Marte")
    return(
        <>
        {lugarDesaida}
            <Filho AvisarPai={NotificarSaida}></Filho>
        </>
    )
}