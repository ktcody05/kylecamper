import React, {Component} from 'react'
import TemperatureDisplay from './TemperatureDisplay'

class ToggleFC extends Component {

    constructor(){
        super()

    }

    render(){
        return(
            <button className="button" onClick={this.props.handleToggle}>Toggle F/C</button>
        )
    }
}

export default ToggleFC