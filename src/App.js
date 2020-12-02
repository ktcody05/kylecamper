import React, { Component } from 'react';
import './bulma.css';
import './App.css'
import CurrentTemperature from './components/CurrentTemperature'
import Battery from './components/Battery'
import ToggleFC from './components/ToggleFC';
import Target from './components/Target'
const crypto = require('crypto')

class App extends Component {

  constructor() {
    super()

    this.state = {
      humidity: 0,
      temperature: 0,
      isFarenheit: true,
      hasLoaded: false,
      hideControls: true,
      password: ''
    }
  }
  handlePassword = (e) =>{
    let hash = crypto.createHash('md5').update(e.target.value).digest('hex')
    console.log(hash)
    this.setState({ 
      hideControls: hash !== "e7e9ec3723447a642f762b2b6a15cfd7",
      password: e.target.value

   })
  }

  componentDidMount() {
    setInterval(() => this.getData(), 3000)
  }
  getData = async () => {

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
      targetTemp: targetTempData.value,
      hasLoaded: true

    })

    console.log(data)
  }

  toggleFarenheit = () => {
    this.setState({ isFarenheit: !this.state.isFarenheit })
  }

  render() {
    if (!this.state.hasLoaded) {
      return (<div>loading</div>)
    }
    let displayPassword
    if (this.state.hideControls){
      displayPassword = this.state.hideControls?'is-danger':'is-success'
    }

    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Camper Monitor
              </h1>
              <h2 className="subtitle">
                2018 Shasta Oasis
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <CurrentTemperature isFarenheit={this.state.isFarenheit} temp={this.state.temperature} handleToggle={this.toggleFarenheit} />
            <div className="columns">
            <div className= "column is-one-third has-text-weight-bold">Relative Humidity </div>
            <div className= "column is-one-third ">{this.state.humidity} %</div> 
            </div>
            <Battery onBattery={this.state.onBattery} />
            <Target isFarenheit={this.state.isFarenheit} targetTemp={this.state.targetTemp} hidden={this.state.hideControls} password={this.state.password} />
            <input className={`input ${displayPassword}`} type="password" onChange={this.handlePassword} placeholder="Enter password to unlock controls." />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
