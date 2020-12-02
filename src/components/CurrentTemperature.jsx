import React, {Component} from 'react'
import TemperatureDisplay from './TemperatureDisplay'

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
                <div className="column is-4">Temperature: <TemperatureDisplay temp={this.props.temp} isFarenheit={this.props.isFarenheit} /></div>
            </div>
        )
    }
}

export default CurrentTemperature