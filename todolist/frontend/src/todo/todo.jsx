import React, {Component} from "react"
import axios from "axios"

import PageHeader from "../template/page-header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = {
             description: "",
             list: [],
             search: false
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPedding = this.handleMarkAsPedding.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleListDefault =  this.handleListDefault.bind(this)


        // this.refrsh = this.refrsh.bind(this)

        this.refrsh()  

    }

    refrsh(description = ""){

        console.log(description)
        const search = description ? `&description__regex=/${description}/`: ""
       
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp =>{
           this.setState({description: description, list: resp.data})
        })
    }

    handleSearch(){
        this.refrsh(this.state.description)

        if(this.state.description !== ""){
            this.setState({...this.state, search: true})
        }
    }

    handleAdd(){
        const description = this.state.description;
        axios.post(URL, { description: description }).then( res =>{
            console.log("Adncionado")
            this.refrsh()
        } )
    }

    handleListDefault(){
        this.refrsh("")
        this.setState({...this.state, search: false})
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(res =>(
            this.refrsh(this.state.description)
        ))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then( resp =>(
            this.refrsh(this.state.description)
        ))
    }

    handleMarkAsPedding(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then( resp =>(
            this.refrsh(this.state.description)
        ))
    }


    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="cadastro"></PageHeader>
                <TodoForm handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleListDefault={this.handleListDefault}
                    search={this.state.search}
                    />

                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPedding={this.handleMarkAsPedding} />

            </div>
        )
    }
}