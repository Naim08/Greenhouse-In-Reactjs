import { createContext, useContext, useState } from "react";

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

const ClimateContext = createContext({
  temperature: 50,
  humidity: 40,
  setTemperature: () => {},
  setHumidity: () => {},
});

export function ClimateProvider({ children }) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);

  return (
    <ClimateContext.Provider
      value={{ temperature, humidity, setTemperature, setHumidity }}
    >
      {children}
    </ClimateContext.Provider>
  );
}

export function useClimate() {
  return useContext(ClimateContext);
}
