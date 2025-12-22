import Sunny from "../assets/images/icon-sunny.webp";
import PartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import OverCast from "../assets/images/icon-overcast.webp";
import Fog from "../assets/images/icon-fog.webp";
import Rain from "../assets/images/icon-rain.webp";
import Storm from "../assets/images/icon-storm.webp";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Snow from "../assets/images/icon-snow.webp";

export default function HourlyForecastCard({
  temps,
  hours,
  weatherCode,
  tempUnit,
  setTempUnit,
}) {
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

  return (
    <div className="hourly-fc-card components-details">
      {hours.map((hour, index) => {
        return (
          <div key={index} className="hour-row">
            <div className="hourly-icon-wrapper">
              <img
                src={weatherMap[weatherCode?.[index]] || Sunny}
                alt="weather icon"
                className="hourly-icon"
              />
            </div>
            <div className="hours-text">
              <span>
                {new Date(hour).toLocaleTimeString(["en-US"], {
                  hour: "2-digit",
                })}
              </span>
            </div>
            <div>
              {/* arrotonda temperature */}
              <span> {Math.round(temps[index])}° </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
