import "./App.css";
import DayForecast from "./date-forecast";
import { forecast } from "../forecast.js";

function App() {
  return (
    <>
      <div class="container">
        <h1>Weekly Weather Forecast</h1>
        <div class="week-forecast">
          {forecast &&
            forecast.map((data, index) => (
              <DayForecast
                {...data}
                key={index}
                // weekday={data.weekday}
                // tempDay={data.tempDay}
                // tempNight={data.tempNight}
                // weather={data.weather}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
