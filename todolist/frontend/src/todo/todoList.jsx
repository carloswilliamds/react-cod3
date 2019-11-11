import React from "react"
import IconButton from "../template/iconButton"
const TodoList = props =>{ 


    const renderRows = () =>{

        const list = props.list || []

        return list.map(todo => {
            return(
                <tr key={todo._id}>
                    <td className={todo.done ? "markedAsDone" : "" }>{todo.description}</td>
                    <td>
                        <IconButton 
                            style="success" icon="check"
                            onClick={() => props.handleMarkAsDone(todo)}
                            hide={todo.done}
                        ></IconButton>

                        <IconButton 
                            style="warning" icon="undo"
                            onClick={() => props.handleMarkAsPedding(todo)}
                            hide={!todo.done}
                        ></IconButton>
                       
                        <IconButton 
                            style="danger" icon="trash-o"
                            onClick={() => props.handleRemove(todo)}
                        ></IconButton>
                    </td>
                </tr>
            )
        })
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
 }

export default TodoList