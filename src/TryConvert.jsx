export  function toCelsius(fahrenheit) {
return (fahrenheit - 32) * 5 / 9;

}

export  function toFahrenheit(celsius) {
  return (celsius * 9/5)  +  32;
  
  }


export function TryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
}

