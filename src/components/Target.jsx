import React, { Component } from 'react'

class Target extends Component {

    constructor(props) {
        super(props)

        this.state = {
            targetTemp: props.targetTemp,
        }
    }

    async handleSubmit() {
        let targetTemp = document.getElementById('targetTemp').value
        let password = document.getElementById('password').value
        console.log(targetTemp)
        let response = await fetch(`http://localhost:5555/targetTemp?=${targetTemp}&key=${password}`, {
            method: 'POST',
            mode: 'cors'
        })
        console.log(response)
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-4" > Target Temp: {this.props.targetTemp} </div>
                <div><input id='targetTemp' className="input" type="text" placeholder="Target Temp" /></div>
                <div><input id='password' className="input" type="password" placeholder="Password" /></div>
                <button onClick={() => this.handleSubmit()} className='button'>Submit</button>
            </div>
        )
    }
}

export default Target