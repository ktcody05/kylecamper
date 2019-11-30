import React, {Component} from 'react'

class Temp extends Component {

    constructor(props){
        super(props)

        this.state = {
            temp: "27",
            isFarenheit: false,
            limitTemp: 26
        }
    }
    handleToggleFarenheit = () => {
        console.log('Click')
        this.setState({
            isFarenheit: !this.state.isFarenheit
        })
      }

    render(){

        let displayTemp = this.state.temp + "°C"
        if(this.state.isFarenheit){
            displayTemp=(this.state.temp * 9 / 5 + 32).toString()+"°F"
        }

        let limitStyle
        if(this.state.temp > this.state.limitTemp )
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