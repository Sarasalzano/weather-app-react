export default function PrecipitationCard({ precipitation, precipUnit }) {
  const displayValue =
    precipUnit === "mm" ? precipitation : precipitation * 0.0393701;

  return (
    <div className="weather-details-card components-details">
      <span className="weather-detail-text">Precipitation</span>
      <br />
      <span className="detail-text-1-5rem">
        {displayValue.toFixed(1)} {precipUnit}
      </span>
    </div>
  );
}
