import React from "react";

export function ParentToChild(props){
    return(
        React.Children.map(props.children, child =>{
            return (
                React.cloneElement(child, {...props})
            )
        })
    )
}