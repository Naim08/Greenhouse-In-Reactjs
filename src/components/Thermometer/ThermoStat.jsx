import { useState, useEffect } from "react";
import "./ThermoStat.css";
import { useClimate } from "../../context/ClimateContext";

function Thermostat() {
  const { temperature, setTemperature } = useClimate();
  const { desiredTemperature, setDesiredTemperature } = useClimate();

  const handleTemperatureChange = (value) => {
    setDesiredTemperature(value);
  };

  return (
    <div className="thermostat">
      <div className="temperature-display">
        <div className="temperature">{temperature}°F</div>
        <div className="desired-temperature">
          Desired Temperature: {desiredTemperature}°F
        </div>
      </div>
      <div className="temperature-controls">
        <button onClick={() => handleTemperatureChange(desiredTemperature - 1)}>
          -
        </button>
        <button onClick={() => handleTemperatureChange(desiredTemperature + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
