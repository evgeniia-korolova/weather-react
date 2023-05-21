import React, {useState} from 'react';
// import {Watch} from 'react-loader-spinner';
import axios from 'axios';
import './Weather.css'

export default function Weather(props) {
    const [city, setCity] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState(null);

    function showForecast(response) {
        setLoaded(true);
        setWeather({
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
        
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = '4a7c01390293f156a41b247c2f0f0679';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(showForecast);
    }

    function updateCity(event) {
        setCity(event.target.value);        
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Enter a city..."
                onChange={updateCity}
            ></input>
            <input type="submit" value="search"></input>
        </form>
    );

    if (loaded) {
        return (
          <div>
            {form}
            <ul>
              <li>Temperature:{Math.round(weather.temperature)}°C</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {Math.round(weather.humidity)}%</li>
              <li>Wind: {Math.round(weather.wind)}km/h</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>
          </div>
        );
    } else {
        return form
    }

}
