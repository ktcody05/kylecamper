import React, {Component} from 'react'

class Temp extends Component {

    constructor(props){
        super(props)

        console.log("temp", props.temp)
        this.state = {
            isFarenheit: true,
            limitTempCelsius: 26
        }
    }
    handleToggleFarenheit = () => {
        this.setState({
            isFarenheit: !this.state.isFarenheit
        })
      }

    render(){

        let displayTemp = this.props.temp + "°C"
        if(this.state.isFarenheit){
            displayTemp=(this.props.temp * 9 / 5 + 32).toFixed(1).toString()+"°F"
        }

        let limitStyle
        if(this.state.temp > this.state.limitTempCelsius )
            limitStyle = "red"

        return(
            <div className="columns">
                <div className="column is-4" style={{color: limitStyle}}>Temperature: {displayTemp}</div>
                <div className="column">
                     <button className="button" onClick={()=>this.handleToggleFarenheit()}>Toggle F/C</button>
                </div>
            </div>
        )
    }
}

export default Temp