import React from "react"
import Grid from "../template/grid"
import IconButton from "../template/iconButton"

const TodoForm = props => {

    const keyHandle = (e) =>{
        if(e.key === "Enter"){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === "Escape"){
            props.handleListDefault()
        }
    }

    return (
        <div role="form" className="todoForm"> 
            <Grid cols="12 9 10"> 
                <input 
                    type="text" id="description" className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandle}
                />
    
                {props.description}
            </Grid>
    
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus"
                    onClick={props.handleAdd}
                 ></IconButton>
    
                <IconButton style="info" icon="search"
                    onClick={props.handleSearch}
                ></IconButton>
    
                <IconButton style="default" icon="close"
                    onClick={props.handleListDefault}
                    hide={!props.search}
                    
                ></IconButton>
            </Grid>
        </div>
    )
}

export default TodoForm