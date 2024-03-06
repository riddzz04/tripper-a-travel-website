import React, { useState, useEffect } from 'react';
import "./forcaststyles.css";

const WeatherForecast = ({ location }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = 'c8baf2385c429a3aa3c062a8e7d26705'; 

  useEffect(() => {
    const today = new Date(); // Get the current date
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedForecast = data.list.slice(0, 4).map((item, index) => ({
          date: new Date(today.getTime() + index * 24 * 60 * 60 * 1000).toLocaleDateString(), // Increment the date
          temperature: Math.round(item.main.temp - 273.15),
          conditions: item.weather[0].main, 
        }));

        setForecast(formattedForecast);
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  }, [location, apiKey]);

  return (
    <div className="weather-forecast">
      <h2>Weather Forecast</h2>
      <div className="forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <div className="day">{day.date}</div>
            <div className="temperature">{day.temperature}°C</div>
            <div className="conditions">{day.conditions}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
