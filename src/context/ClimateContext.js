import { createContext, useContext, useState } from "react";

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [desiredTemperature, setDesiredTemperature] = useState(50);

  return (
    <ClimateContext.Provider
      value={{
        temperature,
        humidity,
        setTemperature,
        setHumidity,
        desiredTemperature,
        setDesiredTemperature,
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
