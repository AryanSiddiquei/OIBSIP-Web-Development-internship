function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;

  let result;

  if (inputUnit === "celsius") {
    if (outputUnit === "celsius") {
      result = inputTemp;
    } else if (outputUnit === "fahrenheit") {
      result = (inputTemp * 9) / 5 + 32;
    } else if (outputUnit === "kelvin") {
      result = inputTemp + 273.15;
    }
  } else if (inputUnit === "fahrenheit") {
    if (outputUnit === "celsius") {
      result = ((inputTemp - 32) * 5) / 9;
    } else if (outputUnit === "fahrenheit") {
      result = inputTemp;
    } else if (outputUnit === "kelvin") {
      result = ((inputTemp - 32) * 5) / 9 + 273.15;
    }
  } else if (inputUnit === "kelvin") {
    if (outputUnit === "celsius") {
      result = inputTemp - 273.15;
    } else if (outputUnit === "fahrenheit") {
      result = ((inputTemp - 273.15) * 9) / 5 + 32;
    } else if (outputUnit === "kelvin") {
      result = inputTemp;
    }
  }

  document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${
    outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)
  }`;
}
