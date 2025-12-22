export default function WindCard({ windSpeed, windUnit }) {
  // Converti da km/h a mph se necessario
  const displaySpeed = windUnit === "kmh" ? windSpeed : windSpeed * 0.621371;

  return (
    <div className="weather-details-card components-details">
      <span className="weather-detail-text">Wind </span>
      <br />
      <span className="detail-text-1-5rem">
        {displaySpeed.toFixed(1)} {windUnit}
      </span>
    </div>
  );
}
