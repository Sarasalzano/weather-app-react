import cities from "../data/cities";

export default function CitySuggestionsList({setSelectedCities}) {
  return (
    <div className="city-row">
      {cities.map((city, index) => {
        return (
          <button key={index}
          onClick={() => setSelectedCities(city)}
          className="city-name-container">
            {city.name}
          </button>
        );
      })}
    </div>
  );
}
