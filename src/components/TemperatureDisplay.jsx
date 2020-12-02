import React, {Component} from 'react'

class TemperatureDisplay extends Component {

    constructor(props){
        super(props)

        this.state = {
            isFarenheit: props.isFarenheit
        }
    }

    render(){

        let displayTemp = parseFloat(this.props.temp).toFixed(2).toString()+ "°C"
        if(this.props.isFarenheit){
            displayTemp=(this.props.temp * 9 / 5 + 32).toFixed(1).toString()+"°F"
        }

        return(
            <span>{displayTemp}</span>
        )
    }
}

export default TemperatureDisplay