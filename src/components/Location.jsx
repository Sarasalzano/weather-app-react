import Sunny from "../assets/images/icon-sunny.webp";
import PartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import OverCast from "../assets/images/icon-overcast.webp";
import Fog from "../assets/images/icon-fog.webp";
import Rain from "../assets/images/icon-rain.webp";
import Storm from "../assets/images/icon-storm.webp";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Snow from "../assets/images/icon-snow.webp";
import BgTodayLarge from "../assets/images/bg-today-large.svg";

export default function Location({
  name,
  weatherCode,
  currentDate,
  weatherData,
  tempUnit,
}) {
  const tempCelsius = weatherData.current_weather.temperature;
  // Conversione
  const displayTemp =
    tempUnit === "celsius" ? tempCelsius : (tempCelsius * 9) / 5 + 32;

  const unit = tempUnit === "celsius" ? "°C" : "°F";

  // Trasformo il codice in stringa leggibile
  const weatherMap = {
    0: Sunny,
    1: PartlyCloudy,
    2: OverCast,
    3: OverCast,
    45: Fog,
    48: Fog,
    51: Drizzle,
    53: Drizzle,
    55: Drizzle,
    61: Drizzle,
    63: Rain,
    65: Storm,
    80: Rain,
    81: Rain,
    82: Storm,
    71: Snow,
    73: Snow,
    75: Snow,
  };

  const weatherImg = weatherMap[weatherCode] || Sunny;

  return (
    <div
      className="location-container"
      style={{
        backgroundImage: `url(${BgTodayLarge})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="location-content-wrapper">
        <div className="content-wrapper-col-left">
          <h2>{name}</h2>
          <span>{currentDate}</span>
        </div>

        <div className="content-wrapper-col-right">
          <div className="icon-weather-lg">
            <img
              src={weatherImg}
              alt="weather icon"
              className="weather-icon-big"
            />
          </div>
          <div>
            <h2 className="temps-big">{displayTemp.toFixed(0)}°</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
