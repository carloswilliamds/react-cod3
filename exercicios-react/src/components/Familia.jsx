import React from  "react";
import Membro from "./Membro"
import {ParentToChild} from "./utils"

export default function(props){
    // console.log({...props})
    console.log(props.children)
    return(
      <>
        <Membro nome="Ricardo" sobrenome={props.sobrenome}></Membro>
        {ParentToChild(props)}
        {/* {React.Children.map(props.children, child =>{
           return React.cloneElement(child, {...props});
        })} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
      </>
    )
}