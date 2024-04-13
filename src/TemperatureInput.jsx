import React from "react";


const temp = {
  c: "Celsius",
  f: "Farenheit"
}
class TemperatureInput extends React.Component{

 handleChange = (event) =>  this.props.handleChange(event.target.value)
  
  render() {
    return (
      <div>
        <label>{temp[this.props.type]}: </label>
        <input type="text" 
        value={this.props.temperature}
        onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TemperatureInput;