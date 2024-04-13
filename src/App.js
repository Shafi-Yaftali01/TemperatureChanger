import React from "react";
import TemperatureInput from "./TemperatureInput";
import *  as myFunc from './TryConvert';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      scale: 'c',
      tempera: ''

    }
  }  
  HandleChangeCelsius = (tempera)=> this.setState({scale: 'c',
      tempera: tempera})
  

  HandleChangeFarenheit = (tempera)=> this.setState({
    scale: 'f',
    tempera: tempera
  })
  render() {
    const celcsius = this.state.f  === 'f' ? myFunc.TryConvert(this.state.tempera, myFunc.toCelsius) : this.state.tempera
    const fahrenheit = 'c' ? myFunc.TryConvert(this.state.tempera, myFunc.toFahrenheit) : this.state.tempera
    return(
      <div>
        <TemperatureInput temperature={celcsius} type="c" handleChange={this.HandleChangeCelsius}/>
        <TemperatureInput temperature={fahrenheit} type="f" handleChange = {this.HandleChangeFarenheit} />
      </div>
    )
  }
}

export default App;

