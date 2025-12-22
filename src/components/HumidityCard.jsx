export default function HumidityCard({ humidity }) {
  return (
    <div className="weather-details-card components-details b-radius12">
      <span className="weather-detail-text">Humidity </span>
      <br />
      <span className="detail-text-1-5rem">{humidity}%</span>
    </div>
  );
}
