import React from 'react';
import {Watch} from 'react-loader-spinner';
import axios from 'axios';

export default function Weather(props) {

    function showForecast(response) {
        alert (`The weather in ${response.data.name} is ${response.data.main.temp} °C`)
    }
    let apiKey = '4a7c01390293f156a41b247c2f0f0679';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showForecast);
    return (
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
}
