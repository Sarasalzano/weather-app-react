import DayCard from "./DayCard";

export default function WeekDayList({
  minTemp,
  maxTemp,
  weatherCode,
  day,
  weatherData,
  tempUnit,
  setTempUnit,
}) {
  return (
    <>
      <h2>Daily forecast</h2>
      <div className="week-days-wrapper">
        <DayCard
          minTemp={minTemp}
          maxTemp={maxTemp}
          weatherCode={weatherCode}
          day={day}
          weatherData={weatherData}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
      </div>
    </>
  );
}
