import React from "react"

import PageHeader from "../template/page-header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://localhost:3003/api/todos"

export default props => {

        return(
            <div>
                <PageHeader name="Tarefas" small="cadastro"></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )

}