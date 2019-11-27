import React from "react"
import IconButton from "../template/iconButton"
import { connect } from "react-redux"
import { bindActionCreators} from "redux"
import {markAsDone, markAsPadding, remove} from "./todoActions"

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
                            onClick={() => props.markAsDone(todo)}
                            hide={todo.done}
                        ></IconButton>

                        <IconButton 
                            style="warning" icon="undo"
                            onClick={() => props.markAsPadding(todo)}
                            hide={!todo.done}
                        ></IconButton>
                       
                        <IconButton 
                            style="danger" icon="trash-o"
                            onClick={() => props.remove(todo)}
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

const mapStateToProps = state => ({list: state.todo.list})

const mapDispatchToProps = dispatch => (
    bindActionCreators({markAsDone, markAsPadding, remove}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)