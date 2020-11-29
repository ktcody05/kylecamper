import React,{Component} from 'react';
import './bulma.css';
import './App.css'
import Temp from './components/Temp'
import Battery from './components/Battery'

class App extends Component {

  constructor() {
    super()

    this.state={
      humidity:0,
      temperature:0
    }
  }


  componentDidMount() {

    let getData = async () => {

      let response = await fetch('https://camperserver.herokuapp.com/latest', {
        method: 'GET',
        mode: 'cors'
      })

      let data = await response.json()
      console.log("app", data.temp)
      this.setState({
        humidity: data.humidity,
        temperature: data.temp,
        onBattery: data.onBattery
      })

      console.log(data)
    }

    getData()
    setInterval(()=>getData(),3000)
  }

  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Camper Temperature
              </h1>
              <h2 className="subtitle">
                Current Camper Temperature:
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Temp temp={this.state.temperature} />
            <div>
              Relative Humidity: {this.state.humidity} %
            </div>
            <Battery onBattery={this.state.onBattery} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
