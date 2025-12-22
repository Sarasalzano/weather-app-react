export default function FeelsLikeCard({
  tempUnit,
  setTempUnit,
  weatherData,
  feelsLikeWeather,
}) {
  const displayTemp =
    tempUnit === "celsius" ? feelsLikeWeather : (feelsLikeWeather * 9) / 5 + 32;

  const unit = tempUnit === "celsius" ? "°C" : "°F";

  return (
    <div className="weather-details-card components-details">
      <span className="weather-detail-text">Feels like </span>
      <br />
      <div className="detail-text-1-5rem"> {displayTemp.toFixed(0)}° </div>
    </div>
  );
}
