import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Location from "./components/Location";
import WeatherDetailList from "./components/WeatherDetailList";
import WeekDayList from "./components/WeekDayList";
import HourlyForecastList from "./components/HourlyForecastList";

function App() {
  // Città di default
  function getDefaultCity() {
    return { name: "Berlin", lat: 52.52, lon: 13.41 };
  }

  // Stato città
  const [selectedCities, setSelectedCities] = useState(getDefaultCity());

  console.log("selectedCities:", selectedCities);
  console.log("lat:", selectedCities?.lat);
  console.log("lon:", selectedCities?.lon);

  // Stato dati meteo che ricavo dall'Api
  const [weatherData, setWeatherData] = useState(null);

  //setto stato delle temperature
  const [tempUnit, setTempUnit] = useState("celsius");

  //setto stato di velocità del vento
  const [windUnit, setWindUnit] = useState("kmh");

  //unità di misura pioggia
  const [precipUnit, setPrecipUnit] = useState("mm");

  // Endpoint dinamico
  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCities.lat}&longitude=${selectedCities.lon}&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,precipitation,cloudcover,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`;
  // Chiamata axios
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]); // si aggiorna quando cambia la città

  // Se i dati non sono ancora arrivati
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Estraggo i dati utili destrutturandoli
  const { current_weather, daily, hourly } = weatherData;

  function formatDate(dateString) {
    const date = new Date(dateString);

    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} ${month} ${year}`;
  }

  return (
    <div className="main-wrapper">
      <Header
        setPrecipUnit={setPrecipUnit}
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
        windUnit={windUnit}
        setWindUnit={setWindUnit}
        precipUnit={precipUnit}
      />
      <h1>How's the sky looking today</h1>

      <Searchbar setSelectedCities={setSelectedCities} />

      <div className="outer-bottom-container">
        <div className="col-left">
          {/* Location */}
          <Location
            name={selectedCities.name}
            lat={selectedCities.lat}
            lon={selectedCities.lon}
            temps={current_weather.temperature}
            precipitation={daily.precipitation_sum[0]}
            weatherCode={current_weather.weathercode}
            currentDate={formatDate(current_weather.time)}
            tempUnit={tempUnit}
            setTempUnit={setTempUnit}
            weatherData={weatherData}
          />

          {/* Weather details */}
          <div className="weather-details">
            <WeatherDetailList
              humidity={hourly.relativehumidity_2m[0]}
              windSpeed={current_weather.windspeed}
              precipitation={daily.precipitation_sum[0]}
              feelsLike={hourly.apparent_temperature[0].toFixed(0)}
              tempUnit={tempUnit}
              setTempUnit={setTempUnit}
              windUnit={windUnit}
              setWindUnit={setWindUnit}
              precipUnit={precipUnit}
              setPrecipUnit={setPrecipUnit}
              feelsLikeWeather={weatherData.hourly.apparent_temperature[0]}
            />
          </div>

          {/* Week days */}
          <div className="week-days">
            <WeekDayList
              maxTemp={daily.temperature_2m_max}
              minTemp={daily.temperature_2m_min}
              weatherCode={daily.weathercode}
              day={daily.time}
              weatherData={weatherData}
              tempUnit={tempUnit}
              setTempUnit={setTempUnit}
            />
          </div>
        </div>

        {/* Hourly forecast */}
        <div className="col-right">
          <HourlyForecastList
            temps={hourly.temperature_2m}
            day={daily.time}
            hours={weatherData.hourly.time}
            weatherCode={weatherData.hourly.weather_code}
            tempUnit={tempUnit}
            setTempUnit={setTempUnit}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
