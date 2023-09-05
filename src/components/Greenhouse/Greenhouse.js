import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
import { useTheme } from "../../context/ThemeContext";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  console.log("themeName", themeName);
  const dayOrNight = themeName === "day" ? dayImage : nightImage;
  return (
    <section>
      <div>
        {themeName === "day" ? (
          <img className="greenhouse-img" src={dayImage} alt="greenhouse" />
        ) : (
          <img className="greenhouse-img" src={nightImage} alt="greenhouse" />
        )}
      </div>
      <LightSwitch
        onClick={() => setThemeName(themeName === "day" ? "night" : "day")}
      />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
