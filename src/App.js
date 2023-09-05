import { Switch, Route } from "react-router-dom";
import Greenhouse from "./components/Greenhouse";
import Navigation from "./components/Navigation";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";
import Thermostat from "./components/Thermometer/ThermoStat";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/thermometer">
          <Thermometer />
        </Route>
        <Route path="/thermostat">
          <Thermostat />
        </Route>
        <Route path="/hygrometer">
          <Hygrometer />
        </Route>
        <Route path="/">
          <Greenhouse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
