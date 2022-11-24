import Search from './components/search/search';
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/current-weather/current-weather';
import 'semantic-ui-css/semantic.min.css';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from './components/current-weather/current-weather';
import { render } from '@testing-library/react';
import image from "./images/weather-background.webp";

//useEffect function to find user location with Latitude/Longitude



function App() {

  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);


  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="background" style={{
      backgroundImage: `url(${image})`, backgroundSize: "cover",
      width: "100%", height: 825
    }}>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>

    </div>
  );
}

export default App;

