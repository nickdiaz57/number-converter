import React, { Component } from 'react'

export default class Form extends Component {
    
    state = {
        number: "",
        inputType: "",
        outputType: "",
        result: ""
    }

    selectInput = (e) => {
        this.setState({inputType: e.target.value})
    }

    selectOutput = (e) => {
        this.setState({outputType: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.determineConversion()
        this.setState({number: ""})
    }

    determineConversion = () => {
        switch (this.state.inputType) {
            case 'decimal':
                this.setState({result: this.decimalConversions(this.state.number)})
                break;
            case 'binary':
                this.setState({result: this.binaryConversions(this.state.number)})
                break;
            case 'hexadecimal':
                this.setState({result: this.hexConversions(this.state.number)})
                break;
            default:
                return
        }
    }

    decimalConversions = (num) => {
        switch (this.state.outputType){
            case 'binary':
                return parseInt(num).toString(2)
            case 'hexadecimal':
                return parseInt(num).toString(16)
            default:
                return num
        }
    }

    binaryConversions = (num) => {
        switch (this.state.outputType){
            case 'decimal':
                //convert binary to decimal
                break;
            case 'hexadecimal':
                //convert binary to hex
                break;
            default:
                return num
        }
    }

    hexConversions = (num) => {
        switch (this.state.outputType){
            case 'decimal':
                //convert hex to decimal
                break;
            case 'binary':
                //convert hex to binary
                break;
            default:
                return num
        }
    }

    render() {
        return(
            <>
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
            <div className='result'>
                <p><b>Result:  </b>{this.state.result}</p>
                <button name='reset' onClick={() => this.setState({number: '', inputType: '', outputType: '', result: ''})}>Reset All</button>
            </div>
            </>
        )
    }
}