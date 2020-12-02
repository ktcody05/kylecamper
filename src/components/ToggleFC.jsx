import React, {Component} from 'react'

class ToggleFC extends Component {


    render(){
        return(
            <button className="button" onClick={this.props.handleToggle}>Toggle F/C</button>
        )
    }
}

export default ToggleFC