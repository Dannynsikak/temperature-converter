// TemperatureConverter class
class TemperatureConverter {
  constructor(value, fromUnit, toUnit) {
    this.value = value;
    this.fromUnit = fromUnit;
    this.toUnit = toUnit;
  }

  convert() {
    let result;
    try {
      if (isNaN(this.value)) {
        throw new Error("Invalid input: Please enter a valid input.");
      }

      switch (this.fromUnit + " to " + this.toUnit) {
        case "celsius to fahrenheit":
          result = (this.value * 9) / 5 + 32;
          break;
        case "celsius to kelvin":
          result = this.value + 273.15;
          break;
        case "fahrenheit to celsius":
          result = ((this.value - 32) * 5) / 9;
          break;
        case "fahrenheit to kelvin":
          result = ((this.value - 32) * 5) / 9 + 273.15;
          break;
        case "kelvin to celsius":
          result = this.value - 273.15;
          break;
        case "kelvin to fahrenheit":
          result = ((this.value - 273.15) * 9) / 5 + 32;
          break;
        case "celsius to celsius":
        case "fahrenheit to fahrenheit":
        case "kelvin to kelvin":
          result = this.value; // No conversion needed
          break;
        default:
          throw new Error("Conversion type not supported.");
      }
    } catch (error) {
      return `Error: ${error.message}`;
    } finally {
      console.log(
        "Conversion attempted between " + this.fromUnit + " and " + this.toUnit
      );
    }
    return `${this.value} ${this.fromUnit} is equal to ${result.toFixed(2)} ${
      this.toUnit
    }`;
  }
}
document.getElementById("convert").addEventListener("click", function () {
  const value = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;

  const converter = new TemperatureConverter(value, fromUnit, toUnit);
  const result = converter.convert();
  document.getElementById("result").innerHTML = result;
});
