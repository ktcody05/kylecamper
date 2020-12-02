import React,{Component} from 'react';
import './bulma.css';
import './App.css'
import CurrentTemperature from './components/CurrentTemperature'
import Battery from './components/Battery'
<<<<<<< HEAD
import ToggleFC from './components/ToggleFC';
=======
import Target from './components/Target'
>>>>>>> 7940a94e36dbe8665051bccc0b6187088f489ef6

class App extends Component {

  constructor() {
    super()

    this.state={
      humidity:0,
      temperature:0,
      isFarenheit: true
    }
  }


  componentDidMount() {

    let getData = async () => {

      let response = await fetch('https://camperserver.herokuapp.com/latest', {
        method: 'GET',
        mode: 'cors'
      })

      let targetTempResponse = await fetch('https://camperserver.herokuapp.com/targetTemp', {
        method: 'GET',
        mode: 'cors'
      })
      let targetTempData = await targetTempResponse.json()


      let data = await response.json()
      console.log("app", data.temp)
      this.setState({
        humidity: data.humidity,
        temperature: data.temp,
        onBattery: data.onBattery,
        targetTemp: targetTempData.value
      })

      console.log(data)
    }

    getData()
    setInterval(()=>getData(),3000)
  }

  ToggleFarenheit = () => {
    console.log('switch!')
    this.setState({isFarenheit: !this.state.isFarenheit})
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
            <ToggleFC handleToggle={this.ToggleFarenheit} />
            <CurrentTemperature isFarenheit={this.state.isFarenheit} temp={this.state.temperature} />
            <div>
              Relative Humidity: {this.state.humidity} %
            </div>
            <Battery onBattery={this.state.onBattery} />
            <Target targetTemp={this.state.targetTemp} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
