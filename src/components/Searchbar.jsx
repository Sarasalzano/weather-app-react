import { useState } from "react";
import CitySuggestionsList from "./CitySuggestionsList";
export default function Searchbar({setSelectedCities}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search-bar-container">
      <button onClick={() => setIsOpen(!isOpen)}>Search for a place...</button>
      <div className="dropdown-menu-cities">
        {isOpen && <CitySuggestionsList setSelectedCities = {setSelectedCities}/>}
      </div>
    </div>
  );
}
