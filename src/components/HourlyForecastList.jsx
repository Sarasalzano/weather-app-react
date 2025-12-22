import { useState } from "react";
import HourlyForecastCard from "./HourlyForecastCard";

export default function HourlyForecastList({
  temps,
  hours,
  weatherCode,
  day,
  tempUnit,
  setTempUnit,
}) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // FILTRO LE ORE DEL GIORNO SELEZIONATO
  const filteredHours = selectedDay
    ? hours?.filter((h) => h.startsWith(selectedDay))
    : hours;

  const filteredTemps = selectedDay
    ? temps?.filter((_, i) => hours[i].startsWith(selectedDay))
    : temps;

  const filteredWeatherCodes = selectedDay
    ? weatherCode?.filter((_, i) => hours[i].startsWith(selectedDay))
    : weatherCode;

  // Funzione per ottenere il nome del giorno selezionato
  const getSelectedDayName = () => {
    if (!selectedDay) return "Select a day";
    return new Date(selectedDay).toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  return (
    <>
      {/* QUESTO RIMANE FISSO FUORI */}
      <div className="fc-list-title-wrapper">
        <h3>Hourly Forecast</h3>

        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          <button
            className="dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{getSelectedDayName()}</span>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" />
            </svg>
          </button>

          {isOpen && (
            <div className="dropdown-menu">
              {day.map((singleDay, index) => {
                const weekDayName = new Date(singleDay).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                  }
                );

                return (
                  <div
                    key={index}
                    className={`dropdown-item ${
                      selectedDay === singleDay ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedDay(singleDay);
                      setIsOpen(false);
                    }}
                  >
                    {weekDayName}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* SOLO QUESTO SCROLLA */}
      <div className="hourly-fc-list">
        <HourlyForecastCard
          temps={filteredTemps}
          hours={filteredHours}
          weatherCode={filteredWeatherCodes}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
      </div>
    </>
  );
}
