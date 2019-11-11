import React from "react"


const CompB = (props) =>{ 
    return(
        <React.Fragment>
        <h1>CompB Diz {props.valor}</h1>
        <h1>CompB Diz {props.valor}</h1>
        </React.Fragment>
        )
}


const CompA = (props) =>{
    return(
        <h1>CompA Diz {props.valor}</h1>
    )
}

export default CompA;
export {CompA, CompB}