import React, { Component } from 'react'

export default class Form extends Component {
    
    state = {
        number: "",
        inputType: "",
        outputType: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({number: ""})
    }

    selectInput = (e) => {
        this.setState({inputType: e.target.value})
    }

    selectOutput = (e) => {
        this.setState({outputType: e.target.value})
    }

    convertDecimalToHex = () => {

    }

    convertDecimalToBinary = () => {
        
    }

    convertHexToBinary = () => {
        
    }

    convertHexToDecimal = () => {
        
    }

    convertBinaryToHex = () => {
        
    }

    convertBinaryToDecimal = () => {
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='inputButtons'>
                    <h3>Input Type</h3>
                    <label>
                        Decimal
                        <input type='radio' value='decimal' checked={this.state.inputType === 'decimal'} onChange={this.selectInput} />
                    </label>
                    <label>
                        Binary
                        <input type='radio' value='binary' checked={this.state.inputType === 'binary'} onChange={this.selectInput} />
                    </label>
                    <label>
                        Hexadecimal
                        <input type='radio' value='hexadecimal' checked={this.state.inputType === 'hexadecimal'} onChange={this.selectInput} />
                    </label>
                </div>
                <div className='form'>
                    <label htmlFor='number'>Enter Number:</label>
                    <input name='number' type='text' value={this.state.number} onChange={(e) => this.setState({number: e.target.value})}></input>
                    <button id='Submit' type='submit'>Submit</button>
                </div>
                <div className='outputButtons'>
                    <h3>Convert To</h3>
                    <label>
                        Decimal
                        <input type='radio' value='decimal' checked={this.state.outputType === 'decimal'} onChange={this.selectOutput} />
                    </label>
                    <label>
                        Binary
                        <input type='radio' value='binary' checked={this.state.outputType === 'binary'} onChange={this.selectOutput} />
                    </label>
                    <label>
                        Hexadecimal
                        <input type='radio' value='hexadecimal' checked={this.state.outputType === 'hexadecimal'} onChange={this.selectOutput} />
                    </label>
                </div>
            </form>
        )
    }
}