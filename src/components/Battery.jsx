import React, {Component} from 'react'

class Battery extends Component {

    constructor(props){
        super(props)

        this.state = {
            onBattery: props.onBattery,
        }
    }
    
    render(){

        return(
            <div className="columns">
                <div className="column is-4" > Power Source: </div>
                <div className="column">
                    {this.state.onBattery}
                </div>
            </div>
        )
    }
}

export default Battery