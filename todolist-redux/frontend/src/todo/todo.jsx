import React from "react"

import PageHeader from "../template/page-header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://localhost:3050/api/todos"

export default props => {

        return(
            <div>
                <PageHeader name="Tarefas" small="React + Redux"></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )

}