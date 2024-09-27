import "./App.css";
import { useState } from "react";

function App() {
  const [num, setUnit] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");

  const handleInputChange = (e) => setUnit(e.target.value);
  const handleFromUnitChange = (e) => setFromUnit(e.target.value);
  const handleToUnitChange = (e) => setToUnit(e.target.value);
  const getValue = (e) => {
    e.preventDefault();
    let unit;
    let ans = 0;
    if (num === "") {
      unit = "";
    } else {
      unit = Number(num);
      if (toUnit === "Celsius") {
        if (fromUnit === "Fahrenheit") {
          ans = ((unit - 32) * 5) / 9;
        }
        if (fromUnit === "Kelvin") {
          ans = unit - 273.15;
        }
      } else if (toUnit === "Fahrenheit") {
        if (fromUnit === "Celsius") {
          ans = unit * (9 / 5) + 32;
        }
        if (fromUnit === "Kelvin") {
          ans = (unit - 273.15) * 1.8 + 32;
        }
      } else if (toUnit === "Kelvin") {
        if (fromUnit === "Fahrenheit") {
          ans = ((unit - 32) * 5) / 9 + 273.15;
        }
        if (fromUnit === "Celsius") {
          ans = unit + 273.15;
        }
      }
    }

    // °F = °C × (9/5) + 32.
    // Kelvin = Celsius + 273.15.
    // K = (F − 32) × 5 ⁄ 9 + 273.15.
    // F = (K − 273.15) × 1.8 + 32

    console.log(`${unit} ${fromUnit} is ${ans} ${toUnit}`);
    if (unit === "" && fromUnit === "" && toUnit === "") {
      document.getElementById(
        "output"
      ).innerHTML = `<div class="error">Enter the valid Details</div>`;
    } else if ((unit === "" && toUnit === "") || fromUnit === "") {
      document.getElementById(
        "output"
      ).innerHTML = `<div class="error">Enter the valid Unit and Temeprature</div>`;
    } else if (unit === "" && toUnit !== "" && fromUnit !== "") {
      document.getElementById(
        "output"
      ).innerHTML = `<div class="error">Enter the valid Unit</div>`;
    } else if ((unit !== "" && toUnit === "") || fromUnit === "") {
      document.getElementById(
        "output"
      ).innerHTML = `<div class="error">Enter the valid Temperature</div>`;
    } else if (unit !== "" && fromUnit === toUnit) {
      document.getElementById(
        "output"
      ).innerHTML = `<div class="error">Both the Temperature are same</div>`;
    } else {
      document.getElementById(
        "output"
      ).innerHTML = `<h4>${unit} ${fromUnit} is ${ans} ${toUnit}</h4>`;
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Temperature Converter</h1>
        <h4>Enter the temperature,select units and submit</h4>
        <div>
          <form action="" className="temp-fields">
            <div>
              <label htmlFor="units" className="label-units">
                Units:
              </label>
              <input
                type="number"
                name="units"
                placeholder="Enter the unit"
                onChange={handleInputChange}
                value={num}
                className="input-units"
              />
            </div>
            <div>
              <label htmlFor="from" className="label-units">
                From:
              </label>
              <select
                id="to"
                name="from"
                className="input-field"
                value={fromUnit}
                onChange={handleFromUnitChange}
              >
                <option value="" selected disabled hidden>
                  Choose from
                </option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Celsius">Celsius</option>
                <option value="Kelvin">Kelvin</option>
              </select>
            </div>
            <div>
              <label htmlFor="to" className="label-units">
                To:
              </label>
              <select
                id="from"
                name="to"
                className="input-field"
                value={toUnit}
                onChange={handleToUnitChange}
              >
                <option value="" selected disabled hidden>
                  Choose to
                </option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Celsius">Celsius</option>
                <option value="Kelvin">Kelvin</option>
              </select>
            </div>
            <button onClick={getValue} className="submit">
              Convert
            </button>
          </form>
          <div id="output"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
