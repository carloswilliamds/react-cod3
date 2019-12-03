import React, { Component } from "react"
import "./calculator.css"
import Button from "../components/Button"
import Display from "../components/Display"

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    state = {...initialState}



    clearMemory(suamae){
        console.log('Limpar', suamae);
        this.setState({...initialState})

    }

    setOperation(operation){
        console.log(operation);
        if(this.state.current === 0){
           this.setState({operation: operation, current: 1, clearDisplay: true})
        } else{
            const finish = operation === "=";
            const currentOperation = this.state.operation
            const values =[...this.state.values]
            
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                values[1] = 0;
            } catch(e){
                console.log(e)
                values[0] = this.state.values[0]
            }
            
            this.setState({displayValue: values[0], 
                           operation: finish ? null : operation,
                           current: finish ? 0 : 1,
                           clearDisplay: !finish,
                           values: values
             })

        }
    }

    addDigit(n){
        let nToString = this.state.displayValue.toString()

        if(n === "." && nToString.includes(".")){
            return
        }

        const clearDisplay = this.state.displayValue === "0"
            || this.state.clearDisplay

        const currentValue = clearDisplay ? "" : this.state.displayValue

        const displayValue = currentValue + n;

        this.setState({displayValue: displayValue, clearDisplay: false})

        if(n !== "."){
            const i = this.state.current;
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue;
            console.log(values)
            this.setState({values: values})
        }

    }

    render(){
        return(
           <div className="calculator">
               <Display value={this.state.displayValue}></Display>
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