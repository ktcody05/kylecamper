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
            <div className="columns is-mobile">
                <div className="column is-one-third has-text-weight-bold" >Power Source </div>
                <div className="column is-one-third">
                    {powerSource}
                </div>
            </div>
        )
    }
}

export default Battery