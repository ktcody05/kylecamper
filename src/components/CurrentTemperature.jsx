import React, {Component} from 'react'
import TemperatureDisplay from './TemperatureDisplay'
import ToggleFC from './ToggleFC'

class CurrentTemperature extends Component {

    constructor(props){
        super(props)

        console.log("temp", props.temp)

        this.state = {
            limitTempCelsius: 26,
            isFarenheit: props.isFarenheit        
        }
    }

    render(){
        return(
            <div className="columns">
                <div className="column is-one-quarter has-text-weight-bold">Temperature</div>
                <div className="column is-one-quarter"><TemperatureDisplay temp={this.props.temp} isFarenheit={this.props.isFarenheit} /></div>
                <div className="column is-one-quarter"><ToggleFC handleToggle={this.props.handleToggle} /></div>
            </div>
        )
    }
}

export default CurrentTemperature