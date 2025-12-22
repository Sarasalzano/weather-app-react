import FeelsLikeCard from "./FeelsLikeCard";
import WindCard from "./WindCard";
import PrecipitationCard from "./PrecipitationCard";
import HumidityCard from "./HumidityCard";

export default function WeatherDetailList({
  feelsLike,
  humidity,
  windSpeed,
  precipitation,
  tempUnit,
  setTempUnit,
  windUnit,
  setWindUnit,
  precipUnit,
  setPrecipUnit,
  weatherData,
  feelsLikeWeather,
}) {
  return (
    <>
      <div className="weather-details-wrapper">
        <FeelsLikeCard
          feelsLike={feelsLike}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
          weatherData={weatherData}
          feelsLikeWeather={feelsLikeWeather}
        />
        <HumidityCard humidity={humidity} />
        <WindCard
          windSpeed={windSpeed}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
        />
        <PrecipitationCard
          precipitation={precipitation}
          precipUnit={precipUnit}
          setPrecipUnit={setPrecipUnit}
        />
      </div>
    </>
  );
}
