# Weather App React

A modern and responsive weather web app built with React that displays real-time weather forecasts using the Open-Meteo API.

## Features

- **Real-time forecasts**: Up-to-date weather data for any city
- **Responsive design**: Optimized for both desktop and mobile
- **Unit conversion**: Support for Celsius/Fahrenheit, km/h/mph, mm/inches
- **Weekly forecasts**: View forecasts for the next 7 days
- **Hourly forecasts**: Hour-by-hour details, selectable by day
- **Modern UI**: Clean interface with gradients and modern cards

##  Technologies Used

- **React** - JavaScript framework for UI
- **Axios** - For API calls
- **Open-Meteo API** - Free weather data
- **CSS3** - Styling and responsive design

##  Features

### Desktop
- Two-column layout without scroll
- Daily and hourly forecasts side by side
- Optimized design for large screens

### Mobile
- Vertical layout with scroll
- 2x2 grid for weather details
- 3-column grid for weekly forecasts
- Well-distributed temperatures and times in hourly forecasts

##  Main Components

- `Location` - Main card with city and current temperature
- `WeatherDetailList` - Feels like, humidity, wind, precipitation
- `WeekDayList` - 7-day forecast
- `HourlyForecastList` - Hourly forecast with dropdown to select day
- `Header` - Menu to change units of measurement

##  How to Use

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the project: `npm start`
4. Search for a city and view the forecasts!

##  Notes

- API used: [Open-Meteo](https://open-meteo.com/)
- Default city: Berlin
- Supports all major cities worldwide

##  Project Details

**Design inspired by**: [Frontend Mentor](https://www.frontendmentor.io/) - Weather icons and graphic assets were taken from a Frontend Mentor challenge.

