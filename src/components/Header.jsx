import Logo from "../assets/images/logo.svg";
import Units from "../assets/images/icon-units.svg";
import { useState } from "react";
export default function Header({
  tempUnit,
  setTempUnit,
  windUnit,
  setWindUnit,
  precipUnit,
  setPrecipUnit,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-col-left">
          <img src={Logo} alt="weather now logo" />
        </div>
        <div className="header-col-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={Units} alt="units settings icon" />
            <span>Units</span>
          </button>
          {isOpen && (
            <div className="weather-options-list">
              <div className="weather-options-row">Temperature</div>
              <div
                className={`weather-options-row ${
                  tempUnit === "celsius" ? "active" : ""
                }`}
                onClick={() => setTempUnit("celsius")}
              >
                Celsius (°C)
              </div>
              <div
                className={`weather-options-row ${
                  tempUnit === "fahrenheit" ? "active" : ""
                }`}
                onClick={() => setTempUnit("fahrenheit")}
              >
                Fahrenheit (°F)
              </div>

              <div className="weather-options-row">Wind Speed</div>
              <div
                className={`weather-options-row ${
                  windUnit === "kmh" ? "active" : ""
                }`}
                onClick={() => setWindUnit("kmh")}
              >
                km/h
              </div>
              <div
                className={`weather-options-row ${
                  windUnit === "mph" ? "active" : ""
                }`}
                onClick={() => setWindUnit("mph")}
              >
                mph
              </div>

              <div className="weather-options-row">Precipitation</div>
              <div
                className={`weather-options-row ${
                  precipUnit === "mm" ? "active" : ""
                }`}
                onClick={() => setPrecipUnit("mm")}
              >
                Millimeters (mm)
              </div>
              <div
                className={`weather-options-row ${
                  precipUnit === "in" ? "active" : ""
                }`}
                onClick={() => setPrecipUnit("in")}
              >
                Inches (in)
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
