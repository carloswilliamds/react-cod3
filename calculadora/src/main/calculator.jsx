import React, { Component } from "react"
import "./calculator.css"
import Button from "../components/Button"
import Display from "../components/Display"

export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(suamae){
        console.log('Limpar', suamae);
    }

    setOperation(operation){
        console.log(operation);
    }

    addDigit(n){
        console.log(n); 
    }
    render(){
        return(
           <div className="calculator">
               <Display value="100"></Display>
                <Button label="AC" click={this.clearMemory} triple></Button>
                <Button label="/" click={this.setOperation} operation></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>
           </div>
        )
    }
}