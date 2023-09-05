import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
import { useTheme } from "../../context/ThemeContext";
import { useClimate } from "../../context/ClimateContext";
import { useEffect } from "react";
function Greenhouse() {
  const { themeName } = useTheme();
  const { temperature, setTemperature } = useClimate();
  const { desiredTemperature, setDesiredTemperature } = useClimate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (temperature < desiredTemperature) {
        setTemperature(temperature + 1);
      } else if (temperature > desiredTemperature) {
        setTemperature(temperature - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [temperature, desiredTemperature]);

  const dayOrNight = themeName === "day" ? dayImage : nightImage;
  return (
    <section>
      <div>
        <img className="greenhouse-img" src={dayOrNight} alt="greenhouse" />
      </div>
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
