import React, {Component} from 'react'

class Battery extends Component {

    constructor(props){
        super(props)

        this.state = {
            onBattery: props.onBattery,
        }
    }
    
    render(){

        let powerSource = this.props.onBattery === "True" ? "Battery" : "AC Outlet"
        return(
            <div className="columns">
                <div className="column is-4" > Power Source: </div>
                <div className="column">
                    {powerSource}
                </div>
            </div>
        )
    }
}

export default Battery