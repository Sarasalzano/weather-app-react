import Sunny from "../assets/images/icon-sunny.webp";
import PartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import OverCast from "../assets/images/icon-overcast.webp";
import Fog from "../assets/images/icon-fog.webp";
import Rain from "../assets/images/icon-rain.webp";
import Storm from "../assets/images/icon-storm.webp";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Snow from "../assets/images/icon-snow.webp";
import { useState } from "react";

export default function DayCard({
  minTemp,
  maxTemp,
  weatherCode,
  day,
  weatherData,
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

  if (!weatherData) {
    return null;
  }

  return day.map((singleDay, index) => {
    // CONVERTI MIN
    const displayMin =
      tempUnit === "celsius" ? minTemp[index] : (minTemp[index] * 9) / 5 + 32;

    // CONVERTI MAX
    const displayMax =
      tempUnit === "celsius" ? maxTemp[index] : (maxTemp[index] * 9) / 5 + 32;

    const weekDayName = new Date(singleDay).toLocaleDateString("en-US", {
      weekday: "long",
    });
    return (
      <div key={index} className="day-card components-details">
        <span className="day-name">{weekDayName}</span>
        <img
          src={weatherMap[weatherCode?.[index]] || Sunny}
          alt="weather icon"
        />
        <div className="temp-min-max">
          <span>{displayMin.toFixed(0)}°</span>
          <span>{displayMax.toFixed(0)}°</span>
        </div>
      </div>
    );
  });
}
