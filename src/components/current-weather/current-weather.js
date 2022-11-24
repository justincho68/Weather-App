import React from "react";
import "./current-weather.css"
import moment from "moment";

const CurrentWeather = ({ data }) => {
  return (
    <div className="main">
      <p className="header"> &nbsp; {data.name}</p>
      <div className="flex">
        <p className="day">Day: {moment().format('dddd')}</p>
        <p className="description">{moment().format('LL')}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {Math.round(data.main.temp)}°C</p>
        <p className="temp">Humidity: {data.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="pressure-windspeed">Wind Speed: {data.wind.speed} m/s</p>
        <p className="pressure-windspeed">Pressure: {data.main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default CurrentWeather;