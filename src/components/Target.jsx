import React, { Component } from 'react'
import TemperatureDisplay from './TemperatureDisplay'

class Target extends Component {

    constructor(props) {
        super(props)

        this.state = {
            targetTemp: props.targetTemp,
            requestedTemp: props.targetTemp
        }
    }

    handleIncrease() {
        let amount = this.props.isFarenheit ? (5 / 9) : 1
        let newTemp = parseFloat(this.state.requestedTemp) + amount
        this.requestTarget(newTemp)
        this.setState({ requestedTemp: newTemp })
    }

    handleDecrease() {
        let amount = this.props.isFarenheit ? (5 / 9) : 1
        let newTemp = parseFloat(this.state.requestedTemp) - amount
        this.requestTarget(newTemp)
        this.setState({ requestedTemp: newTemp })
    }

    async requestTarget(newTemp) {
        console.log(newTemp)
        let response = await fetch(`https://camperserver.herokuapp.com/targetTemp?targetTemp=${newTemp}&key=${this.props.password}`, {
            method: 'POST',
            mode: 'no-cors'
        })
        console.log(response)
    }

    render() {
        let isHidden = this.props.hidden ? 'is-hidden' : ''
        return (
            <div className="columns is-mobile">
                <div className="column is-one-third has-text-weight-bold" > Target Temperature</div>
                <div className="column is-one-third"><TemperatureDisplay isFarenheit={this.props.isFarenheit} temp={this.props.targetTemp} /></div>
                <div className={`column is-one-third ${isHidden}`}>
                    <button onClick={() => this.handleIncrease()} className={`button`}>➕</button>
                    <TemperatureDisplay temp= {this.state.requestedTemp} isFarenheit={this.props.isFarenheit} />
                    <button onClick={() => this.handleDecrease()} className={`button`}>➖</button>
                </div>
            </div>
        )
    }
}

export default Target